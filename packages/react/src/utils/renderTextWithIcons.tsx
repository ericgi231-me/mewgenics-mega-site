import { STAT_ICON_MAPPINGS, COLLAR_ICON_MAPPINGS } from "../data/textToIconMaps";
import type { Stat, Collar } from "../types";

const STAT_KEYS: Stat[] = Object.keys(STAT_ICON_MAPPINGS) as Stat[];
const COLLAR_KEYS: Collar[] = Object.keys(COLLAR_ICON_MAPPINGS) as Collar[];

export function renderTextWithIcons(text: string) {
  // Build regex for both stats and collars (case-insensitive)
  const statRegex = `\\b(${STAT_KEYS.join('|')})\\b`;
  const collarRegex = `\\b(${COLLAR_KEYS.map(k => k.replace(/([.*+?^=!:${}()|[\\]\/\\])/g, "\\$1")).join('|')})\\b`;
  const combinedRegex = new RegExp(`${statRegex}|${collarRegex}`, 'gi');
  // Use matchAll to get indices and values
  const matches = Array.from(text.matchAll(combinedRegex));
  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  matches.forEach((match, i) => {
    const matchText = match[0];
    const start = match.index ?? 0;
    // Add text before the match
    if (start > lastIndex) {
      result.push(text.slice(lastIndex, start));
    }
    // Stat icon rendering (case-insensitive)
    const statKey = STAT_KEYS.find(k => k.toLowerCase() === matchText.toLowerCase());
    if (statKey) {
      const icon = STAT_ICON_MAPPINGS[statKey];
      result.push(
        <span key={"stat-" + i} className="inline-flex items-center mr-1 align-middle">
          {icon && <img src={icon} alt={statKey} className="w-5 h-5 mr-1 align-middle" />}
          <span className="align-middle">{matchText}</span>
        </span>
      );
      lastIndex = start + matchText.length;
      return;
    }
    // Collar icon rendering (case-insensitive)
    const collarKey = COLLAR_KEYS.find(k => k.toLowerCase() === matchText.toLowerCase());
    if (collarKey) {
      const icon = COLLAR_ICON_MAPPINGS[collarKey];
      result.push(
        <span key={"collar-" + i} className="inline-flex items-center mr-1 align-middle">
          {icon && <img src={icon} alt={collarKey} className="w-5 h-5 mr-1 align-middle" />}
          <span className="align-middle">{matchText}</span>
        </span>
      );
      lastIndex = start + matchText.length;
      return;
    }
  });
  // Add any remaining text after the last match
  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex));
  }
  return result;
}
