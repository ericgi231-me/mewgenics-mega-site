import { Fragment } from "react";
import type React from "react";
import type { GameObject } from "../types";
import type { SelectionState } from "../types/selectionState";
import type { CategoryDef } from "../data/categories";
import { renderTextWithIcons } from "../utils/renderTextWithIcons";
import SubCategoryGrid from "./SubCategoryGrid";

interface CategorySectionProps {
  cat: CategoryDef;
  isCollapsed: boolean;
  onToggle: () => void;
  subCollapsed: Record<string, boolean>;
  onSubToggle: (catKey: string, subKey: string) => void;
  loadedData: Record<string, GameObject[]>;
  visibleKeys: Set<string>;
  matchesSearch: (obj: any) => boolean;
  setModal: React.Dispatch<React.SetStateAction<{ category: string; item: any } | null>>;
  setSelection: React.Dispatch<React.SetStateAction<SelectionState>>;
}

function CategorySection({
  cat,
  isCollapsed,
  onToggle,
  subCollapsed,
  onSubToggle,
  loadedData,
  visibleKeys,
  matchesSearch,
  setModal,
  setSelection,
}: CategorySectionProps) {
  return (
    <>
      <div
        className="flex items-center my-3 cursor-pointer select-none"
        onClick={onToggle}
      >
        <span className="mx-2 text-2xl font-bold text-heading">
          {cat.label}
          <span className="ml-2 text-base align-middle text-muted">
            {isCollapsed ? "▲" : "▼"}
          </span>
        </span>
        <div className="flex-1 border-t border-rule" />
      </div>

      {!isCollapsed && cat.subcategories && cat.subcategories.map(sub => {
        const subKey = `${cat.key}-${sub.key}`;
        const subIsCollapsed = subCollapsed[subKey];
        const subData = loadedData[subKey] ?? [];
        if (subData.length > 0 && !visibleKeys.has(subKey)) return null;
        return (
          <Fragment key={sub.key}>
            <div
              className="flex items-center my-1 cursor-pointer select-none pl-8"
              onClick={() => onSubToggle(cat.key, sub.key)}
            >
              <span className="mx-2 text-lg font-semibold text-body">
                {renderTextWithIcons(sub.label)}
                <span className="ml-2 text-sm align-middle text-muted">
                  {subIsCollapsed ? "▲" : "▼"}
                </span>
              </span>
            </div>
            {!subIsCollapsed && (
              <SubCategoryGrid
                items={subData}
                gridKey={subKey}
                matchesSearch={matchesSearch}
                setModal={setModal}
                setSelection={setSelection}
              />
            )}
          </Fragment>
        );
      })}

      {!isCollapsed && !cat.subcategories && (
        <SubCategoryGrid
          items={loadedData[cat.key] ?? []}
          gridKey={cat.key}
          matchesSearch={matchesSearch}
          setModal={setModal}
          setSelection={setSelection}
        />
      )}
    </>
  );
}

export default CategorySection;
