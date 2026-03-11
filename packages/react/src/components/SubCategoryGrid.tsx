import React, { useMemo, useCallback } from "react";
import type { GameObject } from "../types";
import type { SelectionState } from "../types/selectionState";
import IconGrid from "./IconGrid";

interface SubCategoryGridProps {
  items: GameObject[];
  gridKey: string;
  matchesSearch: (obj: any) => boolean;
  setModal: React.Dispatch<React.SetStateAction<{ category: string; item: any } | null>>;
  setSelection: React.Dispatch<React.SetStateAction<SelectionState>>;
}

const SubCategoryGrid = React.memo(function SubCategoryGrid({
  items,
  gridKey,
  matchesSearch,
  setModal,
  setSelection,
}: SubCategoryGridProps) {
  const filteredItems = useMemo(
    () => items.filter(matchesSearch),
    [items, matchesSearch]
  );

  const setSelected = useCallback(
    (idx: number) => {
      setModal(m =>
        m && m.category === gridKey && m.item === filteredItems[idx]
          ? null
          : { category: gridKey, item: filteredItems[idx] }
      );
    },
    [filteredItems, gridKey, setModal]
  );

  const onHover = useCallback(
    (idx: number) => {
      setSelection(sel => ({
        ...sel,
        hoveredCategory: gridKey,
        hoveredItem: filteredItems[idx],
      }));
    },
    [filteredItems, gridKey, setSelection]
  );

  const onHoverEnd = useCallback(() => {
    setSelection(sel => ({
      ...sel,
      hoveredCategory: null,
      hoveredItem: null,
    }));
  }, [setSelection]);

  if (filteredItems.length === 0) return null;

  return (
    <IconGrid
      items={filteredItems}
      selected={null}
      setSelected={setSelected}
      onHover={onHover}
      onHoverEnd={onHoverEnd}
    />
  );
});

export default SubCategoryGrid;
