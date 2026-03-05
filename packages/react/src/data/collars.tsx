import { type Stat } from "./stats";

export type Collar = {
  name: string
  icon_path: string
  description: string
  unlock: string
  buffs: {
    stat: Stat
    value: number
  }[]
  debuffs: {
    stat: Stat
    value: number
  }[]
  level_up: Stat[]
}

export const COLLAR_OBJECTS: Collar[] = [
  {
    name: 'Collarless',
    icon_path: '/assets/collars/Collarless_icon.png',
    description: "It's a cat!",
    unlock: "Available at the start",
    buffs: [],
    debuffs: [],
    level_up: ["ALL"],
  },
  {
    name: 'Fighter',
    icon_path: '/assets/collars/Fighter_icon.png',
    description: "Punch your way to victory! Fighters are great at doing big strong melee attacks and smashing things to pieces!",
    unlock: "Available at the start",
    buffs: [
      { stat: 'STR', value: 2 },
      { stat: 'SPD', value: 1 },
    ],
    debuffs: [
      { stat: 'INT', value: -1 },
    ],
    level_up: ["STR", "SPD"],
  },
  {
    name: 'Hunter',
    icon_path: '/assets/collars/Hunter_Icon.png',
    description: "Shoot things from afar! Hunters are great at hitting things from a distance while stay out of danger themselves!",
    unlock: "Available at the start",
    buffs: [
      { stat: 'DEX', value: 3 },
      { stat: 'LCK', value: 2 },
    ],
    debuffs: [
      { stat: 'CON', value: -1 },
      { stat: 'SPD', value: -2 },
    ],
    level_up: ["DEX", "LCK"],
  },
  {
    name: 'Mage',
    icon_path: '/assets/collars/Mage_Icon.png',
    description: "Blast your foes! Mages are great at casting all sorts of crazy spells and dealing elemental damage!",
    unlock: "Available at the start",
    buffs: [
      { stat: 'INT', value: 2 },
      { stat: 'CHA', value: 2 },
    ],
    debuffs: [
      { stat: 'CON', value: -1 },
      { stat: 'STR', value: -1 },
    ],
    level_up: ["INT", "CHA"],
  },
  {
    name: 'Tank',
    icon_path: '/assets/collars/Tank_Icon.png',
    description: "Get in the way! Tanks are great at absorbing damage and pushing enemies around!",
    unlock: "Available at the start",
    buffs: [
      { stat: 'CON', value: 4 },
    ],
    debuffs: [
      { stat: 'DEX', value: -1 },
      { stat: 'INT', value: -1 },
    ],
    level_up: ["CON"],
  },
  {
    name: 'Cleric',
    icon_path: '/assets/collars/Cleric_Icon.png',
    description: "Be the best friend! Clerics are great at keeping your team alive and helping them recover from taking hits!",
    unlock: "Beating The Alley",
    buffs: [
      { stat: 'CHA', value: 2 },
      { stat: 'CON', value: 2 },
    ],
    debuffs: [
      { stat: 'DEX', value: -1 },
      { stat: 'SPD', value: -1 },
    ],
    level_up: ["CHA", "CON"],
  },
  {
    name: 'Thief',
    icon_path: '/assets/collars/Thief_Icon.png',
    description: "Attack from the shadows! Thieves are great at evading hits, collecting coins and striking from behind!",
    unlock: "Beating The Sewers",
    buffs: [
      { stat: 'SPD', value: 4 },
      { stat: 'LCK', value: 1 },
    ],
    debuffs: [
      { stat: 'STR', value: -1 },
      { stat: 'CON', value: -1 },
    ],
    level_up: ["SPD", "LCK"],
  },
  {
    name: 'Necromancer',
    icon_path: '/assets/collars/Necromancer_Icon.png',
    description: "Rise from the dead! Necromancers are great at playing with corpses and leeching life from enemies!",
    unlock: "Beating The Boneyard",
    buffs: [
      { stat: 'CON', value: 2 },
      { stat: 'CHA', value: 1 },
    ],
    debuffs: [
      { stat: 'STR', value: -2 },
    ],
    level_up: ["CON", "CHA"],
  },
  {
    name: 'Tinkerer',
    icon_path: '/assets/collars/Tinkerer_Icon.png',
    description: "A crafty inventor! Tinkerers are great at crafting temporary weapons and using all sorts of crazy gadgets!",
    unlock: "Beating The Bunker",
    buffs: [
      { stat: 'INT', value: 4 },
    ],
    debuffs: [
      { stat: 'LCK', value: -1 },
      { stat: 'CHA', value: -1 },
    ],
    level_up: ["INT"],
  },
  {
    name: 'Butcher',
    icon_path: '/assets/collars/Butcher_Icon.png',
    description: "Meat Meat Meat Meat Meat! Butchers are great at cleaving chunks of meat off of things and have a hook to pull stuff towards them!",
    unlock: "Beating The Core",
    buffs: [
      { stat: 'CON', value: 3 },
      { stat: 'STR', value: 2 },
    ],
    debuffs: [
      { stat: 'SPD', value: -2 },
    ],
    level_up: ["CON", "STR"],
  },
  {
    name: 'Druid',
    icon_path: '/assets/collars/Druid_Icon.png',
    description: "One with nature! Druids are great at summoning animal friends and come with a special Crow counterpart!",
    unlock: "Beating The Crater",
    buffs: [
      { stat: 'CHA', value: 3 },
      { stat: 'LCK', value: 1 },
    ],
    debuffs: [
      { stat: 'CON', value: -2 },
    ],
    level_up: ["CHA", "LCK"],
  },
  {
    name: 'Psychic',
    icon_path: '/assets/collars/Psychic_Icon.png',
    description: "Clear your mind! Psychics are great at manipulating things from afar and moving objects with their minds! Psychics also have +5 starting mana.",
    unlock: "Beating The Moon",
    buffs: [
      { stat: 'INT', value: 1 },
      { stat: 'CHA', value: 1 },
      { stat: 'SPD', value: 1 },
    ],
    debuffs: [
      { stat: 'CON', value: -1 },
    ],
    level_up: ["INT", "CHA", "SPD"],
  },
  {
    name: 'Monk',
    icon_path: '/assets/collars/Monk_Icon.png',
    description: "A versatile combat master! Monks can switch between ranged and melee stances and attack twice per turn!",
    unlock: "Beating The Lab",
    buffs: [
      { stat: 'INT', value: 2 },
      { stat: 'CHA', value: 2 },
    ],
    debuffs: [
      { stat: 'STR', value: -1 },
      { stat: 'DEX', value: -1 },
    ],
    level_up: ["INT", "CHA"],
  },
  {
    name: 'Jester',
    icon_path: '/assets/collars/Jester_Icon.png',
    description: "You can be anything! Jesters have no limits!",
    unlock: "Beating The Rift",
    buffs: [],
    debuffs: [],
    level_up: ["ALL"],
  },
];