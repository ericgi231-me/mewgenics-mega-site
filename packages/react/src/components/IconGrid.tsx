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
    <div className="flex justify-center w-full">
      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(auto-fill, 64px)",
          maxWidth: "100%"
        }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`relative cursor-pointer ${selected === idx ? "ring-2" : ""}`}
            style={{ width: "64px", height: "64px" }}
            onClick={() => setSelected(idx)}
            onMouseEnter={() => onHover && onHover(idx)}
            onMouseLeave={() => onHoverEnd && onHoverEnd()}
          >
            <div className="flex items-center justify-center w-full h-full">
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
    </div>
  );
}

export default IconGrid;
