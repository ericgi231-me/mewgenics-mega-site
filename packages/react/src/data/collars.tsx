import type { GameObject } from "../types";

const COLLAR_OBJECTS: GameObject[] = [
  {
    name: 'Collarless',
    icon_path: '/assets/collars/Collarless_icon.png',
    description: "It's a cat!",
    notes: [
      { label: 'Possible Stats on Level Up', content: 'ALL' },
    ],
  },
  {
    name: 'Fighter',
    icon_path: '/assets/collars/Fighter_icon.png',
    description: "Punch your way to victory! Fighters are great at doing big strong melee attacks and smashing things to pieces!",
    notes: [
      { label: 'Stat Bonus', content: 'STR +2, SPD +1' },
      { label: 'Stat Penalty', content: 'INT -1' },
      { label: 'Possible Stats on Level Up', content: 'STR, SPD' },
    ],
  },
  {
    name: 'Hunter',
    icon_path: '/assets/collars/Hunter_Icon.png',
    description: "Shoot things from afar! Hunters are great at hitting things from a distance while stay out of danger themselves!",
    notes: [
      { label: 'Stat Bonus', content: 'DEX +3, LCK +2' },
      { label: 'Stat Penalty', content: 'CON -1, SPD -2' },
      { label: 'Possible Stats on Level Up', content: 'DEX, LCK' },
    ],
  },
  {
    name: 'Mage',
    icon_path: '/assets/collars/Mage_Icon.png',
    description: "Blast your foes! Mages are great at casting all sorts of crazy spells and dealing elemental damage!",
    notes: [
      { label: 'Stat Bonus', content: 'INT +2, CHA +2' },
      { label: 'Stat Penalty', content: 'CON -1, STR -1' },
      { label: 'Possible Stats on Level Up', content: 'INT, CHA' },
    ],
  },
  {
    name: 'Tank',
    icon_path: '/assets/collars/Tank_Icon.png',
    description: "Get in the way! Tanks are great at absorbing damage and pushing enemies around!",
    notes: [
      { label: 'Stat Bonus', content: 'CON +4' },
      { label: 'Stat Penalty', content: 'DEX -1, INT -1' },
      { label: 'Possible Stats on Level Up', content: 'CON' },
    ],
  },
  {
    name: 'Cleric',
    icon_path: '/assets/collars/Cleric_Icon.png',
    description: "Be the best friend! Clerics are great at keeping your team alive and helping them recover from taking hits!",
    unlock: "Beating The Alley",
    notes: [
      { label: 'Stat Bonus', content: 'CHA +2, CON +2' },
      { label: 'Stat Penalty', content: 'DEX -1, SPD -1' },
      { label: 'Possible Stats on Level Up', content: 'CHA, CON' },
    ],
  },
  {
    name: 'Thief',
    icon_path: '/assets/collars/Thief_Icon.png',
    description: "Attack from the shadows! Thieves are great at evading hits, collecting coins and striking from behind!",
    unlock: "Beating The Sewers",
    notes: [
      { label: 'Stat Bonus', content: 'SPD +4, LCK +1' },
      { label: 'Stat Penalty', content: 'STR -1, CON -1' },
      { label: 'Possible Stats on Level Up', content: 'SPD, LCK' },
    ],
  },
  {
    name: 'Necromancer',
    icon_path: '/assets/collars/Necromancer_Icon.png',
    description: "Rise from the dead! Necromancers are great at playing with corpses and leeching life from enemies!",
    unlock: "Beating The Boneyard",
    notes: [
      { label: 'Stat Bonus', content: 'CON +2, CHA +1' },
      { label: 'Stat Penalty', content: 'STR -2' },
      { label: 'Possible Stats on Level Up', content: 'CON, CHA' },
    ],
  },
  {
    name: 'Tinkerer',
    icon_path: '/assets/collars/Tinkerer_Icon.png',
    description: "A crafty inventor! Tinkerers are great at crafting temporary weapons and using all sorts of crazy gadgets!",
    unlock: "Beating The Bunker",
    notes: [
      { label: 'Stat Bonus', content: 'INT +4' },
      { label: 'Stat Penalty', content: 'LCK -1, CHA -1' },
      { label: 'Possible Stats on Level Up', content: 'INT' },
    ],
  },
  {
    name: 'Butcher',
    icon_path: '/assets/collars/Butcher_Icon.png',
    description: "Meat Meat Meat Meat Meat! Butchers are great at cleaving chunks of meat off of things and have a hook to pull stuff towards them!",
    unlock: "Beating The Core",
    notes: [
      { label: 'Stat Bonus', content: 'CON +3, STR +2' },
      { label: 'Stat Penalty', content: 'SPD -2' },
      { label: 'Possible Stats on Level Up', content: 'CON, STR' },
    ],
  },
  {
    name: 'Druid',
    icon_path: '/assets/collars/Druid_Icon.png',
    description: "One with nature! Druids are great at summoning animal friends and come with a special Crow counterpart!",
    unlock: "Beating The Crater",
    notes: [
      { label: 'Stat Bonus', content: 'CHA +3, LCK +1' },
      { label: 'Stat Penalty', content: 'CON -2' },
      { label: 'Possible Stats on Level Up', content: 'CHA, LCK' },
    ],
  },
  {
    name: 'Psychic',
    icon_path: '/assets/collars/Psychic_Icon.png',
    description: "Clear your mind! Psychics are great at manipulating things from afar and moving objects with their minds! Psychics also have +5 starting mana.",
    unlock: "Beating The Moon",
    notes: [
      { label: 'Stat Bonus', content: 'INT +1, CHA +1, SPD +1' },
      { label: 'Stat Penalty', content: 'CON -1' },
      { label: 'Possible Stats on Level Up', content: 'INT, CHA, SPD' },
    ],
  },
  {
    name: 'Monk',
    icon_path: '/assets/collars/Monk_Icon.png',
    description: "A versatile combat master! Monks can switch between ranged and melee stances and attack twice per turn!",
    unlock: "Beating The Lab",
    notes: [
      { label: 'Stat Bonus', content: 'INT +2, CHA +2' },
      { label: 'Stat Penalty', content: 'STR -1, DEX -1' },
      { label: 'Possible Stats on Level Up', content: 'INT, CHA' },
    ],
  },
  {
    name: 'Jester',
    icon_path: '/assets/collars/Jester_Icon.png',
    description: "You can be anything! Jesters have no limits!",
    unlock: "Beating The Rift",
    notes: [
      { label: 'Possible Stats on Level Up', content: 'ALL' },
    ],
  },
];

export default COLLAR_OBJECTS;