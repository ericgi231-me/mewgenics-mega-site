import { useState, useCallback, useRef } from "react";

function useSearchFilter() {
  const [search, setSearchRaw] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const debounceRef = useRef<number | null>(null);

  // Debounced setter
  const setSearch = (value: string) => {
    setSearchRaw(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(() => {
      setDebouncedSearch(value);
    }, 200);
  };

  const matchesSearch = useCallback((obj: any) => {
    if (!debouncedSearch.trim()) return true;
    const lower = debouncedSearch.toLowerCase();
    if (obj.name && obj.name.toLowerCase().includes(lower)) return true;
    if (obj.description && obj.description.toLowerCase().includes(lower)) return true;
    if (obj.description2 && obj.description2.toLowerCase().includes(lower)) return true;
    if (obj.unlock && obj.unlock.toLowerCase().includes(lower)) return true;
    if (obj.notes && obj.notes.some((note: any) =>
      note.content && note.content.toLowerCase().includes(lower)
    )) return true;
    return false;
  }, [debouncedSearch]);

  return { search, setSearch, matchesSearch };
}

export default useSearchFilter;