import React, { useState } from "react";
import IconGrid from "../components/IconGrid";
import { ModalInfoBox, SidebarInfoBox } from "../components/InfoBox";
import SearchBar from "../components/SearchBar";
import { useSearchFilter } from "../hooks";
import Footer from "../components/Footer";
import { renderTextWithIcons } from "../utils/renderTextWithIcons";
import type { GameObject } from "../types";

// Collars
import COLLAR_OBJECTS from "../data/collars.json";

// Actives
import COLLARLESS_ACTIVE_OBJECTS from "../data/actives/collarlessActives.json";
import FIGHTER_ACTIVE_OBJECTS from "../data/actives/fighterActives.json";
import HUNTER_ACTIVE_OBJECTS from "../data/actives/hunterActives.json";
import MAGE_ACTIVE_OBJECTS from "../data/actives/mageActives.json";
import TANK_ACTIVE_OBJECTS from "../data/actives/tankActives.json";
import CLERIC_ACTIVE_OBJECTS from "../data/actives/clericActives.json";
import THIEF_ACTIVE_OBJECTS from "../data/actives/thiefActives.json";
import NECROMANCER_ACTIVE_OBJECTS from "../data/actives/necromancerActives.json";
import TINKERER_ACTIVE_OBJECTS from "../data/actives/tinkererActives.json";
import BUTCHER_ACTIVE_OBJECTS from "../data/actives/butcherActives.json";
import DRUID_ACTIVE_OBJECTS from "../data/actives/druidActives.json";
import PSYCHIC_ACTIVE_OBJECTS from "../data/actives/psychicActives.json";
import MONK_ACTIVE_OBJECTS from "../data/actives/monkActives.json";
import JESTER_ACTIVE_OBJECTS from "../data/actives/jesterActives.json";

// Passives
import COLLARLESS_PASSIVE_OBJECTS from "../data/passives/collarlessPassives.json";
import FIGHTER_PASSIVE_OBJECTS from "../data/passives/fighterPassives.json";
import HUNTER_PASSIVE_OBJECTS from "../data/passives/hunterPassives.json";
import MAGE_PASSIVE_OBJECTS from "../data/passives/magePassives.json";
import TANK_PASSIVE_OBJECTS from "../data/passives/tankPassives.json";
import CLERIC_PASSIVE_OBJECTS from "../data/passives/clericPassives.json";
import THIEF_PASSIVE_OBJECTS from "../data/passives/thiefPassives.json";
import NECROMANCER_PASSIVE_OBJECTS from "../data/passives/necromancerPassives.json";
import TINKERER_PASSIVE_OBJECTS from "../data/passives/tinkererPassives.json";
import BUTCHER_PASSIVE_OBJECTS from "../data/passives/butcherPassives.json";
import DRUID_PASSIVE_OBJECTS from "../data/passives/druidPassives.json";
import PSYCHIC_PASSIVE_OBJECTS from "../data/passives/psychicPassives.json";
import MONK_PASSIVE_OBJECTS from "../data/passives/monkPassives.json";
import JESTER_PASSIVE_OBJECTS from "../data/passives/jesterPassives.json";

// Items
import WEAPON_ITEM_OBJECTS from "../data/items/weaponItems.json";
import HEAD_ITEM_OBJECTS from "../data/items/headItems.json";
import NECK_ITEM_OBJECTS from "../data/items/neckItems.json";
import FACE_ITEM_OBJECTS from "../data/items/faceItems.json";
import TRINKET_ITEM_OBJECTS from "../data/items/trinketItems.json";
import CONSUMABLE_ITEM_OBJECTS from "../data/items/consumableItems.json";

