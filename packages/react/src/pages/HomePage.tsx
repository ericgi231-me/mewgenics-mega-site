import React, { useState } from "react";
import IconGrid from "../components/IconGrid";
import { ModalInfoBox, SidebarInfoBox } from "../components/InfoBox";
import SearchBar from "../components/SearchBar";
import { useSearchFilter } from "../hooks";
import Footer from "../components/Footer";
import {
  COLLAR_OBJECTS,
  COLLARLESS_PASSIVE_OBJECTS,
  FIGHTER_PASSIVE_OBJECTS,
  HUNTER_PASSIVE_OBJECTS,
  MAGE_PASSIVE_OBJECTS,
  TANK_PASSIVE_OBJECTS,
  CLERIC_PASSIVE_OBJECTS,
  THIEF_PASSIVE_OBJECTS,
  NECROMANCER_PASSIVE_OBJECTS,
  TINKERER_PASSIVE_OBJECTS,
  BUTCHER_PASSIVE_OBJECTS,
  DRUID_PASSIVE_OBJECTS,
  PSYCHIC_PASSIVE_OBJECTS,
  MONK_PASSIVE_OBJECTS,
  JESTER_PASSIVE_OBJECTS,
  COLLARLESS_ACTIVE_OBJECTS,
  FIGHTER_ACTIVE_OBJECTS,
  HUNTER_ACTIVE_OBJECTS,
  MAGE_ACTIVE_OBJECTS,
  TANK_ACTIVE_OBJECTS,
  CLERIC_ACTIVE_OBJECTS,
  THIEF_ACTIVE_OBJECTS,
  NECROMANCER_ACTIVE_OBJECTS,
  TINKERER_ACTIVE_OBJECTS,
  BUTCHER_ACTIVE_OBJECTS,
  DRUID_ACTIVE_OBJECTS,
  PSYCHIC_ACTIVE_OBJECTS,
  MONK_ACTIVE_OBJECTS,
  JESTER_ACTIVE_OBJECTS,
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
    key: "actives",
    label: "Actives",
    subcategories: [
      { key: "collarless", label: "Collarless", items: COLLARLESS_ACTIVE_OBJECTS },
      { key: "fighter", label: "Fighter", items: FIGHTER_ACTIVE_OBJECTS },
      { key: "hunter", label: "Hunter", items: HUNTER_ACTIVE_OBJECTS },
      { key: "mage", label: "Mage", items: MAGE_ACTIVE_OBJECTS },
      { key: "tank", label: "Tank", items: TANK_ACTIVE_OBJECTS },
      { key: "cleric", label: "Cleric", items: CLERIC_ACTIVE_OBJECTS },
      { key: "thief", label: "Thief", items: THIEF_ACTIVE_OBJECTS },
      { key: "necromancer", label: "Necromancer", items: NECROMANCER_ACTIVE_OBJECTS },
      { key: "tinkerer", label: "Tinkerer", items: TINKERER_ACTIVE_OBJECTS },
      { key: "butcher", label: "Butcher", items: BUTCHER_ACTIVE_OBJECTS },
      { key: "druid", label: "Druid", items: DRUID_ACTIVE_OBJECTS },
      { key: "psychic", label: "Psychic", items: PSYCHIC_ACTIVE_OBJECTS },
      { key: "monk", label: "Monk", items: MONK_ACTIVE_OBJECTS },
      { key: "jester", label: "Jester", items: JESTER_ACTIVE_OBJECTS },
    ],
  },
  {
    key: "passives",
    label: "Passives",
    subcategories: [
      { key: "collarless", label: "Collarless", items: COLLARLESS_PASSIVE_OBJECTS },
      { key: "fighter", label: "Fighter", items: FIGHTER_PASSIVE_OBJECTS },
      { key: "hunter", label: "Hunter", items: HUNTER_PASSIVE_OBJECTS },
      { key: "mage", label: "Mage", items: MAGE_PASSIVE_OBJECTS },
      { key: "tank", label: "Tank", items: TANK_PASSIVE_OBJECTS },
      { key: "cleric", label: "Cleric", items: CLERIC_PASSIVE_OBJECTS },
      { key: "thief", label: "Thief", items: THIEF_PASSIVE_OBJECTS },
      { key: "necromancer", label: "Necromancer", items: NECROMANCER_PASSIVE_OBJECTS },
      { key: "tinkerer", label: "Tinkerer", items: TINKERER_PASSIVE_OBJECTS },
      { key: "butcher", label: "Butcher", items: BUTCHER_PASSIVE_OBJECTS },
      { key: "druid", label: "Druid", items: DRUID_PASSIVE_OBJECTS },
      { key: "psychic", label: "Psychic", items: PSYCHIC_PASSIVE_OBJECTS },
      { key: "monk", label: "Monk", items: MONK_PASSIVE_OBJECTS },
      { key: "jester", label: "Jester", items: JESTER_PASSIVE_OBJECTS },
    ],
  },
  {
    key: "items",
    label: "Items (TBD)",
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
    label: "Mutations (TBD)",
    items: MUTATION_OBJECTS,
  },
];

