import type { GameObject } from "../types";
import { Grid } from "react-window";
import type { CellComponentProps } from "react-window";
import { useRef, useState, useEffect, useLayoutEffect } from "react";
import GameImg from "./GameImg";

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
        <GameImg
          src={item.icon_path}
          alt={item.name}
          width={64}
          height={64}
          className="object-contain"
          draggable={false}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          loading={rowIndex < 2 ? "eager" : "lazy"}
          fetchPriority={rowIndex < 2 ? "high" : "auto"}
        />
      </div>
    </div>
  );
};

function IconGrid({ items, selected, setSelected, onHover, onHoverEnd }: IconGridProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number | null>(null);

  // Measure synchronously before the browser paints — prevents the initial
  // wrong-width render that causes horizontal overflow on mobile.
  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    setContainerWidth(container.getBoundingClientRect().width);
  }, []);

  // Keep width up to date when the container is resized.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const columnCount = containerWidth !== null ? Math.max(1, Math.floor(containerWidth / CELL_SIZE)) : 1;
  const rowCount = Math.ceil(items.length / columnCount);
  const gridHeight = rowCount * CELL_SIZE;

  return (
    <div ref={containerRef} className="w-full">
      {containerWidth !== null && (
        <Grid<CellData>
          columnCount={columnCount}
          rowCount={rowCount}
          columnWidth={CELL_SIZE}
          rowHeight={CELL_SIZE}
          style={{ width: containerWidth, height: gridHeight }}
          cellComponent={CellComponent}
          cellProps={{ items, selected, setSelected, onHover, onHoverEnd, columnCount }}
        />
      )}
    </div>
  );
}

export default IconGrid;
