import type { GameObject } from "../types";
import GameImg from "./GameImg";
import IconText from "./IconText";

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
        <GameImg
          src={item.icon_path}
          alt={item.name}
          width={80}
          height={80}
          className="absolute top-4 right-4 max-w-20 max-h-20 opacity-30 pointer-events-none select-none object-contain"
          style={{ zIndex: 0 }}
          loading="lazy"
        />
      )}
      <div className="flex items-start mb-4 relative z-10">
        <div>
          <div className="text-xl font-bold mb-1 underline text-color-primary">{item.name}</div>
          <div className="mb-2 text-color-text-primary"><IconText text={item.description} /></div>
        </div>
      </div>
      {item.description2 && (
        <div className="mb-2 relative z-10">
          <div className="text-xl font-bold mb-1 underline text-color-primary">{item.name+'+'}</div>
          <span className="font-semibold text-color-accent"></span> <IconText text={item.description2} />
        </div>
      )}
      {item.unlock && (
        <div className="mb-2 relative z-10">
          <span className="font-semibold text-accent">Unlock:</span> <span className="text-text-hover"><IconText text={item.unlock} /></span>
        </div>
      )}
      {/* Divider between unlock and notes */}
      {item.notes && item.notes.length > 0 && (
        <hr className="w-full border-t border-border my-2 opacity-60" />
      )}
      {item.notes && item.notes.length > 0 && (
        <div className="mt-2 w-full relative z-10">
          {item.notes.map((note, i) => (
            <div key={i} className="mb-2">
              <span className="font-semibold text-accent-light">{note.label}:</span> <IconText text={note.content} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default InfoBox;
