
import iconMappings from "../data/textToIconMaps.json";
import GameImg from "../components/GameImg";

type IconEntry = (typeof iconMappings)[number];

// All setup is deferred to first call — nothing runs at module parse/execute time.
let iconMap: Map<string, IconEntry> | null = null;
let iconRegex: RegExp | null = null;

function ensureInitialized() {
  if (iconMap !== null) return;

  iconMap = new Map(iconMappings.map(e => [e.text.toLowerCase(), e]));

  // Sort longer entries first so multi-word statuses match before single words
  const escapedTexts = [...iconMappings]
    .sort((a, b) => b.text.length - a.text.length)
    .map(e => e.text.replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"));
  iconRegex = new RegExp(`\\b(${escapedTexts.join('|')})\\b`, 'gi');

  // Preload all icon images now that the module is actually needed
  if (typeof window !== "undefined") {
    iconMappings.forEach(e => {
      const img = new Image();
      img.src = e.icon_path;
    });
  }
}

export function renderTextWithIcons(text: string) {
  ensureInitialized();
  const matches = Array.from(text.matchAll(iconRegex!));
  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  matches.forEach((match, i) => {
    const matchText = match[0];
    const start = match.index ?? 0;
    if (start > lastIndex) {
      result.push(text.slice(lastIndex, start));
    }
    const entry = iconMap!.get(matchText.toLowerCase());
    if (entry) {
      result.push(
        <span key={i} className="inline-flex items-center mr-1 align-middle mb-1">
          <GameImg src={entry.icon_path} alt={entry.text} width="20" height="20" className="w-5 h-5 mr-1 align-middle" />
          <span className="align-middle">{matchText}</span>
        </span>
      );
    } else {
      result.push(matchText);
    }
    lastIndex = start + matchText.length;
  });
  if (lastIndex < text.length) {
    result.push(text.slice(lastIndex));
  }
  return result;
}
