import InfoBox from "./InfoBox";
import type { GameObject } from "../types";

interface ModalInfoBoxProps {
  selectedItem: GameObject | null;
  onClose?: () => void;
}

function ModalInfoBox({ selectedItem, onClose }: ModalInfoBoxProps) {
  if (!selectedItem) return null;
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-start pointer-events-none bg-none">
      <div
        className="relative pointer-events-auto bg-surface text-text rounded-3xl shadow-lg p-12 mt-12 mb-12 min-w-[60vw] max-w-[90vw] min-h-[60vh] max-h-[90vh] overflow-y-auto box-border"
        onClick={e => e.stopPropagation()}
      >
        <InfoBox selectedItem={selectedItem} />
      </div>
      <div
        className="absolute inset-0"
        style={{ pointerEvents: "auto" }}
        onClick={onClose}
      />
    </div>
  );
}

export default ModalInfoBox;
