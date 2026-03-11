import { useState, useMemo } from "react";
import { SidebarInfoBox, ModalInfoBox, CategorySection } from "../components";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import { useSearchFilter, useLoadedData, useCollapseState } from "../hooks";
import type { SelectionState } from "../types";
import { categories } from "../data/categories";

function HomePage() {
  const loadedData = useLoadedData();
  const { collapsed, subCollapsed, toggleCollapse, toggleSubCollapse } = useCollapseState();
  const { search, setSearch, matchesSearch } = useSearchFilter();

  const [selection, setSelection] = useState<SelectionState>({
    selectedCategory: null,
    selectedItem: null,
    hoveredCategory: null,
    hoveredItem: null,
  });
  const [modal, setModal] = useState<{ category: string; item: any } | null>(null);

  const visibleKeys = useMemo(() => {
    const keys = new Set<string>();
    for (const [key, items] of Object.entries(loadedData)) {
      if (items.some(matchesSearch)) keys.add(key);
    }
    return keys;
  }, [loadedData, matchesSearch]);

  return (
    <div className="flex flex-col min-h-screen bg-page text-body">
      <div className="flex flex-1">
        <SidebarInfoBox
          selectedItem={selection.hoveredItem}
          className="hidden lg:flex sticky top-0 h-screen"
        />
        <div className="flex-1 min-w-0 p-8 pt-0">
          <div className="flex items-center gap-4 sticky top-0 z-20 py-4">
            <SearchBar value={search} onChange={setSearch} />
          </div>
          {categories.map(cat => {
            const hasItems = cat.subcategories
              ? cat.subcategories.some(sub => {
                  const key = `${cat.key}-${sub.key}`;
                  return !(key in loadedData) || visibleKeys.has(key);
                })
              : !(cat.key in loadedData) || visibleKeys.has(cat.key);
            if (!hasItems) return null;
            return (
              <CategorySection
                key={cat.key}
                cat={cat}
                isCollapsed={!!collapsed[cat.key]}
                onToggle={() => toggleCollapse(cat.key)}
                subCollapsed={subCollapsed}
                onSubToggle={toggleSubCollapse}
                loadedData={loadedData}
                visibleKeys={visibleKeys}
                matchesSearch={matchesSearch}
                setModal={setModal}
                setSelection={setSelection}
              />
            );
          })}
          {modal?.item && (
            <ModalInfoBox selectedItem={modal.item} onClose={() => setModal(null)} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
