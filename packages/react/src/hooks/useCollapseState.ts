import { useState, useCallback } from "react";

function useCollapseState() {
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [subCollapsed, setSubCollapsed] = useState<Record<string, boolean>>({});

  const toggleCollapse = useCallback((key: string) => {
    setCollapsed(prev => ({ ...prev, [key]: !prev[key] }));
  }, []);

  const toggleSubCollapse = useCallback((catKey: string, subKey: string) => {
    setSubCollapsed(prev => ({
      ...prev,
      [`${catKey}-${subKey}`]: !prev[`${catKey}-${subKey}`],
    }));
  }, []);

  return { collapsed, subCollapsed, toggleCollapse, toggleSubCollapse };
}

export default useCollapseState;
