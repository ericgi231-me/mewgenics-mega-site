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
          <div className="text-xl font-bold mb-1 underline" style={{ color: 'var(--color-primary)' }}>{item.name}</div>
          <div className="mb-2" style={{ color: 'var(--color-text-primary)' }}>{item.description}</div>
        </div>
      </div>
      {item.description2 && (
        <div className="mb-2 relative z-10">
          <span className="font-semibold" style={{ color: 'var(--color-accent)' }}>Upgraded:</span> {item.description2}
        </div>
      )}
      {item.unlock && (
        <div className="mb-2 relative z-10">
          <span className="font-semibold" style={{ color: 'var(--color-accent)' }}>Unlock:</span> {item.unlock}
        </div>
      )}
      {item.notes && item.notes.length > 0 && (
        <div className="mt-2 w-full relative z-10">
          {item.notes.map((note, i) => (
            <div key={i} className="mb-2">
              <span className="font-semibold" style={{ color: 'var(--color-primary)' }}>{note.label}:</span> {renderTextWithIcons(note.content)}
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
      className={`w-96 flex flex-col items-start justify-start ${className ?? ""}`}
      style={{ background: 'var(--color-background)', borderRight: '4px solid var(--color-border)', padding: '2rem', minHeight: '100vh' }}
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
      className="fixed inset-0 z-50 flex justify-center items-start pointer-events-none"
      style={{ background: "none" }}
    >
      <div
        className="relative pointer-events-auto"
        style={{
          background: 'var(--color-surface)',
          color: 'var(--color-text)',
          borderRadius: '2rem',
          boxShadow: 'var(--shadow-lg)',
          padding: '3rem',
          marginTop: '3rem',
          marginBottom: '3rem',
          minWidth: '60vw',
          maxWidth: '90vw',
          minHeight: '60vh',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxSizing: 'border-box',
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