type SelectionState = {
  selectedCategory: string | null;
  selectedItem: any | null;
  hoveredCategory: string | null;
  hoveredItem: any | null;
};

function HomePage() {
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

  const toggleCollapse = (key: string) => {
    setCollapsed(prev => ({ ...prev, [key]: !prev[key] }));
  };
  const toggleSubCollapse = (catKey: string, subKey: string) => {
    setSubCollapsed(prev => ({ ...prev, [`${catKey}-${subKey}`]: !prev[`${catKey}-${subKey}`] }));
  };

  return (
    <div className="flex flex-col min-h-screen dark bg-color-background text-color-text">
      <div className="flex flex-1">
        <SidebarInfoBox selectedItem={sidebarItem} className="hidden lg:flex sticky top-0 h-screen" />
        <div className="flex-1 p-8 pt-0">
          {/* Header with search bar */}
          <div className="flex items-center my-6 gap-4">
            <SearchBar value={search} onChange={setSearch} />
          </div>
          {categories.map(cat => {
            const isCollapsed = collapsed[cat.key];
            // For categories with subcategories, filter out empty subcategories
            let hasItems = false;
            let subcategoryElements = null;
            if (cat.subcategories) {
              subcategoryElements = cat.subcategories.map(sub => {
                const subKey = `${cat.key}-${sub.key}`;
                const subIsCollapsed = subCollapsed[subKey];
                const filteredSubItems = (sub.items ?? []).filter(matchesSearch);
                if (filteredSubItems.length === 0) return null;
                hasItems = true;
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
                            m && m.category === subKey && m.item === filteredSubItems[idx] ? null : { category: subKey, item: filteredSubItems[idx] }
                          );
                        }}
                        onHover={idx => setSelection(sel => ({
                          ...sel,
                          hoveredCategory: subKey,
                          hoveredItem: filteredSubItems[idx],
                        }))}
                        onHoverEnd={() => setSelection(sel => ({
                          ...sel,
                          hoveredCategory: null,
                          hoveredItem: null,
                        }))}
                      />
                    )}
                  </React.Fragment>
                );
              });
            } else {
              const filteredItems = (cat.items ?? []).filter(matchesSearch);
              hasItems = filteredItems.length > 0;
              subcategoryElements = !isCollapsed && hasItems ? (
                <IconGrid
                  items={filteredItems}
                  selected={null}
                  setSelected={idx => {
                    setModal(m =>
                      m && m.category === cat.key && m.item === filteredItems[idx] ? null : { category: cat.key, item: filteredItems[idx] }
                    );
                  }}
                  onHover={idx => setSelection(sel => ({
                    ...sel,
                    hoveredCategory: cat.key,
                    hoveredItem: filteredItems[idx],
                  }))}
                  onHoverEnd={() => setSelection(sel => ({
                    ...sel,
                    hoveredCategory: null,
                    hoveredItem: null,
                  }))}
                />
              ) : null;
            }
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
                {!isCollapsed && subcategoryElements}
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
