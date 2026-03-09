import type { GameObject } from "../../types";

const NECK_ITEM_OBJECTS: GameObject[] = [
  {
    name: "A Friends Foot",
    icon_path: "/assets/items/ITEM_A_Friends_Foot.svg",
    description: "+1 Luck\nGain +1 Luck when you get a kill.",
    notes: [
      { label: "Type", content: "Neck" },
      { label: "Rarity", content: "Very Rare" },
      { label: "Sets", content: "Human Flesh" },
    ],
  },
  {
    name: "Advanced Alloy Armor",
    icon_path: "/assets/items/ITEM_Advanced_Alloy_Armor.svg",
    description: "+4 Shield\n2 Brace, 2 Thorns.\nBrittle.",
    notes: [
      { label: "Type", content: "Neck" },
      { label: "Sets", content: "Advanced Alloy" },
    ],
  },
  {
    name: "Alloy Armor",
    icon_path: "/assets/items/ITEM_Alloy_Armor.svg",
    description: "+3 Shield\n+1 Brace, +2 Thorns.\nBrittle.",
    notes: [
      { label: "Type", content: "Neck" },
      { label: "Sets", content: "Alloy" },
    ],
  },
  {
    name: "Amoeba (Neck)",
    icon_path: "/assets/items/ITEM_Amoeba_-Neck-.svg",
    description: "+4 Shield, -1 Charisma\n+1 Brace. +10% Miss Chance.\nParasite.\nCursed.",
    notes: [
      { label: "Type", content: "Neck" },
      { label: "Sets", content: "Amoeba" },
    ],
  },
  {
    name: "Ancestor's Bones",
    icon_path: "/assets/items/ITEM_Ancestor-s_Bones.svg",
    description: "Mimics a class passive.\nWill use it as it's description.",
    notes: [
      { label: "Type", content: "Neck" },
      { label: "Rarity", content: "Rare" },
      { label: "Sets", content: "Ancestor,Bone" },
    ],
  },
  {
    name: "Angelic Protection",
    icon_path: "/assets/items/ITEM_Angelic_Protection.svg",
    description: "33% chance to teleport to a random tile when targeted by an enemy.",
    notes: [
      { label: "Type", content: "Neck" },
      { label: "Rarity", content: "Rare" },
      { label: "Sets", content: "Cleric" },
    ],
  },
  {
    name: "Armory Key",
    icon_path: "/assets/items/ITEM_Armory_Key.svg",
    description: "Find an extra item after each battle.",
    notes: [
      { label: "Type", content: "Neck" },
      { label: "Rarity", content: "Rare" },
    ],
  },
  {
    name: "Asteroid Belt",
    icon_path: "/assets/items/ITEM_Asteroid_Belt.svg",
    description: "+2 Brace.\n+10% chance to block damage.",
    notes: [
      { label: "Type", content: "Neck" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Planet" },
    ],
  },
  {
    name: "Back Tentacles",
    icon_path: "/assets/items/ITEM_Back_Tentacles.svg",
    description: "+2 Shield\nCounterattack ranged attackers with a tentacle slap.",
    notes: [
      { label: "Type", content: "Neck" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Tentacle" },
    ],
  },
  {
    name: "Backpack",
    icon_path: "/assets/items/ITEM_Backpack.svg",
    description: "50% chance to find an extra consumable item at the end of each combat.\nWhen you use up a consumable or trinket, equip a new consumable item from your inventory if you have any.",
    notes: [
      { label: "Type", content: "Neck" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Survivalist" },
    ],
  },
  {
    name: "Bad Splinters",
    icon_path: "/assets/items/ITEM_Bad_Splinters.svg",
    description: "-2 Constitution\n+2 Thorns.",
    notes: [
      { label: "Type", content: "Neck" },
    ],
  },
  {
    name: "Barbed Necklace",
    icon_path: "/assets/items/ITEM_Barbed_Necklace.svg",
    description: "+1 Damage, +1 Thorns, -1 max HP.",
    notes: [
      { label: "Type", content: "Neck" },
      { label: "Rarity", content: "Common" },
      { label: "Sets", content: "Barbed" },
    ],
  },
  {
    name: "Big Rock Necklace",
    icon_path: "/assets/items/ITEM_Big_Rock_Necklace.svg",
    description: "+6 Shield, -2 Speed\nBrace 2.",
    notes: [
      { label: "Type", content: "Neck" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Rock" },
    ],
  },
  {
    name: "Bionic Neck Plating",
    icon_path: "/assets/items/ITEM_Bionic_Neck_Plating.svg",
    description: "+3 Speed\nFragile.",
    notes: [
      { label: "Type", content: "Neck" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Bionic" },
    ],
  },
  {
    name: "Bling",
    icon_path: "/assets/items/ITEM_Bling.svg",
    description: "+4 Shield, -2 Speed, +2 Charisma",
    notes: [
      { label: "Type", content: "Neck" },
      { label: "Rarity", content: "Uncommon" },
    ],
  },
  {
    name: "Blubber",
    icon_path: "/assets/items/ITEM_Blubber.svg",
    description: "+7 Constitution, -5 Speed, -2 Charisma",
    notes: [
      { label: "Type", content: "Neck" },
      { label: "Rarity", content: "Rare" },
      { label: "Sets", content: "Fatty" },
    ],
  },
  {
    name: "Bone Necklace",
    icon_path: "/assets/items/ITEM_Bone_Necklace.svg",
    description: "+3 Shield\nBreaks when Shield is depleted.\nWhen it breaks, gain +1 Dexterity and +3 Health Regen for the rest of the battle.",
    notes: [
      { label: "Type", content: "Neck" },
      { label: "Rarity", content: "Common" },
      { label: "Sets", content: "Bone" },
    ],
  },
  {
    name: "Boxing Charm",
    icon_path: "/assets/items/ITEM_Boxing_Charm.svg",
    description: "Start with +1 Bonus Attack.",
    notes: [
      { label: "Type", content: "Neck" },
      { label: "Rarity", content: "Common" },
      { label: "Sets", content: "Fighter,Twine" },
    ],
  },
]

export default NECK_ITEM_OBJECTS;