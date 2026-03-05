import { useState } from "react";

export function useSelectedCollar() {
  const [selected, setSelected] = useState<number | null>(null);
  return { selected, setSelected };
}
