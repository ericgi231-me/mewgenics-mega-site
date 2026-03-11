#!/usr/bin/env node
/**
 * HtmlItemTableToJson.mjs
 *
 * Converts an HTML item table into separate JSON files, one per item slot type.
 * The JSON files match the GameObject type used in the React data files.
 *
 * Setup (one-time):
 *   npm install          (node-html-parser is in root devDependencies)
 *
 * Usage:
 *   node scripts/HtmlItemTableToJson.mjs <input.html> [output-dir]
 *
 *   input.html  — Path to the HTML file containing the item table
 *   output-dir  — Directory for output JSON files (default: ./scripts/output)
 *
 * Flags:
 *   --preview   — Print the first 3 parsed items per slot without writing files.
 *                 Use this to verify your CONFIG selectors are correct before
 *                 committing to a full run.
 *
 * Examples:
 *   node scripts/HtmlItemTableToJson.mjs items.html
 *   node scripts/HtmlItemTableToJson.mjs items.html scripts/output
 *   node scripts/HtmlItemTableToJson.mjs items.html --preview
 *
 * ─── EXPECTED HTML FORMAT ────────────────────────────────────────────────────
 *
 *   Each item is a <tr> (or other element, see CONFIG.itemSelector) with these
 *   data attributes:
 *
 *     data-slot     — Item slot type: weapon | neck | head | face | trinket | consumable
 *     data-rarity   — Rarity: common | uncommon | rare | very rare | no rarity | quest | side quest
 *     data-itemset  — Comma-separated set names, lowercase (e.g. "cleric,paper")
 *     data-uses     — Optional uses value (e.g. "3", "6", "8-12", "3/6")
 *
 *   Within the row, child elements provide:
 *     - Item name        selected by CONFIG.cells.name
 *     - Icon <img>       selected by CONFIG.cells.icon  (reads src attribute)
 *     - Description      selected by CONFIG.cells.description  (<br> → \n)
 *     - Uses (fallback)  selected by CONFIG.cells.usesFallback
 *
 * ─── CONFIGURATION ───────────────────────────────────────────────────────────
 *
 *   Adjust the CONFIG object below to match your HTML structure.
 *   The defaults assume a table with <tr> rows and cells in order:
 *   name | icon | description | uses (optional).
 */

import { parse } from 'node-html-parser';
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

// =============================================================================
// CONFIGURATION — edit these to match your HTML structure
// =============================================================================
const CONFIG = {
  // CSS selector for each item's container element (rows with a data-slot attr)
  itemSelector: '[data-slot]',

  // Data attribute names on the item element
  attributes: {
    slot:    'data-slot',
    rarity:  'data-rarity',
    itemset: 'data-itemset',
    uses:    'data-uses',    // set to null if your HTML has no data-uses attribute
  },

  // CSS selectors for content within each item element.
  // Uses nth-child fallbacks so it works even without class names.
  cells: {
    name:         '.abilitybox__name, .item-name, td:nth-child(1)',
    icon:         'img',
    description:  '.abilitybox__description, .item-description, .item-desc, td:nth-child(3)',
    usesFallback: '.item-uses, td:nth-child(4)',  // only used when data-uses is absent
  },

  // Slot keys (must match data-slot values) → display label for the Type note
  slots: {
    weapon:     'Weapon',
    neck:       'Neck',
    head:       'Head',
    face:       'Face',
    trinket:    'Trinket',
    consumable: 'Consumable',
  },

  // Output filenames (relative to output-dir)
  outputFiles: {
    weapon:     'weaponItems.json',
    neck:       'neckItems.json',
    head:       'headItems.json',
    face:       'faceItems.json',
    trinket:    'trinketItems.json',
    consumable: 'consumableItems.json',
  },
};
// =============================================================================

// ─── Helpers ──────────────────────────────────────────────────────────────────

function titleCase(str) {
  return str.replace(/\b\w/g, c => c.toUpperCase());
}

