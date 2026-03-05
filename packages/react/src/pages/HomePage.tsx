import React, { useState } from "react";
import IconGrid from "../components/IconGrid";
import { ModalInfoBox, SidebarInfoBox } from "../components/InfoBox";
import SearchBar from "../components/SearchBar";
import { useSearchFilter } from "../hooks";
import { COLLAR_OBJECTS } from "../data/collars";
import { PASSIVE_OBJECTS } from "../data/upgrades/passives";

const categories = [
  { key: "collars", label: "Collars", items: COLLAR_OBJECTS },
  { key: "passives", label: "Passives", items: PASSIVE_OBJECTS },
  // Add more categories here as needed
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

  // Sidebar shows hovered item
  let sidebarItem = null;
  if (selection.hoveredCategory && selection.hoveredIndex !== null) {
    const cat = categories.find(c => c.key === selection.hoveredCategory);
    if (cat) sidebarItem = cat.items[selection.hoveredIndex];
  }

  // Modal shows clicked item
  let modalItem = null;
  if (modal) {
    const cat = categories.find(c => c.key === modal.category);
    if (cat) modalItem = cat.items[modal.index];
  }

  const toggleCollapse = (key: string) => {
    setCollapsed(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex min-h-screen">
      <SidebarInfoBox selectedItem={sidebarItem} className="hidden lg:flex" />
      <div className="flex-1 p-8 pt-0">
        {/* Header with search bar */}
        <div className="flex items-center my-6 gap-4">
          <SearchBar value={search} onChange={setSearch} />
          <div className="flex-1 border-t border-gray-300" />
        </div>
        {categories.map(cat => {
          const filteredItems = cat.items.filter(matchesSearch);
          const isCollapsed = collapsed[cat.key];
          return (
            <React.Fragment key={cat.key}>
              <div className="flex items-center my-6 cursor-pointer select-none" onClick={() => toggleCollapse(cat.key)}>
                <div className="flex-1 border-t border-gray-300" />
                <span className="mx-4 text-2xl font-bold">
                  {cat.label}
                  <span className="ml-2 text-base align-middle">{isCollapsed ? "▲" : "▼"}</span>
                </span>
                <div className="flex-1 border-t border-gray-300" />
              </div>
              {!isCollapsed && (
                <IconGrid
                  items={filteredItems}
                  selected={null}
                  setSelected={idx => {
                    // Toggle modal: open if closed, close if open and same item
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
