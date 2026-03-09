import type { GameObject } from "../../types";

const CONSUMABLE_ITEM_OBJECTS: GameObject[] = [
  {
    name: "A Snack",
    icon_path: "/assets/items/ITEM_A_Snack.svg",
    description: "Eat to heal 12 HP.",
    notes: [
      { label: "Type", content: "Consumable" },
      { label: "Rarity", content: "Common" },
      { label: "Uses", content: "1" },
    ],
  },
  {
    name: "Ability Syringe",
    icon_path: "/assets/items/ITEM_Ability_Syringe.svg",
    description: "Use to immediately teach a cat the ability.",
    notes: [
      { label: "Type", content: "Consumable" },
    ],
  },
  {
    name: "Antidote",
    icon_path: "/assets/items/ITEM_Antidote.svg",
    description: "Use: Cleanse all debuffs.\nThis can be used on adjacent units.",
    notes: [
      { label: "Type", content: "Consumable" },
      { label: "Rarity", content: "Common" },
      { label: "Uses", content: "2" },
    ],
  },
  {
    name: "Big Bucket of Lard",
    icon_path: "/assets/items/ITEM_Big_Bucket_of_Lard.svg",
    description: "Heal yourself and all adjacent units to max HP.",
    notes: [
      { label: "Type", content: "Consumable" },
      { label: "Rarity", content: "Rare" },
    ],
  },
  {
    name: "Big Toe",
    icon_path: "/assets/items/ITEM_Big_Toe_-Consumable-.svg",
    description: "Use: Heal 6, gain +1 Health Regen and cleanse your debuffs.",
    notes: [
      { label: "Type", content: "Consumable" },
      { label: "Uses", content: "1" },
      { label: "Sets", content: "Human Flesh" },
    ],
  },
  {
    name: "Bag of Grass",
    icon_path: "/assets/items/ITEM_Bag_of_Grass.svg",
    description: "Gain 10 mana.",
    notes: [
      { label: "Type", content: "Consumable" },
      { label: "Rarity", content: "Rare" },
      { label: "Uses", content: "5" },
    ],
  },
  {
    name: "Brain Candy",
    icon_path: "/assets/items/ITEM_Brain_Candy.svg",
    description: "Eat to gain +5 Intelligence for the rest of the battle.",
    notes: [
      { label: "Type", content: "Consumable" },
      { label: "Rarity", content: "Common" },
      { label: "Uses", content: "1" },
    ],
  },
]

export default CONSUMABLE_ITEM_OBJECTS;