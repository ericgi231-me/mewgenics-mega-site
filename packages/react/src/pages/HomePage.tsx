import React, { useState, useCallback, useMemo, useEffect } from "react";
import IconGrid from "../components/IconGrid";
import { ModalInfoBox, SidebarInfoBox } from "../components/InfoBox";
import SearchBar from "../components/SearchBar";
import { useSearchFilter } from "../hooks";
import Footer from "../components/Footer";
import { renderTextWithIcons } from "../utils/renderTextWithIcons";
import type { GameObject } from "../types";

type SubcategoryDef = { key: string; label: string };
type CategoryDef = {
  key: string;
  label: string;
  subcategories?: SubcategoryDef[];
};

const categories: CategoryDef[] = [
  { key: "collars", label: "Collars" },
  {
    key: "actives",
    label: "Actives",
    subcategories: [
      { key: "collarless", label: "Collarless" },
      { key: "fighter", label: "Fighter" },
      { key: "hunter", label: "Hunter" },
      { key: "mage", label: "Mage" },
      { key: "tank", label: "Tank" },
      { key: "cleric", label: "Cleric" },
      { key: "thief", label: "Thief" },
      { key: "necromancer", label: "Necromancer" },
      { key: "tinkerer", label: "Tinkerer" },
      { key: "butcher", label: "Butcher" },
      { key: "druid", label: "Druid" },
      { key: "psychic", label: "Psychic" },
      { key: "monk", label: "Monk" },
      { key: "jester", label: "Jester" },
    ],
  },
  {
    key: "passives",
    label: "Passives",
    subcategories: [
      { key: "collarless", label: "Collarless" },
      { key: "fighter", label: "Fighter" },
      { key: "hunter", label: "Hunter" },
      { key: "mage", label: "Mage" },
      { key: "tank", label: "Tank" },
      { key: "cleric", label: "Cleric" },
      { key: "thief", label: "Thief" },
      { key: "necromancer", label: "Necromancer" },
      { key: "tinkerer", label: "Tinkerer" },
      { key: "butcher", label: "Butcher" },
      { key: "druid", label: "Druid" },
      { key: "psychic", label: "Psychic" },
      { key: "monk", label: "Monk" },
      { key: "jester", label: "Jester" },
    ],
  },
  {
    key: "items",
    label: "Items",
    subcategories: [
      { key: "weapon", label: "Weapon" },
      { key: "head", label: "Head" },
      { key: "neck", label: "Neck" },
      { key: "face", label: "Face" },
      { key: "trinket", label: "Trinket" },
      { key: "consumable", label: "Consumable" },
    ],
  },
];

// Vite sees these literal import() strings at build time and splits them into
// separate chunks. All are fired in parallel on mount instead of being
// discovered sequentially through a static import waterfall.
const loaders: Record<string, () => Promise<{ default: unknown[] }>> = {
  "collars":             () => import("../data/collars.json"),
  "actives-collarless":  () => import("../data/actives/collarlessActives.json"),
  "actives-fighter":     () => import("../data/actives/fighterActives.json"),
  "actives-hunter":      () => import("../data/actives/hunterActives.json"),
  "actives-mage":        () => import("../data/actives/mageActives.json"),
  "actives-tank":        () => import("../data/actives/tankActives.json"),
  "actives-cleric":      () => import("../data/actives/clericActives.json"),
  "actives-thief":       () => import("../data/actives/thiefActives.json"),
  "actives-necromancer": () => import("../data/actives/necromancerActives.json"),
  "actives-tinkerer":    () => import("../data/actives/tinkererActives.json"),
  "actives-butcher":     () => import("../data/actives/butcherActives.json"),
  "actives-druid":       () => import("../data/actives/druidActives.json"),
  "actives-psychic":     () => import("../data/actives/psychicActives.json"),
  "actives-monk":        () => import("../data/actives/monkActives.json"),
  "actives-jester":      () => import("../data/actives/jesterActives.json"),
  "passives-collarless": () => import("../data/passives/collarlessPassives.json"),
  "passives-fighter":    () => import("../data/passives/fighterPassives.json"),
  "passives-hunter":     () => import("../data/passives/hunterPassives.json"),
  "passives-mage":       () => import("../data/passives/magePassives.json"),
  "passives-tank":       () => import("../data/passives/tankPassives.json"),
  "passives-cleric":     () => import("../data/passives/clericPassives.json"),
  "passives-thief":      () => import("../data/passives/thiefPassives.json"),
  "passives-necromancer":() => import("../data/passives/necromancerPassives.json"),
  "passives-tinkerer":   () => import("../data/passives/tinkererPassives.json"),
  "passives-butcher":    () => import("../data/passives/butcherPassives.json"),
  "passives-druid":      () => import("../data/passives/druidPassives.json"),
  "passives-psychic":    () => import("../data/passives/psychicPassives.json"),
  "passives-monk":       () => import("../data/passives/monkPassives.json"),
  "passives-jester":     () => import("../data/passives/jesterPassives.json"),
  "items-weapon":        () => import("../data/items/weaponItems.json"),
  "items-head":          () => import("../data/items/headItems.json"),
  "items-neck":          () => import("../data/items/neckItems.json"),
  "items-face":          () => import("../data/items/faceItems.json"),
  "items-trinket":       () => import("../data/items/trinketItems.json"),
  "items-consumable":    () => import("../data/items/consumableItems.json"),
};

