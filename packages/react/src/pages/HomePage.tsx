
import { useSelectedCollar } from "../hooks/useSelectedCollar";
import IconGrid from "../components/IconGrid";
import InfoBox from "../components/InfoBox";
import { COLLAR_OBJECTS } from "../data/collars";

function HomePage() {
  const { selected, setSelected } = useSelectedCollar();

  // Define metadata for info box fields
  const collarFields = [
    { label: "Name", field: "name" },
    { label: "Description", field: "description" },
    { label: "Unlock", field: "unlock" },
    {
      label: "Buffs",
      field: "buffs",
      render: (buffs: any[]) => (
        <ul className="list-disc ml-5">
          {buffs.map((buff, i) => (
            <li key={i}>{buff.stat} +{buff.value}</li>
          ))}
        </ul>
      ),
    },
    {
      label: "Debuffs",
      field: "debuffs",
      render: (debuffs: any[]) => (
        <ul className="list-disc ml-5">
          {debuffs.map((debuff, i) => (
            <li key={i}>{debuff.stat} {debuff.value >= 0 ? "+" : ""}{debuff.value}</li>
          ))}
        </ul>
      ),
    },
    {
      label: "Level Up",
      field: "level_up",
      render: (level_up: any[]) => level_up.join(", "),
    },
  ];

  return (
    <div className="flex min-h-screen">
      <InfoBox
        selected={selected}
        items={COLLAR_OBJECTS}
        fields={collarFields}
        title="Collar Info"
      />
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-6">Collars</h2>
        <IconGrid
          items={COLLAR_OBJECTS}
          selected={selected}
          setSelected={setSelected}
          iconField="icon_path"
          nameField="name"
        />
      </div>
    </div>
  );
}

export default HomePage
