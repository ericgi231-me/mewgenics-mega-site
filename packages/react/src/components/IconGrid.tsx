import type { GameObject } from "../types";
import { Grid } from "react-window";
import type { CellComponentProps } from "react-window";
import { useRef, useState, useEffect } from "react";

interface IconGridProps {
  items: GameObject[];
  selected: number | null;
  setSelected: (idx: number) => void;
  onHover?: (idx: number) => void;
  onHoverEnd?: () => void;
}

const CELL_SIZE = 64;

// Custom props passed via cellProps — must NOT include columnIndex, rowIndex, or style
interface CellData {
  items: GameObject[];
  selected: number | null;
  setSelected: (idx: number) => void;
  onHover?: (idx: number) => void;
  onHoverEnd?: () => void;
  columnCount: number;
}

// CellComponentProps<CellData> provides columnIndex, rowIndex, style + CellData
const CellComponent = ({
  columnIndex,
  rowIndex,
  style,
  items,
  selected,
  setSelected,
  onHover,
  onHoverEnd,
  columnCount,
}: CellComponentProps<CellData>) => {
  const idx = rowIndex * columnCount + columnIndex;
  if (idx >= items.length) return null;
  const item = items[idx];
  return (
    <div
      className={`relative cursor-pointer ${selected === idx ? "ring-2" : ""}`}
      style={style}
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
          loading="lazy"
        />
      </div>
    </div>
  );
};

function IconGrid({ items, selected, setSelected, onHover, onHoverEnd }: IconGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(640);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(container);
    // Set initial width
    setContainerWidth(container.getBoundingClientRect().width);
    return () => observer.disconnect();
  }, []);

  const columnCount = Math.max(1, Math.floor(containerWidth / CELL_SIZE));
  const rowCount = Math.ceil(items.length / columnCount);
  const gridHeight = rowCount * CELL_SIZE; // Exact height: no scrollbar

  return (
    <div ref={containerRef} className="w-full">
      <Grid<CellData>
        columnCount={columnCount}
        rowCount={rowCount}
        columnWidth={CELL_SIZE}
        rowHeight={CELL_SIZE}
        style={{ width: containerWidth, height: gridHeight }}
        cellComponent={CellComponent}
        cellProps={{ items, selected, setSelected, onHover, onHoverEnd, columnCount }}
      />
    </div>
  );
}

export default IconGrid;
