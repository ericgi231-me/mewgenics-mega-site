
import { STAT_ICON_MAPPINGS } from "../data/stats";

interface InfoBoxProps<T> {
  selected: number | null;
  items: T[];
  fields: Array<{ label: string; field: keyof T; render?: (value: any) => React.ReactNode }>;
  title?: string;
}

function InfoBox<T>({ selected, items, fields, title }: InfoBoxProps<T>) {
  // Helper to render stat with icon
  const renderStatWithIcon = (stat: string) => {
    const icon = STAT_ICON_MAPPINGS[stat as keyof typeof STAT_ICON_MAPPINGS];
    return (
      <span className="inline-flex items-center mr-1">
        {icon && (
          <img
            src={icon}
            alt={stat}
            className="w-5 h-5 mr-1"
          />
        )}
        <span>{stat}</span>
      </span>
    );
  };

  return (
    <div className="w-96 bg-gray-100 border-r-4 border-gray-400 p-8 flex flex-col items-start justify-start">
      <h2 className="text-2xl font-bold mb-6">{title || "Info"}</h2>
      {selected !== null ? (
        <div className="text-left text-sm w-full">
          {fields.map(({ label, field, render }) => {
            // Custom rendering for buffs, debuffs, level_up
            if (field === "buffs" && Array.isArray(items[selected][field])) {
              return (
                <div key={String(field)} className="mb-2">
                  <span className="font-semibold">{label}:</span>
                  <ul className="list-disc ml-5">
                    {items[selected][field].map((buff: any, i: number) => (
                      <li key={i} className="flex items-center">
                        {renderStatWithIcon(buff.stat)} +{buff.value}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
            if (field === "debuffs" && Array.isArray(items[selected][field])) {
              return (
                <div key={String(field)} className="mb-2">
                  <span className="font-semibold">{label}:</span>
                  <ul className="list-disc ml-5">
                    {items[selected][field].map((debuff: any, i: number) => (
                      <li key={i} className="flex items-center">
                        {renderStatWithIcon(debuff.stat)} {debuff.value >= 0 ? "+" : ""}{debuff.value}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
            if (field === "level_up" && Array.isArray(items[selected][field])) {
              return (
                <div key={String(field)} className="mb-2">
                  <span className="font-semibold">{label}:</span>
                  <span className="inline-flex flex-wrap gap-2 ml-2">
                    {items[selected][field].map((stat: string, i: number) => (
                      <span key={i}>{renderStatWithIcon(stat)}</span>
                    ))}
                  </span>
                </div>
              );
            }
            // Default rendering
            return (
              <div key={String(field)} className="mb-2">
                <span className="font-semibold">{label}:</span> {render ? render(items[selected][field]) : String(items[selected][field])}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-gray-500">Select an item to see details.</div>
      )}
    </div>
  );
}

export default InfoBox;
