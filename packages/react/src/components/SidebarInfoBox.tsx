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
      <div className="mt-auto w-full rounded-md border border-amber-400 bg-amber-50 p-3 text-amber-900">
        <p className="text-sm font-bold">⚠️ Scheduled Downtime</p>
        <p className="text-xs mt-1">
          This site will be offline <strong>April 1–5</strong> while the server is relocated across the country. Sorry for the inconvenience!
        </p>
      </div>
    </div>
  );
}

export default SidebarInfoBox;
