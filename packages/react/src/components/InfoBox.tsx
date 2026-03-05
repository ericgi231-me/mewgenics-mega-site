import type { GameObject } from "../types";
import { renderTextWithIcons } from "../utils/renderTextWithIcons";

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
    <div className="relative" >
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
          <div className="text-xl font-bold mb-1 underline text-color-primary">{item.name}</div>
          <div className="mb-2 text-color-text-primary">{renderTextWithIcons(item.description)}</div>
        </div>
      </div>
      {item.description2 && (
        <div className="mb-2 relative z-10">
          <div className="text-xl font-bold mb-1 underline text-color-primary">{item.name+'+'}</div>
          <span className="font-semibold text-color-accent"></span> {renderTextWithIcons(item.description2)}
        </div>
      )}
      {item.unlock && (
        <div className="mb-2 relative z-10">
          <span className="font-semibold text-[var(--color-accent)]">Unlock:</span> <span className="text-[var(--color-text-hover)]">{item.unlock}</span>
        </div>
      )}
      {/* Divider between unlock and notes */}
      {item.notes && item.notes.length > 0 && (
        <hr className="w-full border-t border-[var(--color-border)] my-2 opacity-60" />
      )}
      {item.notes && item.notes.length > 0 && (
        <div className="mt-2 w-full relative z-10">
          {item.notes.map((note, i) => (
            <div key={i} className="mb-2">
              <span className="font-semibold text-[var(--color-accent-light)]">{note.label}:</span> {renderTextWithIcons(note.content)}
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
    <div
      className={`w-96 flex flex-col items-start justify-start bg-color-background border-r-4 border-color-border p-8 min-h-screen ${className ?? ""}`}
    >
      <InfoBox {...infoProps} />
    </div>
  );
}

// Modal wrapper
export function ModalInfoBox(props: InfoBoxProps & { onClose?: () => void }) {
  if (!props.selectedItem) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-start pointer-events-none bg-none"
    >
      <div
        className="relative pointer-events-auto bg-[var(--color-surface)] text-[var(--color-text)] rounded-3xl shadow-lg p-12 mt-12 mb-12 min-w-[60vw] max-w-[90vw] min-h-[60vh] max-h-[90vh] overflow-y-auto box-border"
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
