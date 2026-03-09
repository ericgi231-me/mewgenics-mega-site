import type { GameObject } from "../../types";

const TRINKET_ITEM_OBJECTS: GameObject[] = [
  {
    name: "AAA Battery",
    icon_path: "/assets/items/ITEM_AAA_Battery.svg",
    description: "Every time you cast 3 spells, gain +3 Charge.",
    notes: [
      { label: "Type", content: "Trinket" },
      { label: "Rarity", content: "Uncommon" },
    ],
  },
  {
    name: "Angel Wing",
    icon_path: "/assets/items/ITEM_Angel_Wing.svg",
    description: "If an attack would down you, instead lower your HP to 1. While at 1 HP, this has no effect.",
    notes: [
      { label: "Type", content: "Trinket" },
      { label: "Rarity", content: "Rare" },
      { label: "Sets", content: "Feathered" },
    ],
  },
  {
    name: "Ankh",
    icon_path: "/assets/items/ITEM_Ankh.svg",
    description: "While you're downed, you have a 50% chance to revive with 33% HP at the end of each round.",
    notes: [
      { label: "Type", content: "Trinket" },
      { label: "Rarity", content: "Rare" },
    ],
  },
  {
    name: "Bag o' Bags",
    icon_path: "/assets/items/ITEM_Bag_o-_Bags.svg",
    description: "Use: Throw a trash bag on an adjacent tile.",
    notes: [
      { label: "Type", content: "Trinket" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Uses", content: "13" },
    ],
  },
  {
    name: "Bag of Seeds",
    icon_path: "/assets/items/ITEM_Bag_of_Seeds.svg",
    description: "Use: Spawn grass, flowers, or brambles on an adjacent tile.",
    notes: [
      { label: "Type", content: "Trinket" },
      { label: "Rarity", content: "Rare" },
      { label: "Sets", content: "Druid" },
    ],
  },
  {
    name: "Ball of Bandages",
    icon_path: "/assets/items/ITEM_Ball_of_Bandages.svg",
    description: "Cleanse one stack of a random debuff at the end of each turn.\n+1 Health Regen",
    notes: [
      { label: "Type", content: "Trinket" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Nurse" },
    ],
  },
  {
    name: "Ball of Yarn",
    icon_path: "/assets/items/ITEM_Ball_of_Yarn.svg",
    description: "Spawn a Charmed Kitten with All Stats Up 2 at the start of each battle.",
    notes: [
      { label: "Type", content: "Trinket" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Twine" },
    ],
  },
  {
    name: "Bee Stinger",
    icon_path: "/assets/items/ITEM_Bee_Stinger.svg",
    description: "Your basic attack inflicts Poison 1.",
    notes: [
      { label: "Type", content: "Trinket" },
      { label: "Rarity", content: "Rare" },
    ],
  },
  {
    name: "Binoculars",
    icon_path: "/assets/items/ITEM_Binoculars.svg",
    description: "+2 Range.",
    notes: [
      { label: "Type", content: "Trinket" },
      { label: "Rarity", content: "Uncommon" },
    ],
  },
  {
    name: "Bird Feed",
    icon_path: "/assets/items/ITEM_Bird_Feed.svg",
    description: "+50% chance for an extra bird to spawn at the start of each battle.",
    notes: [
      { label: "Type", content: "Trinket" },
      { label: "Rarity", content: "Uncommon" },
    ],
  },
  {
    name: "Bird Head",
    icon_path: "/assets/items/ITEM_Bird_Head.svg",
    description: "Your basic attack inflicts Soul Link.",
    notes: [
      { label: "Type", content: "Trinket" },
      { label: "Rarity", content: "Rare" },
      { label: "Sets", content: "Feathered" },
    ],
  },
  {
    name: "Bishop",
    icon_path: "/assets/items/ITEM_Bishop.svg",
    description: "Use: Move any number of tiles in a diagonal line.",
    notes: [
      { label: "Type", content: "Trinket" },
      { label: "Rarity", content: "Uncommon" },
    ],
  },
  {
    name: "Blinking Eyeball",
    icon_path: "/assets/items/ITEM_Blinking_Eyeball.svg",
    description: "Your line of sight restrictions are ignored.",
    notes: [
      { label: "Type", content: "Trinket" },
      { label: "Sets", content: "Guts" },
    ],
  },
  {
    name: "Bloody Coin",
    icon_path: "/assets/items/ITEM_Bloody_Coin.svg",
    description: "Use: Flip a coin.\nHeads: Refresh your basic attack.\nTails: Lose 50% of your HP.",
    notes: [
      { label: "Type", content: "Trinket" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Bloody" },
    ],
  },
  {
    name: "Bloody Razor",
    icon_path: "/assets/items/ITEM_Bloody_Razor.svg",
    description: "Use: Deal 5 damage to yourself to gain +3 Damage and +1 Magic Damage.",
    notes: [
      { label: "Type", content: "Trinket" },
      { label: "Rarity", content: "Very Rare" },
      { label: "Sets", content: "Bloody" },
    ],
  },
  {
    name: "Body Spray",
    icon_path: "/assets/items/ITEM_Body_Spray.svg",
    description: "+1 Charisma.",
    notes: [
      { label: "Type", content: "Trinket" },
      { label: "Rarity", content: "Common" },
    ],
  },
  {
    name: "Bone Marrow",
    icon_path: "/assets/items/ITEM_Bone_Marrow.svg",
    description: "Heal to full at the end of each battle.",
    notes: [
      { label: "Type", content: "Trinket" },
      { label: "Rarity", content: "Rare" },
      { label: "Sets", content: "Meat,Bone" },
    ],
  },
  {
    name: "Book",
    icon_path: "/assets/items/ITEM_Book.svg",
    description: "+1 Intelligence",
    notes: [
      { label: "Type", content: "Trinket" },
      { label: "Rarity", content: "Common" },
      { label: "Sets", content: "Paper" },
    ],
  },
  {
    name: "Botfly Larva",
    icon_path: "/assets/items/ITEM_Botfly_Larva.svg",
    description: "-1 Speed, -1 Charisma\nSpawns 2 Pooter familiars when you're downed.\nParasite.\nCursed.",
    notes: [
      { label: "Type", content: "Trinket" },
    ],
  },
  {
    name: "Big Toe",
    icon_path: "/assets/items/ITEM_Big_Toe_-Item-.svg",
    description: "After your 3rd turn, spawn a Charmed Spookie with Madness on a random tile.",
    notes: [
      { label: "Type", content: "Trinket" },
    ],
  },
]

export default TRINKET_ITEM_OBJECTS;