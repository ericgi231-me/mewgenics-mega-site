import { useState } from "react";

function useSelectedCollar() {
  const [selected, setSelected] = useState<number | null>(null);
  return { selected, setSelected };
}

export default useSelectedCollar;
