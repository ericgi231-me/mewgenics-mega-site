import React, { useState } from "react";
import IconGrid from "../components/IconGrid";
import { ModalInfoBox, SidebarInfoBox } from "../components/InfoBox";
import SearchBar from "../components/SearchBar";
import { useSearchFilter } from "../hooks";
import {
  COLLAR_OBJECTS,
  COLLARLESS_PASSIVE_OBJECTS,
  FIGHTER_PASSIVE_OBJECTS,
  COLLARLESS_ACTIVE_OBJECTS,
  FIGHTER_ACTIVE_OBJECTS,
  WEAPON_ITEM_OBJECTS,
  HEAD_ITEM_OBJECTS,
  NECK_ITEM_OBJECTS,
  FACE_ITEM_OBJECTS,
  TRINKET_ITEM_OBJECTS,
  MUTATION_OBJECTS
} from "../data/";
import { renderTextWithIcons } from "../utils/renderTextWithIcons";

const categories = [
  { key: "collars", label: "Collars", items: COLLAR_OBJECTS },
  {
    key: "passives",
    label: "Passives",
    subcategories: [
      { key: "collarless", label: "Collarless", items: COLLARLESS_PASSIVE_OBJECTS },
      { key: "fighter", label: "Fighter", items: FIGHTER_PASSIVE_OBJECTS },
    ],
  },
  {
    key: "actives",
    label: "Actives",
    subcategories: [
      { key: "collarless", label: "Collarless", items: COLLARLESS_ACTIVE_OBJECTS },
      { key: "fighter", label: "Fighter", items: FIGHTER_ACTIVE_OBJECTS },
    ],
  },
  {
    key: "items",
    label: "Items",
    subcategories: [
      { key: "weapon", label: "Weapon", items: WEAPON_ITEM_OBJECTS },
      { key: "head", label: "Head", items: HEAD_ITEM_OBJECTS },
      { key: "neck", label: "Neck", items: NECK_ITEM_OBJECTS },
      { key: "face", label: "Face", items: FACE_ITEM_OBJECTS },
      { key: "trinket", label: "Trinket", items: TRINKET_ITEM_OBJECTS },
    ],
  },
  {
    key: "mutations",
    label: "Mutations",
    items: MUTATION_OBJECTS,
  },
];

type SelectionState = {
  selectedCategory: string | null;
  selectedIndex: number | null;
  hoveredCategory: string | null;
  hoveredIndex: number | null;
};

function HomePage() {
  const [selection, setSelection] = useState<SelectionState>({
    selectedCategory: null,
    selectedIndex: null,
    hoveredCategory: null,
    hoveredIndex: null,
  });
  const [modal, setModal] = useState<{ category: string; index: number } | null>(null);
  const { search, setSearch, matchesSearch } = useSearchFilter();
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [subCollapsed, setSubCollapsed] = useState<Record<string, boolean>>({});

  // Sidebar shows hovered item
  let sidebarItem = null;
  if (selection.hoveredCategory && selection.hoveredIndex !== null) {
    // Support subcategories (key format: "main-sub")
    const [mainKey, subKey] = selection.hoveredCategory.split("-");
    const cat = categories.find(c => c.key === mainKey);
    if (cat) {
      if (cat.subcategories && subKey) {
        const sub = cat.subcategories.find(s => s.key === subKey);
        if (sub && sub.items) sidebarItem = sub.items[selection.hoveredIndex];
      } else if (cat.items) {
        sidebarItem = cat.items[selection.hoveredIndex];
      }
    }
  }

  // Modal shows clicked item
  let modalItem = null;
  if (modal) {
    const [mainKey, subKey] = modal.category.split("-");
    const cat = categories.find(c => c.key === mainKey);
    if (cat) {
      if (cat.subcategories && subKey) {
        const sub = cat.subcategories.find(s => s.key === subKey);
        if (sub && sub.items) modalItem = sub.items[modal.index];
      } else if (cat.items) {
        modalItem = cat.items[modal.index];
      }
    }
  }

  const toggleCollapse = (key: string) => {
    setCollapsed(prev => ({ ...prev, [key]: !prev[key] }));
  };
  const toggleSubCollapse = (catKey: string, subKey: string) => {
    setSubCollapsed(prev => ({ ...prev, [`${catKey}-${subKey}`]: !prev[`${catKey}-${subKey}`] }));
  };

  return (
    <div className="flex min-h-screen dark bg-color-background text-color-text">
      <SidebarInfoBox selectedItem={sidebarItem} className="hidden lg:flex sticky top-0 h-screen" />
      <div className="flex-1 p-8 pt-0">
        {/* Header with search bar */}
        <div className="flex items-center my-6 gap-4">
          <SearchBar value={search} onChange={setSearch} />
        </div>
        {categories.map(cat => {
          const isCollapsed = collapsed[cat.key];
          return (
            <React.Fragment key={cat.key}>
              <div className="flex items-center my-3 cursor-pointer select-none" onClick={() => toggleCollapse(cat.key)}>
                <span className="mx-2 text-2xl font-bold text-color-primary drop-shadow-[0_1px_2px_var(--color-border-dark)]">
                  {cat.label}
                  <span className="ml-2 text-base align-middle text-color-secondary">{isCollapsed ? "▲" : "▼"}</span>
                </span>
                <div className="flex-1 border-t border-color-border" />
              </div>
              {!isCollapsed && (
                cat.subcategories ? (
                  cat.subcategories.map(sub => {
                    const subKey = `${cat.key}-${sub.key}`;
                    const subIsCollapsed = subCollapsed[subKey];
                    const filteredSubItems = (sub.items ?? []).filter(matchesSearch);
                    return (
                      <React.Fragment key={sub.key}>
                        <div className="flex items-center my-1 cursor-pointer select-none pl-8" onClick={() => toggleSubCollapse(cat.key, sub.key)}>
                          <span className="mx-2 text-lg font-semibold text-color-secondary">
                            {renderTextWithIcons(sub.label)}
                            <span className="ml-2 text-sm align-middle text-color-primary-dark">{subIsCollapsed ? "▲" : "▼"}</span>
                          </span>
                        </div>
                        {!subIsCollapsed && (
                          <IconGrid
                            items={filteredSubItems}
                            selected={null}
                            setSelected={idx => {
                              setModal(m =>
                                m && m.category === subKey && m.index === idx ? null : { category: subKey, index: idx }
                              );
                            }}
                            onHover={idx => setSelection(sel => ({
                              ...sel,
                              hoveredCategory: subKey,
                              hoveredIndex: idx,
                            }))}
                            onHoverEnd={() => setSelection(sel => ({
                              ...sel,
                              hoveredCategory: null,
                              hoveredIndex: null,
                            }))}
                          />
                        )}
                      </React.Fragment>
                    );
                  })
                ) : (
                  <IconGrid
                    items={(cat.items ?? []).filter(matchesSearch)}
                    selected={null}
                    setSelected={idx => {
                      setModal(m =>
                        m && m.category === cat.key && m.index === idx ? null : { category: cat.key, index: idx }
                      );
                    }}
                    onHover={idx => setSelection(sel => ({
                      ...sel,
                      hoveredCategory: cat.key,
                      hoveredIndex: idx,
                    }))}
                    onHoverEnd={() => setSelection(sel => ({
                      ...sel,
                      hoveredCategory: null,
                      hoveredIndex: null,
                    }))}
                  />
                )
              )}
            </React.Fragment>
          );
        })}
        {modalItem && (
          <ModalInfoBox selectedItem={modalItem} onClose={() => setModal(null)} />
        )}
      </div>
    </div>
  );
}

export default HomePage;