const categories: {
  key: string;
  label: string;
  items?: GameObject[];
  subcategories?: { key: string; label: string; items: GameObject[] }[];
}[] = [
  { key: "collars", label: "Collars", items: COLLAR_OBJECTS as GameObject[] },
  {
    key: "actives",
    label: "Actives",
    subcategories: [
      { key: "collarless", label: "Collarless", items: COLLARLESS_ACTIVE_OBJECTS as GameObject[] },
      { key: "fighter", label: "Fighter", items: FIGHTER_ACTIVE_OBJECTS as GameObject[] },
      { key: "hunter", label: "Hunter", items: HUNTER_ACTIVE_OBJECTS as GameObject[] },
      { key: "mage", label: "Mage", items: MAGE_ACTIVE_OBJECTS as GameObject[] },
      { key: "tank", label: "Tank", items: TANK_ACTIVE_OBJECTS as GameObject[] },
      { key: "cleric", label: "Cleric", items: CLERIC_ACTIVE_OBJECTS as GameObject[] },
      { key: "thief", label: "Thief", items: THIEF_ACTIVE_OBJECTS as GameObject[] },
      { key: "necromancer", label: "Necromancer", items: NECROMANCER_ACTIVE_OBJECTS as GameObject[] },
      { key: "tinkerer", label: "Tinkerer", items: TINKERER_ACTIVE_OBJECTS as GameObject[] },
      { key: "butcher", label: "Butcher", items: BUTCHER_ACTIVE_OBJECTS as GameObject[] },
      { key: "druid", label: "Druid", items: DRUID_ACTIVE_OBJECTS as GameObject[] },
      { key: "psychic", label: "Psychic", items: PSYCHIC_ACTIVE_OBJECTS as GameObject[] },
      { key: "monk", label: "Monk", items: MONK_ACTIVE_OBJECTS as GameObject[] },
      { key: "jester", label: "Jester", items: JESTER_ACTIVE_OBJECTS as GameObject[] },
    ],
  },
  {
    key: "passives",
    label: "Passives",
    subcategories: [
      { key: "collarless", label: "Collarless", items: COLLARLESS_PASSIVE_OBJECTS as GameObject[] },
      { key: "fighter", label: "Fighter", items: FIGHTER_PASSIVE_OBJECTS as GameObject[] },
      { key: "hunter", label: "Hunter", items: HUNTER_PASSIVE_OBJECTS as GameObject[] },
      { key: "mage", label: "Mage", items: MAGE_PASSIVE_OBJECTS as GameObject[] },
      { key: "tank", label: "Tank", items: TANK_PASSIVE_OBJECTS as GameObject[] },
      { key: "cleric", label: "Cleric", items: CLERIC_PASSIVE_OBJECTS as GameObject[] },
      { key: "thief", label: "Thief", items: THIEF_PASSIVE_OBJECTS as GameObject[] },
      { key: "necromancer", label: "Necromancer", items: NECROMANCER_PASSIVE_OBJECTS as GameObject[] },
      { key: "tinkerer", label: "Tinkerer", items: TINKERER_PASSIVE_OBJECTS as GameObject[] },
      { key: "butcher", label: "Butcher", items: BUTCHER_PASSIVE_OBJECTS as GameObject[] },
      { key: "druid", label: "Druid", items: DRUID_PASSIVE_OBJECTS as GameObject[] },
      { key: "psychic", label: "Psychic", items: PSYCHIC_PASSIVE_OBJECTS as GameObject[] },
      { key: "monk", label: "Monk", items: MONK_PASSIVE_OBJECTS as GameObject[] },
      { key: "jester", label: "Jester", items: JESTER_PASSIVE_OBJECTS as GameObject[] },
    ],
  },
  {
    key: "items",
    label: "Items",
    subcategories: [
      { key: "weapon", label: "Weapon", items: WEAPON_ITEM_OBJECTS as GameObject[] },
      { key: "head", label: "Head", items: HEAD_ITEM_OBJECTS as GameObject[] },
      { key: "neck", label: "Neck", items: NECK_ITEM_OBJECTS as GameObject[] },
      { key: "face", label: "Face", items: FACE_ITEM_OBJECTS as GameObject[] },
      { key: "trinket", label: "Trinket", items: TRINKET_ITEM_OBJECTS as GameObject[] },
      { key: "consumable", label: "Consumable", items: CONSUMABLE_ITEM_OBJECTS as GameObject[] },
    ],
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
          <div
            className="flex items-center gap-4 sticky top-0 z-20 py-4 bg-color-background"
          >
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
