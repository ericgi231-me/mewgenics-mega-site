
import { STAT_ICON_MAPPINGS, COLLAR_ICON_MAPPINGS, STATUS_ICON_MAPPINGS } from "../data/textToIconMaps";

type IconMap = {
  [key: string]: string;
};

export type IconSets = {
  stats?: IconMap;
  collars?: IconMap;
  statuses?: IconMap;
};

function buildRegexFromKeys(keys: string[]): string {
  // Escape regex special characters in keys
  return keys.map(k => k.replace(/([.*+?^=!:${}()|[\\]\/\\])/g, "\\$1")).join('|');
}

// Memoize regex and key maps for iconSets
const regexCache = new WeakMap<IconSets, { regex: RegExp; keyToType: any; keyMap: any }>();

export function renderTextWithIcons(
  text: string,
  iconSets: IconSets = {
    stats: STAT_ICON_MAPPINGS,
    collars: COLLAR_ICON_MAPPINGS,
    statuses: STATUS_ICON_MAPPINGS,
  }
) {
  let cached = regexCache.get(iconSets);
  if (!cached) {
    const allKeys: string[] = [];
    const keyToType: { [key: string]: string } = {};
    const keyMap: { [lower: string]: string } = {};
    if (iconSets.stats) {
      Object.keys(iconSets.stats).forEach(k => {
        allKeys.push(k);
        keyToType[k.toLowerCase()] = 'stat';
        keyMap[k.toLowerCase()] = k;
      });
    }
    if (iconSets.collars) {
      Object.keys(iconSets.collars).forEach(k => {
        allKeys.push(k);
        keyToType[k.toLowerCase()] = 'collar';
        keyMap[k.toLowerCase()] = k;
      });
    }
    if (iconSets.statuses) {
      Object.keys(iconSets.statuses).forEach(k => {
        allKeys.push(k);
        keyToType[k.toLowerCase()] = 'status';
        keyMap[k.toLowerCase()] = k;
      });
    }
    const regexStr = `\\b(${buildRegexFromKeys(allKeys)})\\b`;
    const combinedRegex = new RegExp(regexStr, 'gi');
    cached = { regex: combinedRegex, keyToType, keyMap };
    regexCache.set(iconSets, cached);
  }
  const matches = Array.from(text.matchAll(cached.regex));
  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  matches.forEach((match, i) => {
    const matchText = match[0];
    const start = match.index ?? 0;
    if (start > lastIndex) {
      // Only wrap icon spans, plain text is pushed as a string
      result.push(text.slice(lastIndex, start));
    }
    const matchType = cached.keyToType[matchText.toLowerCase()];
    const originalKey = cached.keyMap[matchText.toLowerCase()];
    let icon = undefined;
    if (matchType === 'stat' && iconSets.stats && originalKey) {
      icon = iconSets.stats[originalKey];
    } else if (matchType === 'collar' && iconSets.collars && originalKey) {
      icon = iconSets.collars[originalKey];
    } else if (matchType === 'status' && iconSets.statuses && originalKey) {
      icon = iconSets.statuses[originalKey];
    }
    // Only wrap icon+text in span if icon exists
    if (icon) {
      result.push(
        <span key={matchType + '-' + i} className="inline-flex items-center mr-1 align-middle mb-1">
          <img src={icon} alt={originalKey || matchText} className="w-5 h-5 mr-1 align-middle" loading="lazy" />
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
