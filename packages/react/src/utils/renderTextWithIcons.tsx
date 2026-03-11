
import iconMappings from "../data/textToIconMaps.json";

// Build lookup: lowercase text → entry
const iconMap = new Map(iconMappings.map(e => [e.text.toLowerCase(), e]));

// Sort longer entries first so multi-word statuses match before single words
const escapedTexts = [...iconMappings]
  .sort((a, b) => b.text.length - a.text.length)
  .map(e => e.text.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"));
const iconRegex = new RegExp(`\\b(${escapedTexts.join('|')})\\b`, 'gi');

export function renderTextWithIcons(text: string) {
  const matches = Array.from(text.matchAll(iconRegex));
  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  matches.forEach((match, i) => {
    const matchText = match[0];
    const start = match.index ?? 0;
    if (start > lastIndex) {
      result.push(text.slice(lastIndex, start));
    }
    const entry = iconMap.get(matchText.toLowerCase());
    if (entry) {
      result.push(
        <span key={i} className="inline-flex items-center mr-1 align-middle mb-1">
          <img src={entry.icon_path} alt={entry.text} className="w-5 h-5 mr-1 align-middle" loading="lazy" />
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
