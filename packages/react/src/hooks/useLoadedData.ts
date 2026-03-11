import { useState, useEffect } from "react";
import type { GameObject } from "../types";
import { loaders } from "../data/loaders";

function useLoadedData(): Record<string, GameObject[]> {
  const [loadedData, setLoadedData] = useState<Record<string, GameObject[]>>({});

  useEffect(() => {
    Object.entries(loaders).forEach(([key, load]) => {
      load().then(mod => {
        setLoadedData(prev => ({ ...prev, [key]: mod.default as GameObject[] }));
      });
    });
  }, []);

  return loadedData;
}

export default useLoadedData;
