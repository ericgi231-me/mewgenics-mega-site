import type { GameObject } from "../../types";

const FACE_ITEM_OBJECTS: GameObject[] = [
  {
    name: "Advanced Alloy Mask",
    icon_path: "/assets/items/ITEM_Advanced_Alloy_Mask.svg",
    description: "+4 Shield\n+2 Brace, +2 Thorns.\nBrittle.",
    notes: [
      { label: "Type", content: "Face" },
      { label: "Sets", content: "Advanced Alloy" },
    ],
  },
  {
    name: "Alloy Mask",
    icon_path: "/assets/items/ITEM_Alloy_Mask_-Face-.svg",
    description: "+3 Shield\n+1 Brace, +2 Thorns.\nBrittle.",
    notes: [
      { label: "Type", content: "Face" },
      { label: "Sets", content: "Alloy" },
    ],
  },
  {
    name: "Amoeba (Face)",
    icon_path: "/assets/items/ITEM_Amoeba_-Face-.svg",
    description: "+4 Shield, -1 Intelligence\n+1 Brace. +10% Miss Chance.\nParasite.\nCursed.",
    notes: [
      { label: "Type", content: "Face" },
      { label: "Sets", content: "Amoeba" },
    ],
  },
  {
    name: "Ancestor's Jaw",
    icon_path: "/assets/items/ITEM_Ancestor-s_Jaw.svg",
    description: "Mimics a class passive.\nWill use it as it's description.",
    notes: [
      { label: "Type", content: "Face" },
      { label: "Rarity", content: "Rare" },
      { label: "Sets", content: "Ancestor,Bone" },
    ],
  },
  {
    name: "Angry Face",
    icon_path: "/assets/items/ITEM_Angry_Face.svg",
    description: "Side Quest Item. Equipped cat is an enemy, must be downed to win the battle, and can still receive level ups. Can't be equipped to a Collarless cat. Cursed.",
    notes: [
      { label: "Type", content: "Face" },
      { label: "Rarity", content: "Side Quest" },
      { label: "Sets", content: "Paper" },
    ],
  },
  {
    name: "Attractive Hair Clip",
    icon_path: "/assets/items/ITEM_Attractive_Hair_Clip.svg",
    description: "After you're downed, the next time an allied cat takes a turn, they take an extra turn.",
    notes: [
      { label: "Type", content: "Face" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Used" },
    ],
  },
  {
    name: "Ball Gag",
    icon_path: "/assets/items/ITEM_Ball_Gag.svg",
    description: "Gain +2 Charge when you take damage.",
    notes: [
      { label: "Type", content: "Face" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Gimp" },
    ],
  },
  {
    name: "Bandage",
    icon_path: "/assets/items/ITEM_Bandage.svg",
    description: "+2 Health Regen, -1 Constitution.",
    notes: [
      { label: "Type", content: "Face" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Nurse" },
    ],
  },
  {
    name: "Bandages",
    icon_path: "/assets/items/ITEM_Bandages.svg",
    description: "Heals heal you for twice as much.",
    notes: [
      { label: "Type", content: "Face" },
      { label: "Rarity", content: "Rare" },
      { label: "Sets", content: "Nurse" },
    ],
  },
  {
    name: "Bandit Mask",
    icon_path: "/assets/items/ITEM_Bandit_Mask.svg",
    description: "Your basic attack spawns 1 coin when it deals damage.",
    notes: [
      { label: "Type", content: "Face" },
      { label: "Rarity", content: "Common" },
      { label: "Sets", content: "Thief" },
    ],
  },
  {
    name: "Barbed Mask",
    icon_path: "/assets/items/ITEM_Barbed_Mask.svg",
    description: "+1 Damage, +1 Thorns, -1 max HP.",
    notes: [
      { label: "Type", content: "Face" },
      { label: "Rarity", content: "Common" },
      { label: "Sets", content: "Barbed" },
    ],
  },
  {
    name: "Barbed Scrap",
    icon_path: "/assets/items/ITEM_Barbed_Scrap.svg",
    description: "+4 Shield\n+1 Thorns, +1 Damage.",
    notes: [
      { label: "Type", content: "Face" },
      { label: "Rarity", content: "Very Rare" },
      { label: "Sets", content: "Barbed,Scrap" },
    ],
  },
  {
    name: "Bear Trap Mask",
    icon_path: "/assets/items/ITEM_Bear_Trap_Mask.svg",
    description: "+4 Shield\n+1 Bleed Thorns.",
    notes: [
      { label: "Type", content: "Face" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Lead" },
    ],
  },
  {
    name: "Big Rock Mask",
    icon_path: "/assets/items/ITEM_Big_Rock_Mask.svg",
    description: "+6 Shield, -2 Speed\nBrace 2.",
    notes: [
      { label: "Type", content: "Face" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Rock" },
    ],
  },
  {
    name: "Bionic Face Plating",
    icon_path: "/assets/items/ITEM_Bionic_Face_Plating.svg",
    description: "+3 Speed\nFragile.",
    notes: [
      { label: "Type", content: "Face" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Bionic" },
    ],
  },
  {
    name: "Black Belt",
    icon_path: "/assets/items/ITEM_Black_Belt.svg",
    description: "25% chance to block attacks and counter attack.",
    notes: [
      { label: "Type", content: "Face" },
      { label: "Rarity", content: "Rare" },
    ],
  },
  {
    name: "Blessed Ashes",
    icon_path: "/assets/items/ITEM_Blessed_Ashes.svg",
    description: "+3 Shield.\nGain +3 Shield once per battle when your HP is 3 or less.",
    notes: [
      { label: "Type", content: "Face" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Cleric" },
    ],
  },
  {
    name: "Bozo",
    icon_path: "/assets/items/ITEM_Bozo.svg",
    description: "+2 Charisma, -1 Intelligence\nYour basic attack has a +15% chance to inflict Fear.",
    notes: [
      { label: "Type", content: "Face" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Jester" },
    ],
  },
]

export default FACE_ITEM_OBJECTS;