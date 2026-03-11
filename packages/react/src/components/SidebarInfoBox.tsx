import InfoBox from "./InfoBox";
import type { GameObject } from "../types";

interface SidebarInfoBoxProps {
  selectedItem: GameObject | null;
  className?: string;
}

function SidebarInfoBox({ selectedItem, className }: SidebarInfoBoxProps) {
  return (
    <div
      className={`w-96 shrink-0 overflow-hidden flex flex-col items-start justify-start bg-color-background border-r-4 border-color-border p-8 min-h-screen ${className ?? ""}`}
    >
      <InfoBox selectedItem={selectedItem} />
    </div>
  );
}

export default SidebarInfoBox;
