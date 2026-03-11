import type { GameObject } from "../types";
import GameImg from "./GameImg";

const CELL_SIZE = 64;

interface IconGridProps {
  items: GameObject[];
  selected: number | null;
  setSelected: (idx: number) => void;
  onHover?: (idx: number) => void;
  onHoverEnd?: () => void;
}

function IconGrid({ items, selected, setSelected, onHover, onHoverEnd }: IconGridProps) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(auto-fill, ${CELL_SIZE}px)`, justifyContent: "center" }}>
      {items.map((item, idx) => (
        <div
          key={idx}
          className={`relative cursor-pointer${selected === idx ? " ring-2" : ""}`}
          style={{ width: CELL_SIZE, height: CELL_SIZE }}
          onClick={() => setSelected(idx)}
          onMouseEnter={() => onHover?.(idx)}
          onMouseLeave={() => onHoverEnd?.()}
        >
          <div className="flex items-center justify-center w-full h-full">
            <GameImg
              src={item.icon_path}
              alt={item.name}
              width={64}
              height={64}
              className="object-contain"
              draggable={false}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
              loading={idx < 8 ? "eager" : "lazy"}
              fetchPriority={idx < 8 ? "high" : "auto"}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default IconGrid;
