import type { GameObject } from "../types";
import { renderStatsWithIcons } from "../utils/renderStatsWithIcons";

interface InfoBoxProps {
  selectedItem: GameObject | null;
}

function InfoBox({ selectedItem }: InfoBoxProps) {
  if (!selectedItem) {
    return (
      <div></div>
    );
  }
  const item = selectedItem;
  return (
    <div className="relative">
      {/* Floating icon in top right, under text */}
      {item.icon_path && (
        <img
          src={item.icon_path}
          alt={item.name}
          className="absolute top-4 right-4 max-w-[80px] max-h-[80px] opacity-30 pointer-events-none select-none object-contain"
          style={{ zIndex: 0 }}
        />
      )}
      <div className="flex items-start mb-4 relative z-10">
        <div>
          <div className="text-xl font-bold mb-1 underline">{item.name}</div>
          <div className="mb-2 text-gray-700">{item.description}</div>
        </div>
      </div>
      {item.description2 && (
        <div className="mb-2 relative z-10">
          <span className="font-semibold">Upgraded:</span> {item.description2}
        </div>
      )}
      {item.unlock && (
        <div className="mb-2 relative z-10">
          <span className="font-semibold">Unlock:</span> {item.unlock}
        </div>
      )}
      {item.notes && item.notes.length > 0 && (
        <div className="mt-2 w-full relative z-10">
          {item.notes.map((note, i) => (
            <div key={i} className="mb-2">
              <span className="font-semibold">{note.label}:</span> {renderStatsWithIcons(note.content)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


// Sidebar wrapper
export function SidebarInfoBox(props: InfoBoxProps & { className?: string }) {
  const { className, ...infoProps } = props;
  return (
    <div className={`w-96 bg-gray-100 border-r-4 border-gray-400 p-8 flex flex-col items-start justify-start ${className ?? ""}`}>
      <InfoBox {...infoProps} />
    </div>
  );
}

// Modal wrapper
export function ModalInfoBox(props: InfoBoxProps & { onClose?: () => void }) {
  if (!props.selectedItem) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-start pointer-events-none"
      style={{ background: "none" }}
    >
      <div
        className="bg-gray-100 rounded-3xl shadow-2xl p-12 relative pointer-events-auto"
        style={{
          marginTop: "3rem",
          marginBottom: "3rem",
          minWidth: "60vw",
          maxWidth: "90vw",
          minHeight: "60vh",
          maxHeight: "90vh",
          overflowY: "auto",
          boxSizing: "border-box",
        }}
        onClick={e => e.stopPropagation()}
      >
        <InfoBox selectedItem={props.selectedItem} />
      </div>
      <div
        className="absolute inset-0"
        style={{ pointerEvents: "auto" }}
        onClick={props.onClose}
      />
    </div>
  );
}
