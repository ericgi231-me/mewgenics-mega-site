export type SubcategoryDef = { key: string; label: string };

export type CategoryDef = {
  key: string;
  label: string;
  subcategories?: SubcategoryDef[];
};

export const categories: CategoryDef[] = [
  { key: "collars", label: "Collars" },
  {
    key: "actives",
    label: "Actives",
    subcategories: [
      { key: "collarless", label: "Collarless" },
      { key: "fighter", label: "Fighter" },
      { key: "hunter", label: "Hunter" },
      { key: "mage", label: "Mage" },
      { key: "tank", label: "Tank" },
      { key: "cleric", label: "Cleric" },
      { key: "thief", label: "Thief" },
      { key: "necromancer", label: "Necromancer" },
      { key: "tinkerer", label: "Tinkerer" },
      { key: "butcher", label: "Butcher" },
      { key: "druid", label: "Druid" },
      { key: "psychic", label: "Psychic" },
      { key: "monk", label: "Monk" },
      { key: "jester", label: "Jester" },
    ],
  },
  {
    key: "passives",
    label: "Passives",
    subcategories: [
      { key: "collarless", label: "Collarless" },
      { key: "fighter", label: "Fighter" },
      { key: "hunter", label: "Hunter" },
      { key: "mage", label: "Mage" },
      { key: "tank", label: "Tank" },
      { key: "cleric", label: "Cleric" },
      { key: "thief", label: "Thief" },
      { key: "necromancer", label: "Necromancer" },
      { key: "tinkerer", label: "Tinkerer" },
      { key: "butcher", label: "Butcher" },
      { key: "druid", label: "Druid" },
      { key: "psychic", label: "Psychic" },
      { key: "monk", label: "Monk" },
      { key: "jester", label: "Jester" },
    ],
  },
  {
    key: "items",
    label: "Items",
    subcategories: [
      { key: "weapon", label: "Weapon" },
      { key: "head", label: "Head" },
      { key: "neck", label: "Neck" },
      { key: "face", label: "Face" },
      { key: "trinket", label: "Trinket" },
      { key: "consumable", label: "Consumable" },
    ],
  },
];
