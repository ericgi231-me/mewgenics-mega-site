interface IconGridProps<T> {
  items: T[];
  selected: number | null;
  setSelected: (idx: number) => void;
  iconField: keyof T;
  nameField?: keyof T;
}

function IconGrid<T>({ items, selected, setSelected, iconField, nameField }: IconGridProps<T>) {
  return (
    <div className="flex flex-wrap items-start gap-1 mx-auto">
      {items.map((item, idx) => (
        <div
          key={nameField ? String(item[nameField]) : idx}
          className={`relative cursor-pointer ${selected === idx ? "ring-2" : ""}`}
          style={{ margin: "2px" }}
          onClick={() => setSelected(idx)}
        >
          <div className="flex items-center justify-center" style={{ width: "64px", height: "64px" }}>
            <img
              src={String(item[iconField])}
              alt={nameField ? String(item[nameField]) : `item-${idx}`}
              className="object-contain"
              draggable={false}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default IconGrid;
