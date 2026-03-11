import InfoBox from "./InfoBox";
import type { GameObject } from "../types";

interface SidebarInfoBoxProps {
  selectedItem: GameObject | null;
  className?: string;
}

function SidebarInfoBox({ selectedItem, className }: SidebarInfoBoxProps) {
  return (
    <div
      className={`w-80 shrink-0 overflow-hidden flex flex-col items-start justify-start bg-surface p-8 min-h-screen shadow-[inset_-1px_0_0_var(--color-rule)] ${className ?? ""}`}
    >
      <InfoBox selectedItem={selectedItem} />
    </div>
  );
}

export default SidebarInfoBox;
