import type { GameObject } from "../../types";

const FIGHTER_ACTIVE_OBJECTS: GameObject[] = [
  {
    name: "1D Chess",
    icon_path: "/assets/actives/fighter/ABILITY_1D_Chess.svg",
    description: "Move toward the closest enemy. The dumber you are, the farther you move.",
    description2: "Move toward the closest enemy. The dumber you are, the farther you move. (This spell costs less.)",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "3" },
    ],
  },
  {
    name: "Assert Dominance",
    icon_path: "/assets/actives/fighter/ABILITY_Assert_Dominance.svg",
    description: "A weak melee attack. If this kills anything, you become The Alpha. If you are The Alpha, this spell deals 5 additional damage and inflicts Bruise.",
    description2: "A weak melee attack. If this kills anything, you become The Alpha and gain +2 Strength. If you are The Alpha, this spell deals 5 additional damage and inflicts Bruise.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "4" },
    ],
  },
  {
    name: "Berserk",
    icon_path: "/assets/actives/fighter/ABILITY_Berserk.svg",
    description: "Gain +5 Strength and Bruise 5. This ability becomes Berserker Dash.",
    description2: "Gain +7 Strength and Bruise 3. This ability becomes Berserker Dash+.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "4" },
    ],
  },
  {
    name: "Big Punch",
    icon_path: "/assets/actives/fighter/ABILITY_Big_Punch.svg",
    description: "A melee attack. This spell's mana cost increases by 2 each time it's cast.",
    description2: "A melee attack. This spell's mana cost increases by 1 each time it's cast.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "3" },
    ],
  },
  {
    name: "Bloodzerk",
    icon_path: "/assets/actives/fighter/ABILITY_Bloodzerk.svg",
    description: "Drop to 1 HP. Damage you deal to bleeding units has Lifesteal. This spell becomes Lacerate.",
    description2: "Drop to 1 HP. Damage you deal to bleeding units has Lifesteal. This spell becomes Lacerate+. (This spell costs 0 mana.)",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "3" },
    ],
  },
  {
    name: "Breaking Point",
    icon_path: "/assets/actives/fighter/ABILITY_Breaking_Point.svg",
    description: "Deal damage, knockback, and knockback damage equal to your Strength. Reduce this spell's mana cost by 1 each time you take damage. (Castable once per turn.)",
    description2: "Deal damage, knockback, and knockback damage equal to your Strength. Reduce this spell's mana cost by 2 each time you take damage. (Castable once per turn.)",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "15-X" },
    ],
  },
  {
    name: "Bull Rush",
    icon_path: "/assets/actives/fighter/ABILITY_Bull_Rush.svg",
    description: "Dash forward and attack with knockback.",
    description2: "Dash forward and attack with knockback. Repeat this if you hit something.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "6" },
    ],
  },
  {
    name: "Chaos Rampage",
    icon_path: "/assets/actives/fighter/ABILITY_Chaos_Rampage.svg",
    description: "Take an extra turn. You have Madness 1 and Confusion 1 on that turn. (This spell can't be cast on extra turns.)",
    description2: "Take an extra turn. You have Madness 1 on that turn. (This spell can't be cast on extra turns.)",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "3" },
    ],
  },
  {
    name: "Confront",
    icon_path: "/assets/actives/fighter/ABILITY_Confront.svg",
    description: "Move in front of an enemy.",
    description2: "Move in front of an enemy. Your next action has +30% critical chance. (This spell costs less.)",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "7" },
    ],
  },
  {
    name: "Cosmic Punch",
    icon_path: "/assets/actives/fighter/ABILITY_Cosmic_Punch.svg",
    description: "Punch a unit into SPACE! They will fall back down at the end of the round.",
    description2: "Punch a unit into SPACE! They will fall back down at the end of the round. (This spell costs less.)",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "5" },
    ],
  },
  {
    name: "Counter",
    icon_path: "/assets/actives/fighter/ABILITY_Counter.svg",
    description: "Counterattack all attacks until your next turn.",
    description2: "Preemptively counterattack all attacks until your next turn.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "6" },
    ],
  },
  {
    name: "Enrage",
    icon_path: "/assets/actives/fighter/ABILITY_Enrage.svg",
    description: "Give a unit +4 Strength and Confusion 2.",
    description2: "Give a unit on any tile +4 Strength and Confusion 2.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "3" },
    ],
  },
  {
    name: "Exert",
    icon_path: "/assets/actives/fighter/ABILITY_Exert.svg",
    description: "Refresh your basic attack and movement action. Fall asleep at the end of the turn.",
    description2: "Refresh your basic attack and movement action. Gain +2 Strength and +4 Speed until end of turn. Fall asleep at the end of the turn.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "8" },
    ],
  },
  {
    name: "Exhausting Blow",
    icon_path: "/assets/actives/fighter/ABILITY_Exhausting_Blow.svg",
    description: "Dash forward one tile and attack with knockback. (This spell's mana cost increases by 2 at the end of each of your turns.)",
    description2: "Dash forward any number of tiles and attack with knockback. (This spell's mana cost increases by 2 at the end of each of your turns.)",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "2" },
    ],
  },
  {
    name: "Falcon Punch",
    icon_path: "/assets/actives/fighter/ABILITY_Falcon_Punch.svg",
    description: "Charge up a mega punch. (This punch will be unleashed on your next turn.) (Castable once per turn.)",
    description2: "Charge up a mega dash attack. (This punch will be unleashed on your next turn.) (Castable once per turn.)",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "2" },
    ],
  },
  {
    name: "Fire Punch",
    icon_path: "/assets/actives/fighter/ABILITY_Fire_Punch.svg",
    description: "A melee attack that inflicts Burn 3.",
    description2: "A melee attack that inflicts more Burn the more STRENGTH you have.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "7" },
    ],
  },
  {
    name: "Flex Off",
    icon_path: "/assets/actives/fighter/ABILITY_Flex_Off.svg",
    description: "You and each allied cat gain +2 Shield and knockback adjacent units 2 tiles.",
    description2: "You and each allied cat gain +2 Shield, +2 temporary Brace, and knockback adjacent units 2 tiles.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "8" },
    ],
  },
  {
    name: "Fury Swipes",
    icon_path: "/assets/actives/fighter/ABILITY_Fury_Swipes.svg",
    description: "A weak melee attack that has a chance to hit multiple times.",
    description2: "A melee attack that has a chance to hit multiple times.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "6" },
    ],
  },
  {
    name: "Grapple",
    icon_path: "/assets/actives/fighter/ABILITY_Grapple.svg",
    description: "Immobilize an adjacent unit for as long as you remain adjacent. (This spell costs less.)",
    description2: "Immobilize an adjacent unit for as long as you remain adjacent. (This spell costs less.)",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "4" },
    ],
  },
  {
    name: "Gravity Slam",
    icon_path: "/assets/actives/fighter/ABILITY_Gravity_Slam.svg",
    description: "Jump to a tile and pull enemies toward you when you land. (This spell costs less.)",
    description2: "Jump to a tile and pull enemies toward you when you land. (This spell costs less.)",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "6" },
    ],
  },
  {
    name: "Huddle",
    icon_path: "/assets/actives/fighter/ABILITY_Huddle.svg",
    description: "You and each allied cat give adjacent units +1 Damage and +2 Speed.",
    description2: "You and each allied cat give adjacent units +1 Damage and +2 Speed. (This spell is free the first time it's cast each battle.)",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "6" },
    ],
  },
  {
    name: "Hurl",
    icon_path: "/assets/actives/fighter/ABILITY_Hurl.svg",
    description: "Toss an adjacent unit at a random unit.",
    description2: "Toss an adjacent unit at a random unit. (This spell costs less.)",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "5" },
    ],
  },
  {
    name: "Ice Punch",
    icon_path: "/assets/actives/fighter/ABILITY_Ice_Punch.svg",
    description: "A melee attack that inflicts Freeze.",
    description2: "A much stronger melee attack that inflicts Freeze.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "7" },
    ],
  },
  {
    name: "Inhale",
    icon_path: "/assets/actives/fighter/ABILITY_Inhale.svg",
    description: "Suck all units in a straight line 1 tile toward you.",
    description2: "Suck all units in a straight line 3 tiles toward you.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "3" },
    ],
  },
  {
    name: "Juiced",
    icon_path: "/assets/actives/fighter/ABILITY_Juiced.svg",
    description: "Your movement range is doubled until the end of the turn.",
    description2: "Your movement range is doubled and you get +4 Strength until the end of the turn.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "4" },
    ],
  },
  {
    name: "Leap",
    icon_path: "/assets/actives/fighter/ABILITY_Leap.svg",
    description: "Jump to an open tile within range, then inflict Bruise on all adjacent units.",
    description2: "Jump to an open tile within range, then damage and inflict Bruise on all adjacent units.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "6" },
    ],
  },
  {
    name: "Meteor Slam",
    icon_path: "/assets/actives/fighter/ABILITY_Meteor_Slam.svg",
    description: "Jump up to 2 tiles. Damage, knockback, and inflict Burn 3 on the unit you land on and all adjacent units. (Adjacent units take half damage.)",
    description2: "Jump up to 5 tiles. Damage, knockback, and inflict Burn 3 on the unit you land on and all adjacent units.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "10" },
    ],
  },
  {
    name: "Mock",
    icon_path: "/assets/actives/fighter/ABILITY_Mock.svg",
    description: "Force a unit to move towards you. RELOAD: Kill something.",
    description2: "Force a unit to move towards you. RELOAD: Kill something. Bonus Ability: Slap.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "0" },
    ],
  },
  {
    name: "Muscle Memory",
    icon_path: "/assets/actives/fighter/ABILITY_Muscle_Memory.svg",
    description: "A melee attack that deals 8 damage. (This spell's damage is reduced by 1 and mana cost is reduced by 2 each time it's cast.)",
    description2: "A melee attack that deals 8 damage and inflicts Bruise. (This spell's damage is reduced by 1 and mana cost is reduced by 2 each time it's cast.)",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "max(8-2·X, 0)" },
    ],
  },
  {
    name: "Nip",
    icon_path: "/assets/actives/fighter/ABILITY_Nip.svg",
    description: "Inflict Bruise on a unit.",
    description2: "Deal 1 damage and inflict Bruise on a unit.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "2" },
    ],
  },
  {
    name: "One-Two Punch",
    icon_path: "/assets/actives/fighter/ABILITY_One-Two_Punch.svg",
    description: "A melee attack that hits twice. Each punch inflicts Bruise 1.",
    description2: "A melee attack that hits thrice! Each punch inflicts Bruise 1.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "8" },
    ],
  },
  {
    name: "Paw Breaker",
    icon_path: "/assets/actives/fighter/ABILITY_Paw_Breaker.svg",
    description: "A huge punch that breaks your paw... (You get -1 Strength permanently.)",
    description2: "A huge punch that inflicts Bruise and Stun, and breaks your paw... (You get -1 Strength permanently.)",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "5" },
    ],
  },
  {
    name: "Poke",
    icon_path: "/assets/actives/fighter/ABILITY_Poke.svg",
    description: "A melee attack that deals 1 damage.",
    description2: "A melee attack that deals 1 damage. (This spell costs less.)",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "2" },
    ],
  },
  {
    name: "Push",
    icon_path: "/assets/actives/fighter/ABILITY_Push.svg",
    description: "Knockback a unit 2 tiles.",
    description2: "Turn an adjacent unit around and knock it back 2 tiles.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "2" },
    ],
  },
  {
    name: "Rage Punch",
    icon_path: "/assets/actives/fighter/ABILITY_Rage_Punch.svg",
    description: "A melee attack that increases its damage by 1 each time you take damage.",
    description2: "A melee attack that increases its damage by 1 each time you take damage. (This spell starts at 5 damage.)",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "4" },
    ],
  },
  {
    name: "Ram",
    icon_path: "/assets/actives/fighter/ABILITY_Ram.svg",
    description: "Knock back a unit 4 tiles, then dash forward and attack it.",
    description2: "Knock back a unit 10 tiles, then dash forward and attack it.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "6" },
    ],
  },
  {
    name: "Side Slash",
    icon_path: "/assets/actives/fighter/ABILITY_Side_Slash.svg",
    description: "An attack that hits a half circle around you.",
    description2: "An attack that hits a half circle around you and inflicts Bruise.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "7" },
    ],
  },
  {
    name: "Sleeper Hold",
    icon_path: "/assets/actives/fighter/ABILITY_Sleeper_Hold.svg",
    description: "Inflict Sleep on an adjacent unit.",
    description2: "Inflict Sleep and Bruise on an adjacent unit.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "5" },
    ],
  },
  {
    name: "Spin",
    icon_path: "/assets/actives/fighter/ABILITY_Spin.svg",
    description: "Attack everything around you 3 times.",
    description2: "Attack everything around you in a wide area 3 times.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "6" },
    ],
  },
  {
    name: "Stick!",
    icon_path: "/assets/actives/fighter/ABILITY_Stick-.svg",
    description: "Equip a temporary Stick! (Your weapon slot must be empty.)",
    description2: "Equip a temporary Stick! Maybe even a big one? (Your weapon slot must be empty.) (This spell costs less.)",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "5" },
    ],
  },
  {
    name: "Stoopzerk",
    icon_path: "/assets/actives/fighter/ABILITY_Stoopzerk.svg",
    description: "Your INTELLIGENCE becomes 0. You can attack an extra time each turn for the rest of the battle. This ability becomes MORE ANGRIER!!!",
    description2: "Your INTELLIGENCE becomes 0. You can attack an extra time each turn for the rest of the battle. This ability becomes MORE ANGRIER!!!+",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "6" },
    ],
  },
  {
    name: "Sucker Punch",
    icon_path: "/assets/actives/fighter/ABILITY_Sucker_Punch.svg",
    description: "The next time an enemy moves through an adjacent tile, cancel its movement and attack it.",
    description2: "The next time an enemy moves through an adjacent tile, cancel its movement and attack it. Bonus Passive: While it's not your turn, your basic attack inflicts Bruise 2.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "5" },
    ],
  },
  {
    name: "Synchro Spin",
    icon_path: "/assets/actives/fighter/ABILITY_Synchro_Spin.svg",
    description: "You and each allied cat do a spin attack at the same time.",
    description2: "You and each allied cat do a spin attack at the same time. (This spell costs less.)",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "8" },
    ],
  },
  {
    name: "Tail Whip",
    icon_path: "/assets/actives/fighter/ABILITY_Tail_Whip.svg",
    description: "An attack that hits 2 tiles in front of and behind you.",
    description2: "An attack that hits 4 tiles in front of and behind you.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "6" },
    ],
  },
  {
    name: "Taunt!",
    icon_path: "/assets/actives/fighter/ABILITY_Taunt-.svg",
    description: "All enemies within 3 tiles move toward you.",
    description2: "All enemies within 5 tiles move toward you.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "4" },
    ],
  },
  {
    name: "Think Too Hard",
    icon_path: "/assets/actives/fighter/ABILITY_Think_Too_Hard.svg",
    description: "Take damage equal to your Intelligence. The next spell you cast this turn is free.",
    description2: "Take damage equal to your Intelligence, then your Intelligence becomes 0. The next spell you cast this turn is free.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "2" },
    ],
  },
  {
    name: "Thunder Punch",
    icon_path: "/assets/actives/fighter/ABILITY_Thunder_Punch.svg",
    description: "A melee attack that has a 25% chance to inflict Stun.",
    description2: "A melee attack that inflicts Stun.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "7" },
    ],
  },
  {
    name: "Tumble",
    icon_path: "/assets/actives/fighter/ABILITY_Tumble.svg",
    description: "Move one tile diagonally.",
    description2: "Move two tiles diagonally.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "2" },
    ],
  },
  {
    name: "Uppercut",
    icon_path: "/assets/actives/fighter/ABILITY_Uppercut.svg",
    description: "Punch a unit into the air, lobbing it back 3 tiles.",
    description2: "Punch a unit into the air, lobbing it back 3 tiles. Refresh your movement action.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "7" },
    ],
  },
  {
    name: "Zoomzerk",
    icon_path: "/assets/actives/fighter/ABILITY_Zoomzerk.svg",
    description: "Your movement action becomes a dash attack. This ability becomes Reposition.",
    description2: "Your movement action becomes a dash attack. Restore all your mana. This ability becomes Reposition+.",
    notes: [
      { label: "Class", content: "Fighter" },
      { label: "Mana Cost", content: "0" },
    ],
  },
];

export default FIGHTER_ACTIVE_OBJECTS;