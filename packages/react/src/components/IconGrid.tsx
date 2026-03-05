import type { GameObject } from "../types";

interface IconGridProps {
  items: GameObject[];
  selected: number | null;
  setSelected: (idx: number) => void;
  onHover?: (idx: number) => void;
  onHoverEnd?: () => void;
}

function IconGrid({ items, selected, setSelected, onHover, onHoverEnd }: IconGridProps) {
  return (
    <div className="flex flex-wrap items-start gap-1 mx-auto">
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`relative cursor-pointer ${selected === idx ? "ring-2" : ""}`}
          style={{ margin: "2px" }}
          onClick={() => setSelected(idx)}
          onMouseEnter={() => onHover && onHover(idx)}
          onMouseLeave={() => onHoverEnd && onHoverEnd()}
        >
          <div className="flex items-center justify-center" style={{ width: "64px", height: "64px" }}>
            <img
              src={item.icon_path}
              alt={item.name}
              className="object-contain"
              draggable={false}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default IconGrid;
