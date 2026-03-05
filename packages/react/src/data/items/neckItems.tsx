import type { GameObject } from "../../types";

const NECK_ITEM_OBJECTS: GameObject[] = [
  {
    name: "Avenger",
    icon_path: "/assets/upgrades/passives/fighter/ABILITY_Avenger.svg",
    description: "When an allied cat is downed, gain All Stats Up 2 and heal 8.",
    description2: "When an allied cat is downed, gain All Stats Up 2, heal 50% of your max HP, and take an extra turn.",
    notes: [
      { label: "Class", content: "Fighter" },
    ],  
  },
  {
    name: "Boned",
    icon_path: "/assets/upgrades/passives/fighter/ABILITY_Boned.svg",
    description: "When you kill a unit, if you don't have a weapon, gain a Bone Club.",
    description2: "When you kill a unit, if you don't have a weapon, gain a Bone Club. Bonus Ability: Throw Weapon.",
    notes: [
      { label: "Class", content: "Fighter" },
    ],  
  },
  {
    name: "Dual Wield",
    icon_path: "/assets/upgrades/passives/fighter/ABILITY_Dual_Wield.svg",
    description: "When you use your weapon, automatically use it again for free.",
    description2: "When you use your weapon, automatically use it again for free, and then again! for free!",
    notes: [
      { label: "Class", content: "Fighter" },
    ],  
  },
]

export default NECK_ITEM_OBJECTS;