type SelectionState = {
  selectedCategory: string | null;
  selectedItem: any | null;
  hoveredCategory: string | null;
  hoveredItem: any | null;
};

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

function HomePage() {
  const [loadedData, setLoadedData] = useState<Record<string, GameObject[]>>({});
  const [selection, setSelection] = useState<SelectionState>({
    selectedCategory: null,
    selectedItem: null,
    hoveredCategory: null,
    hoveredItem: null,
  });
  const [modal, setModal] = useState<{ category: string; item: any } | null>(null);
  const { search, setSearch, matchesSearch } = useSearchFilter();
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [subCollapsed, setSubCollapsed] = useState<Record<string, boolean>>({});

  // Sidebar shows hovered item
  let sidebarItem = null;
  if (selection.hoveredItem) {
    sidebarItem = selection.hoveredItem;
  }

  // Modal shows clicked item
  let modalItem = null;
  if (modal) {
    modalItem = modal.item;
  }

  const toggleCollapse = useCallback((key: string) => {
    setCollapsed(prev => ({ ...prev, [key]: !prev[key] }));
  }, []);
  const toggleSubCollapse = useCallback((catKey: string, subKey: string) => {
    setSubCollapsed(prev => ({ ...prev, [`${catKey}-${subKey}`]: !prev[`${catKey}-${subKey}`] }));
  }, []);

  // Precompute which data keys have at least one item matching the current search.
  // Keyed on loadedData + matchesSearch, so hover/selection state changes do not
  // retrigger this work.
  const visibleKeys = useMemo(() => {
    const keys = new Set<string>();
    for (const [key, items] of Object.entries(loadedData)) {
      if (items.some(matchesSearch)) keys.add(key);
    }
    return keys;
  }, [loadedData, matchesSearch]);

  // Fire all dynamic imports in parallel on mount — the browser fetches all
  // data chunks simultaneously rather than discovering them one-by-one.
  useEffect(() => {
    Object.entries(loaders).forEach(([key, load]) => {
      load().then(mod => {
        setLoadedData(prev => ({ ...prev, [key]: mod.default as GameObject[] }));
      });
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen dark bg-color-background text-color-text">
      <div className="flex flex-1">
        <SidebarInfoBox selectedItem={sidebarItem} className="hidden lg:flex sticky top-0 h-screen" />
        <div className="flex-1 min-w-0 p-8 pt-0">
          {/* Header with search bar */}
          <div
            className="flex items-center gap-4 sticky top-0 z-20 py-4 bg-color-background"
          >
            <SearchBar value={search} onChange={setSearch} />
          </div>
          {categories.map(cat => {
            const isCollapsed = collapsed[cat.key];
            const hasItems = cat.subcategories
              ? cat.subcategories.some(sub => {
                  const key = `${cat.key}-${sub.key}`;
                  return !(key in loadedData) || visibleKeys.has(key);
                })
              : !(cat.key in loadedData) || visibleKeys.has(cat.key);
            if (!hasItems) return null;
            return (
              <React.Fragment key={cat.key}>
                <div className="flex items-center my-3 cursor-pointer select-none" onClick={() => toggleCollapse(cat.key)}>
                  <span className="mx-2 text-2xl font-bold text-color-primary drop-shadow-[0_1px_2px_var(--color-border-dark)]">
                    {cat.label}
                    <span className="ml-2 text-base align-middle text-color-secondary">{isCollapsed ? "▲" : "▼"}</span>
                  </span>
                  <div className="flex-1 border-t border-color-border" />
                </div>
                {!isCollapsed && cat.subcategories && cat.subcategories.map(sub => {
                  const subKey = `${cat.key}-${sub.key}`;
                  const subIsCollapsed = subCollapsed[subKey];
                  const subData = loadedData[subKey] ?? [];
                  if (subData.length > 0 && !visibleKeys.has(subKey)) return null;
                  return (
                    <React.Fragment key={sub.key}>
                      <div className="flex items-center my-1 cursor-pointer select-none pl-8" onClick={() => toggleSubCollapse(cat.key, sub.key)}>
                        <span className="mx-2 text-lg font-semibold text-color-secondary">
                          {renderTextWithIcons(sub.label)}
                          <span className="ml-2 text-sm align-middle text-color-primary-dark">{subIsCollapsed ? "▲" : "▼"}</span>
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
                    </React.Fragment>
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
              </React.Fragment>
            );
          })}
          {modalItem && (
            <ModalInfoBox selectedItem={modalItem} onClose={() => setModal(null)} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