/** Returns true if value looks like a Handlebars/template placeholder. */
function isPlaceholder(value) {
  return /^\s*\{/.test(value);
}

/** Decodes basic HTML entities. */
function decodeEntities(str) {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#0*39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

/**
 * Converts the innerHTML of a description node to the output string format:
 *  - <br> tags become \n  (via a sentinel so surrounding whitespace is trimmed per-line)
 *  - Remaining HTML tags are stripped
 *  - HTML entities are decoded
 *  - Whitespace within each line is collapsed to single spaces
 *  - Empty lines are dropped
 */
const BR_SENTINEL = '\x00BR\x00';

function parseDescription(node) {
  if (!node) return '';
  let html = node.innerHTML;
  // Replace <br> with a sentinel BEFORE stripping tags so we can split on it later
  html = html.replace(/<br\s*\/?>/gi, BR_SENTINEL);
  html = html.replace(/<[^>]+>/g, '');
  html = decodeEntities(html);
  // Split on sentinel, normalise whitespace within each segment, drop blanks
  return html
    .split(BR_SENTINEL)
    .map(segment => segment.replace(/[\r\n\t ]+/g, ' ').trim())
    .filter(segment => segment.length > 0)
    .join('\n');
}

// ─── Item parsing ─────────────────────────────────────────────────────────────

function parseItem(el) {
  // Slot
  const slot = el.getAttribute(CONFIG.attributes.slot)?.toLowerCase().trim();
  if (!slot || !CONFIG.slots[slot]) return null;

  // Name — decode entities and normalise whitespace
  const nameEl = el.querySelector(CONFIG.cells.name);
  const name = nameEl ? decodeEntities(nameEl.text).trim().replace(/\s+/g, ' ') : '';
  if (!name) return null;

  // Icon — extract just the filename from the src, strip query strings, rebase to /assets/items/
  const iconEl = el.querySelector(CONFIG.cells.icon);
  const rawSrc = iconEl?.getAttribute('src') ?? '';
  const filename = rawSrc.split('?')[0].split('/').pop() ?? '';
  const icon_path = filename ? `/assets/items/${filename}` : '';

  // Description
  const descEl = el.querySelector(CONFIG.cells.description);
  const description = parseDescription(descEl);

  // Rarity
  const rawRarity = el.getAttribute(CONFIG.attributes.rarity)?.trim() ?? '';

  // Uses — prefer data attribute, fall back to cell content
  let uses = CONFIG.attributes.uses
    ? (el.getAttribute(CONFIG.attributes.uses)?.trim() ?? '')
    : '';
  if (!uses) {
    const usesEl = el.querySelector(CONFIG.cells.usesFallback);
    uses = usesEl?.text.trim() ?? '';
  }
  if (isPlaceholder(uses)) uses = '';

  // Sets
  const rawSets = el.getAttribute(CONFIG.attributes.itemset)?.trim() ?? '';

  // ─── Build notes ─────────────────────────────────────────────────────────
  const notes = [
    { label: 'Type', content: CONFIG.slots[slot] },
  ];

  if (rawRarity && rawRarity.toLowerCase() !== 'no rarity' && !isPlaceholder(rawRarity)) {
    notes.push({ label: 'Rarity', content: titleCase(rawRarity) });
  }

  if (uses) {
    notes.push({ label: 'Uses', content: uses });
  }

  if (rawSets && !isPlaceholder(rawSets)) {
    const setsDisplay = rawSets
      .split(',')
      .map(s => titleCase(s.trim()))
      .join(',');
    notes.push({ label: 'Sets', content: setsDisplay });
  }

  return {
    slot,
    item: { name, icon_path, description, notes },
  };
}

// ─── Main ─────────────────────────────────────────────────────────────────────

function main() {
  const rawArgs = process.argv.slice(2);
  const previewMode = rawArgs.includes('--preview');
  const args = rawArgs.filter(a => !a.startsWith('--'));

  if (!args[0]) {
    console.error(
      'Usage: node scripts/HtmlItemTableToJson.mjs <input.html> [output-dir] [--preview]'
    );
    process.exit(1);
  }

  const inputPath = args[0];
  const outputDir = args[1] ?? './scripts/output';

  // Read and parse HTML
  let html;
  try {
    html = readFileSync(inputPath, 'utf-8');
  } catch (err) {
    console.error(`Error reading file: ${inputPath}\n${err.message}`);
    process.exit(1);
  }

  const root = parse(html);
  const elements = root.querySelectorAll(CONFIG.itemSelector);

  if (elements.length === 0) {
    console.error(
      `No elements matched selector "${CONFIG.itemSelector}".\n` +
      `Check that your HTML has elements with a data-slot attribute, ` +
      `or update CONFIG.itemSelector.`
    );
    process.exit(1);
  }

  console.log(`Found ${elements.length} item elements.\n`);

  // Group items by slot
  const itemsBySlot = Object.fromEntries(
    Object.keys(CONFIG.slots).map(slot => [slot, []])
  );
  let skipped = 0;

  for (const el of elements) {
    const result = parseItem(el);
    if (!result) {
      skipped++;
      continue;
    }
    itemsBySlot[result.slot].push(result.item);
  }

  if (skipped > 0) {
    console.warn(`Skipped ${skipped} elements (unknown slot or missing name).\n`);
  }

  if (previewMode) {
    // In preview mode: print first 3 items per slot, then exit
    console.log('──── PREVIEW (first 3 items per slot) ────\n');
    for (const [slot, items] of Object.entries(itemsBySlot)) {
      if (items.length === 0) continue;
      console.log(`[${CONFIG.slots[slot]}] — ${items.length} items total`);
      items.slice(0, 3).forEach(item => {
        console.log(JSON.stringify(item, null, 2));
      });
      console.log('');
    }
    console.log('Run without --preview to write JSON files.');
    return;
  }

  // Write output files
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  console.log(`Writing to: ${outputDir}\n`);
  for (const [slot, items] of Object.entries(itemsBySlot)) {
    const outFile = join(outputDir, CONFIG.outputFiles[slot]);
    writeFileSync(outFile, JSON.stringify(items, null, 2), 'utf-8');
    console.log(`  ✓ ${CONFIG.slots[slot].padEnd(11)} ${items.length.toString().padStart(4)} items  →  ${outFile}`);
  }

  const total = Object.values(itemsBySlot).reduce((sum, arr) => sum + arr.length, 0);
  console.log(`\nDone! ${total} items written across ${Object.keys(CONFIG.slots).length} files.`);
}

main();
