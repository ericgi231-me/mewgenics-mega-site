import type { GameObject } from "../../types";

const HEAD_ITEM_OBJECTS: GameObject[] = [
  {
    name: "Advanced Alloy Hat",
    icon_path: "/assets/items/ITEM_Advanced_Alloy_Hat.svg",
    description: "+4 Shield\n+2 Brace, +2 Thorns.\nBrittle.",
    notes: [
      { label: "Type", content: "Head" },
      { label: "Sets", content: "Advanced Alloy" },
    ],
  },
  {
    name: "Alien Stalk",
    icon_path: "/assets/items/ITEM_Alien_Stalk.svg",
    description: "Cast a random spell each time you take damage.",
    notes: [
      { label: "Type", content: "Head" },
      { label: "Rarity", content: "Very Rare" },
      { label: "Sets", content: "Space,Amoeba" },
    ],
  },
  {
    name: "Alloy Hat",
    icon_path: "/assets/items/ITEM_Alloy_Hat.svg",
    description: "+3 Shield\n+1 Brace, +2 Thorns.\nBrittle.",
    notes: [
      { label: "Type", content: "Head" },
      { label: "Sets", content: "Alloy" },
    ],
  },
  {
    name: "Alluring Doodie",
    icon_path: "/assets/items/ITEM_Alluring_Doodie.svg",
    description: "10% chance to eat poop and gain Poison 1 each turn.",
    notes: [
      { label: "Type", content: "Head" },
      { label: "Uses", content: "5" },
      { label: "Sets", content: "Fecal" },
    ],
  },
  {
    name: "Amoeba (Head)",
    icon_path: "/assets/items/ITEM_Amoeba_-Head-.svg",
    description: "+4 Shield, -1 Constitution\n+1 Brace. +10% Miss Chance.\nParasite.\nCursed.",
    notes: [
      { label: "Type", content: "Head" },
      { label: "Sets", content: "Amoeba" },
    ],
  },
  {
    name: "Ancestor's Skull",
    icon_path: "/assets/items/ITEM_Ancestor-s_Skull.svg",
    description: "Mimics a class passive.\nWill use it as it's description.",
    notes: [
      { label: "Type", content: "Head" },
      { label: "Rarity", content: "Rare" },
      { label: "Sets", content: "Ancestor,Bone" },
    ],
  },
  {
    name: "Angry Worm",
    icon_path: "/assets/items/ITEM_Angry_Worm.svg",
    description: "-1 Constitution\nYour basic attack hits an extra time for 1 damage.\nParasite.\nCursed.",
    notes: [
      { label: "Type", content: "Head" },
      { label: "Sets", content: "Parasite" },
    ],
  },
  {
    name: "Antenna",
    icon_path: "/assets/items/ITEM_Antenna.svg",
    description: "Units that contact or attack you get hit with a lightning bolt that has a 10% chance to Stun.",
    notes: [
      { label: "Type", content: "Head" },
      { label: "Rarity", content: "Uncommon" },
    ],
  },
  {
    name: "Asteroid",
    icon_path: "/assets/items/ITEM_Asteroid_-Item-.svg",
    description: "+4 Shield\n20% chance to call down a Meteor on a random enemy when you take damage.",
    notes: [
      { label: "Type", content: "Head" },
      { label: "Rarity", content: "Very Rare" },
      { label: "Sets", content: "Planet" },
    ],
  },
  {
    name: "Bean Parasite",
    icon_path: "/assets/items/ITEM_Bean_Parasite.svg",
    description: "+5 Intelligence\nConfusion 99.\nParasite.\nCursed.",
    notes: [
      { label: "Type", content: "Head" },
      { label: "Rarity", content: "Common" },
      { label: "Sets", content: "Parasite" },
    ],
  },
  {
    name: "Beepis",
    icon_path: "/assets/items/ITEM_Beepis.svg",
    description: "Your passives are duplicated during battle.\nYour spells cost +2 mana and can only be used once per turn.\nParasite.\nCursed.",
    notes: [
      { label: "Type", content: "Head" },
    ],
  },
  {
    name: "Best Bud",
    icon_path: "/assets/items/ITEM_Best_Bud.svg",
    description: "-1 Speed, -1 Charisma\nSpawns 2 Pooter familiars when you're downed.\nParasite.\nCursed.",
    notes: [
      { label: "Type", content: "Head" },
      { label: "Sets", content: "Parasite" },
    ],
  },
  {
    name: "Big Rock Hat",
    icon_path: "/assets/items/ITEM_Big_Rock_Hat.svg",
    description: "+6 Shield, -2 Speed\nBrace 2.",
    notes: [
      { label: "Type", content: "Head" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Rock" },
    ],
  },
  {
    name: "Bionic Skull Plating",
    icon_path: "/assets/items/ITEM_Bionic_Skull_Plating.svg",
    description: "+3 Speed\nFragile.",
    notes: [
      { label: "Type", content: "Head" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Bionic" },
    ],
  },
  {
    name: "Bird Poop",
    icon_path: "/assets/items/ITEM_Bird_Poop.svg",
    description: "-1 Charisma\n+50% chance for an extra bird to spawn at the start of each battle.",
    notes: [
      { label: "Type", content: "Head" },
      { label: "Sets", content: "Fecal" },
    ],
  },
  {
    name: "Black Candle",
    icon_path: "/assets/items/ITEM_Black_Candle.svg",
    description: "Cursed.\n+1 Shield\nYou can remove Cursed Items equipped to you, except this one.",
    notes: [
      { label: "Type", content: "Head" },
      { label: "Rarity", content: "Rare" },
      { label: "Sets", content: "Demonic" },
    ],
  },
  {
    name: "Blessed Halo",
    icon_path: "/assets/items/ITEM_Blessed_Halo.svg",
    description: "+3 Holy Shield\n50% chance to gain +1 Holy Shield when you take damage.",
    notes: [
      { label: "Type", content: "Head" },
      { label: "Rarity", content: "Very Rare" },
    ],
  },
  {
    name: "Boris' Brain",
    icon_path: "/assets/items/ITEM_Boris-_Brain.svg",
    description: "Trample. When you take damage, move 1 tile towards what damaged you.",
    notes: [
      { label: "Type", content: "Head" },
      { label: "Rarity", content: "Very Rare" },
      { label: "Sets", content: "Guts" },
    ],
  },
  {
    name: "Brain Chip",
    icon_path: "/assets/items/ITEM_Brain_Chip.svg",
    description: "+1 Strength, +1 Dexterity, +1 Constitution, +1 Intelligence, +1 Speed, +1 Charisma, +1 Luck\nBecome AI controlled.",
    notes: [
      { label: "Type", content: "Head" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Chip" },
    ],
  },
  {
    name: "Barbed Hat",
    icon_path: "/assets/items/ITEM_Barbed_Hat.svg",
    description: "+1 Damage, +1 Thorns, -1 max HP.",
    notes: [
      { label: "Type", content: "Head" },
      { label: "Rarity", content: "Common" },
      { label: "Sets", content: "Barbed" },
    ],
  },
]

export default HEAD_ITEM_OBJECTS;