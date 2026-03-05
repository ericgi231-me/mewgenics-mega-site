import { useState, useCallback } from "react";

function useSearchFilter() {
  const [search, setSearch] = useState("");

  const matchesSearch = useCallback((obj: any) => {
    if (!search.trim()) return true;
    const lower = search.toLowerCase();
    if (obj.name && obj.name.toLowerCase().includes(lower)) return true;
    if (obj.description && obj.description.toLowerCase().includes(lower)) return true;
    if (obj.notes && obj.notes.some((note: any) =>
      note.label.toLowerCase().includes(lower) ||
      note.content.toLowerCase().includes(lower)
    )) return true;
    return false;
  }, [search]);

  return { search, setSearch, matchesSearch };
}

export default useSearchFilter;