import InfoBox from "./InfoBox";
import type { GameObject } from "../types";

interface ModalInfoBoxProps {
  selectedItem: GameObject | null;
  onClose?: () => void;
}

function ModalInfoBox({ selectedItem, onClose }: ModalInfoBoxProps) {
  if (!selectedItem) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start pointer-events-none">
      <div
        className="absolute inset-0 bg-black/50"
        style={{ pointerEvents: "auto" }}
        onClick={onClose}
      />
      <div
        className="relative pointer-events-auto bg-surface rounded-2xl shadow-xl p-12 mt-12 mb-12 min-w-[60vw] max-w-[90vw] min-h-[60vh] max-h-[90vh] overflow-y-auto box-border"
        onClick={e => e.stopPropagation()}
      >
        <div className="mb-4 w-full rounded-md border border-amber-400 bg-amber-50 p-3 text-amber-900">
          <p className="text-sm font-bold">⚠️ Scheduled Downtime</p>
          <p className="text-xs mt-1">
            This site will be offline <strong>April 1–5</strong> while the server is relocated across the country. Sorry for the inconvenience!
          </p>
        </div>
        <InfoBox selectedItem={selectedItem} />
      </div>
    </div>
  );
}

export default ModalInfoBox;
