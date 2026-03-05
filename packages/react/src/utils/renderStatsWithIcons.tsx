import { STAT_ICON_MAPPINGS } from "../data/stats";
import type { Stat } from "../types";

const STAT_KEYS: Stat[] = ['STR', 'DEX', 'CON', 'INT', 'SPD', 'CHA', 'LCK', 'ALL'];

export function renderStatsWithIcons(text: string) {
  const regex = new RegExp(`\\b(${STAT_KEYS.join('|')})\\b`, 'g');
  const parts = text.split(regex);

  return parts.map((part, i) => {
    if (STAT_KEYS.includes(part as Stat)) {
      // Only show icon if mapping exists
      const icon = STAT_ICON_MAPPINGS[part as Stat];
      return (
        <span key={i} className="inline-flex items-center mr-1">
          {icon && <img src={icon} alt={part} className="w-5 h-5 mr-1" />}
          <span>{part}</span>
        </span>
      );
    }
    return part;
  });
}
