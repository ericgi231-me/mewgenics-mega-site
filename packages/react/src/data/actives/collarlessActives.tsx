import type { GameObject } from "../../types";

const COLLARLESS_ACTIVE_OBJECTS: GameObject[] = [
  {
    name: "Reach",
    icon_path: "/assets/actives/collarless/ABILITY_Reach.svg",
    description: "Your next basic attack has +1 range.",
    description2: "Your next basic attack has +3 range.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "4 MP" },
    ],
  },
  {
    name: "Path of the Fighter",
    icon_path: "/assets/actives/collarless/ABILITY_Path_of_the_Fighter.svg",
    description: "Your INTELLIGENCE becomes 0 until the end of the battle, then this spell becomes a random Fighter spell permanently.",
    description2: "Transform this spell into a random upgraded Fighter spell permanently.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "0 MP" },
    ],
    unlock: "Complete The Core with the Fighter"
  },
  {
    name: "Meow",
    icon_path: "/assets/actives/collarless/ABILITY_Meow.svg",
    description: "Your closest ally moves toward you.",
    description2: "A target ally moves toward you.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "2 MP" },
    ],
  },
  {
    name: "Landscape",
    icon_path: "/assets/actives/collarless/ABILITY_Landscape.svg",
    description: "Turn an adjacent tile into a small grass tile.",
    description2: "Turn any tile into a small grass tile.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "1 MP" },
    ],
  },
  {
    name: "Sudden Affliction",
    icon_path: "/assets/actives/collarless/ABILITY_Sudden_Affliction.svg",
    description: "Trigger the Poison, Bleed, and Burn effects on a unit.",
    description2: "Trigger the Poison, Bleed, and Burn effects on a unit. If that unit isn't Poisoned, Bleeding, or Burning, they gain 1 of each.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "6 MP" },
    ],
  },
  {
    name: "Path of the Tank",
    icon_path: "/assets/actives/collarless/ABILITY_Path_of_the_Tank.svg",
    description: "Transform this spell into a random Tank spell permanently. Castable only if you have 5 or less health.",
    description2: "Transform this spell into a random upgraded Tank spell permanently.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "0 MP" },
    ],
    unlock: "Complete The Core with the Tank"
  },
  {
    name: "Path of the Mage",
    icon_path: "/assets/actives/collarless/ABILITY_Path_of_the_Mage.svg",
    description: "Transform this spell into a random Mage spell permanently.",
    description2: "Transform this spell into a random upgraded Mage spell permanently.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "12 MP" },
    ],
    unlock: "Complete The Core with the Mage"
  },
  {
    name: "Steam Roller",
    icon_path: "/assets/actives/collarless/ABILITY_Steam_Roller.svg",
    description: "Trample over 1 tile.",
    description2: "Trample over 3 tiles.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "4 MP" },
    ],
  },
  {
    name: "Dart",
    icon_path: "/assets/actives/collarless/ABILITY_Dart.svg",
    description: "Throw a nail that ignores shield.",
    description2: "Throw a stronger nail that ignores shield. (This spell costs less.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "5 MP" },
    ],
  },
  {
    name: "Copycat",
    icon_path: "/assets/actives/collarless/ABILITY_Copycat.svg",
    description: "This spell is a copy of the most recent spell an allied cat cast.",
    description2: "This spell is an upgraded copy of the most recent spell an allied cat cast.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "5 MP" },
    ],
  },
  {
    name: "Path of the Psychic",
    icon_path: "/assets/actives/collarless/ABILITY_Path_of_the_Psychic.svg",
    description: "This spell becomes a random Psychic spell permanently. Castable only if you have full mana.",
    description2: "Transform this spell into a random upgraded Psychic spell permanently.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "0 MP" },
    ],
    unlock: "Complete The Core with the Psychic"
  },
  {
    name: "Russian Shorthair Roulette",
    icon_path: "/assets/actives/collarless/ABILITY_Russian_Shorthair_Roulette.svg",
    description: "There is a 1 in 6 chance this will kill you. If it doesn't, gain +1 to a random stat and 1-2 coins.",
    description2: "There is a 1 in 6 chance this will kill you. If it doesn't, gain +2 to a random stat and 2-4 coins.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "2 MP" },
    ],
  },
  {
    name: "Invert",
    icon_path: "/assets/actives/collarless/ABILITY_Invert.svg",
    description: "Swap your highest and lowest stats. (Ties are chosen at random)",
    description2: "Swap a unit's highest and lowest stats. (Ties are chosen at random)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "2 MP" },
    ],
  },
  {
    name: "Shift",
    icon_path: "/assets/actives/collarless/ABILITY_Shift.svg",
    description: "Swap positions with an adjacent unit. (Castable once per turn.)",
    description2: "Swap positions with any unit. (Castable once per turn.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "0 MP" },
    ],
  },
  {
    name: "Borrow Mana",
    icon_path: "/assets/actives/collarless/ABILITY_Borrow_Mana.svg",
    description: "Steal up to 5 mana from an ally. (Castable once per turn.)",
    description2: "Steal all of an ally's mana. (Castable once per turn.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "0 MP" },
    ],
  },
  {
    name: "Reflect",
    icon_path: "/assets/actives/collarless/ABILITY_Reflect.svg",
    description: "Reflect the next projectile that hits you back at the attacker.",
    description2: "You or another unit reflects the next projectile that hits them back at the attacker.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "6 MP" },
    ],
  },
  {
    name: "Hose Off",
    icon_path: "/assets/actives/collarless/ABILITY_Hose_Off.svg",
    description: "Spray a unit with water, cleansing its debuffs and making a puddle. (Castable once per battle.)",
    description2: "Spray a unit with water, cleansing its debuffs and making a puddle. (This spell costs 0 mana. Castable once per battle.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "5 MP" },
    ],
  },
  {
    name: "Spit",
    icon_path: "/assets/actives/collarless/ABILITY_Spit.svg",
    description: "Spit attack with infinite range that deals 1 damage.",
    description2: "Spit attack with infinite range that deals 2 damage in an area.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "4 MP" },
    ],
  },
  {
    name: "Make a Wish",
    icon_path: "/assets/actives/collarless/ABILITY_Make_a_Wish.svg",
    description: "Spend a coin to spawn a random pickup on a random tile. (Castable once per turn.)",
    description2: "Spend a coin to spawn a random pickup on an empty tile of your choice. (Castable once per turn.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "0 MP" },
    ],
  },
  {
    name: "Hire Hitman",
    icon_path: "/assets/actives/collarless/ABILITY_Hire_Hitman.svg",
    description: "Spend 7 coins, summon a Bounty Hunter. (Castable once per turn.)",
    description2: "Spend 7 coins, summon a Bounty Hunter with 2 All Stats Up. (Castable once per turn.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "0 MP" },
    ],
  },
  {
    name: "Subway Ride",
    icon_path: "/assets/actives/collarless/ABILITY_Subway_Ride.svg",
    description: "Spend 5 coins, teleport to any tile. (Castable once per turn.)",
    description2: "Spend 2 coins, teleport to any tile. (Castable once per turn.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "0 MP" },
    ],
  },
  {
    name: "Vet Visit",
    icon_path: "/assets/actives/collarless/ABILITY_Vet_Visit.svg",
    description: "Spend 5 coins, heal 10 HP. (Castable once per turn.)",
    description2: "Spend 5 coins, heal 15 HP. (Castable once per turn.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "0 MP" },
    ],
  },
  {
    name: "Gym Membership",
    icon_path: "/assets/actives/collarless/ABILITY_Gym_Membership.svg",
    description: "Spend 5 coins, gain All Stats Up. (Castable once per turn.)",
    description2: "Spend 5 coins, gain All Stats Up and refresh your basic attack and movement actions. (Castable once per turn.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "0 MP" },
    ],
  },
  {
    name: "Buy Catnip",
    icon_path: "/assets/actives/collarless/ABILITY_Buy_Catnip.svg",
    description: "Spend 5 coins, gain 10 mana. (Castable once per turn.)",
    description2: "Spend 5 coins, gain 15 mana. (Castable once per turn.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "0 MP" },
    ],
  },
  {
    name: "Randomize",
    icon_path: "/assets/actives/collarless/ABILITY_Randomize.svg",
    description: "Spawn a random tile anywhere.",
    description2: "Tiles in an area become random tiles.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "2 MP" },
    ],
  },
  {
    name: "Dump",
    icon_path: "/assets/actives/collarless/ABILITY_Dump.svg",
    description: "Spawn a poop on an adjacent tile.",
    description2: "Spawn a poop on an adjacent tile. Inflict Poison 3 and a 15% chance to Stun if you poop on a unit.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "3 MP" },
    ],
  },
  {
    name: "Super Crate Box",
    icon_path: "/assets/actives/collarless/ABILITY_Super_Crate_Box.svg",
    description: "Spawn a crate on an adjacent tile.",
    description2: "Spawn a crate within range 5.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "4 MP" },
    ],
  },
  {
    name: "BBQ",
    icon_path: "/assets/actives/collarless/ABILITY_BBQ.svg",
    description: "Spawn a cooked meat pickup.",
    description2: "Spawn a big cooked meat pickup.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "5 MP" },
    ],
  },
  {
    name: "Number One",
    icon_path: "/assets/actives/collarless/ABILITY_Number_One.svg",
    description: "Spawn 'water' tiles in an area around yourself.",
    description2: "Spawn 'water' tiles in a larger area around yourself.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "2 MP" },
    ],
  },
  {
    name: "Wet Hairball",
    icon_path: "/assets/actives/collarless/ABILITY_Wet_Hairball.svg",
    description: "Shoot a Wet hairball that deals damage in an area.",
    description2: "Shoot a Wet hairball that deals more damage in an area.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "7 MP" },
    ],
  },
  {
    name: "Slip Through",
    icon_path: "/assets/actives/collarless/ABILITY_Slip_Through.svg",
    description: "Roll up to two tiles in a diagonal line.",
    description2: "Roll any number of tiles in a diagonal line.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "4 MP" },
    ],
  },
  {
    name: "Roll",
    icon_path: "/assets/actives/collarless/ABILITY_Roll.svg",
    description: "Roll up to three tiles in a straight line.",
    description2: "Roll up to ten tiles in a straight line.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "4 MP" },
    ],
  },
  {
    name: "CPR",
    icon_path: "/assets/actives/collarless/ABILITY_CPR.svg",
    description: "Revive an adjacent body to 1 HP.",
    description2: "Revive an adjacent body to 5 HP. (This spell costs less.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "6 MP" },
    ],
  },
  {
    name: "Cat Nap",
    icon_path: "/assets/actives/collarless/ABILITY_Cat_Nap.svg",
    description: "Remove all of your debuffs, then fall asleep.",
    description2: "Remove all of your debuffs, gain All Stats Up, then fall asleep.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "2 MP" },
    ],
  },
  {
    name: "Purr",
    icon_path: "/assets/actives/collarless/ABILITY_Purr.svg",
    description: "Remove 1 stack of a random debuff from yourself and all adjacent units.",
    description2: "Remove 1 stack of a random debuff from and heal 1 HP to yourself and all adjacent units.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "4 MP" },
    ],
  },
  {
    name: "Second Wind",
    icon_path: "/assets/actives/collarless/ABILITY_Second_Wind.svg",
    description: "Refresh your basic attack, movement, weapon, and trinket action. (Castable once per battle.)",
    description2: "Refresh your basic attack, movement, weapon, and trinket action. (This spell costs 0 mana. Castable once per battle.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "8 MP" },
    ],
  },
  {
    name: "Brainstorm",
    icon_path: "/assets/actives/collarless/ABILITY_Brainstorm.svg",
    description: "Reduce the costs of your other spells by 1 mana.",
    description2: "Reduce the cost of ALL of your spells by 1 mana.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "7 MP" },
    ],
  },
  {
    name: "Minihook",
    icon_path: "/assets/actives/collarless/ABILITY_Minihook.svg",
    description: "Pull a unit towards you.",
    description2: "Pull a unit towards you. Deal 1 damage and inflict 1 Bleed on them.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "3 MP" },
    ],
  },
  {
    name: "Magnet",
    icon_path: "/assets/actives/collarless/ABILITY_Magnet.svg",
    description: "Pull a pickup one tile toward you. (Castable once per turn.)",
    description2: "Pull a pickup all the way toward you. (Castable once per turn)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "0 MP" },
    ],
  },
  {
    name: "Path of the Druid",
    icon_path: "/assets/actives/collarless/ABILITY_Path_of_the_Druid.svg",
    description: "Plant flowers on the tile you're standing on, then this spell becomes a random Druid spell permanently. Castable only if you're standing on a grass tile.",
    description2: "Transform this spell into a random upgraded Druid spell permanently.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "2 MP" },
    ],
    unlock: "Complete The Core with the Druid"
  },
  {
    name: "Step",
    icon_path: "/assets/actives/collarless/ABILITY_Step.svg",
    description: "Move one tile. (Castable once per turn.)",
    description2: "Move two tiles. (Castable once per turn.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "0 MP" },
    ],
  },
  {
    name: "Butt Scoot",
    icon_path: "/assets/actives/collarless/ABILITY_Butt_Scoot.svg",
    description: "Move 1 tile, leaving a maggot familiar behind you.",
    description2: "Move up to 3 tiles, leaving a maggot familiar behind you.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "4 MP" },
    ],
  },
  {
    name: "Swat",
    icon_path: "/assets/actives/collarless/ABILITY_Swat.svg",
    description: "Knockback a unit 3 tiles.",
    description2: "Knockback a unit 10 tiles. (This spell costs less.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "3 MP" },
    ],
  },
  {
    name: "Knead",
    icon_path: "/assets/actives/collarless/ABILITY_Knead.svg",
    description: "Knead another unit. Allies gain +1 Damage, enemies gain Weakness 1.",
    description2: "Knead another unit. Allies gain +2 Damage, enemies gain Weakness 2.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "5 MP" },
    ],
  },
  {
    name: "Sunburn",
    icon_path: "/assets/actives/collarless/ABILITY_Sunburn.svg",
    description: "Inflicts Burn 1 and Blind 1 at infinite range.",
    description2: "Inflict Burn 1 and Blind 1 in an area at infinite range.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "6 MP" },
    ],
  },
  {
    name: "Toast",
    icon_path: "/assets/actives/collarless/ABILITY_Toast.svg",
    description: "Inflict Burn 1 on an adjacent unit.",
    description2: "Inflict Burn 1 on a unit in range 5.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "3 MP" },
    ],
  },
  {
    name: "Confusion",
    icon_path: "/assets/actives/collarless/ABILITY_Confusion.svg",
    description: "Inflict 2 Confusion on a unit.",
    description2: "Inflict 4 Confusion on units in an area.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "5 MP" },
    ],
  },
  {
    name: "Nerf",
    icon_path: "/assets/actives/collarless/ABILITY_Nerf.svg",
    description: "Inflict -1 Damage on a unit.",
    description2: "Inflict -1 Damage and -1 Constitution on a unit.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "4 MP" },
    ],
  },
  {
    name: "Trip",
    icon_path: "/assets/actives/collarless/ABILITY_Trip.svg",
    description: "Immobilize an adjacent unit. This only has a 25% chance to work on boss units and large enemies.",
    description2: "Immobilize a unit in range 4. This only has a 25% chance to work on boss units and large enemies.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "4 MP" },
    ],
  },
  {
    name: "Hop",
    icon_path: "/assets/actives/collarless/ABILITY_Hop.svg",
    description: "Hop up to 2 tiles away.",
    description2: "Hop up to 4 tiles away.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "3 MP" },
    ],
  },
  {
    name: "Snacks",
    icon_path: "/assets/actives/collarless/ABILITY_Snacks.svg",
    description: "Heal yourself or another unit within four tiles 1 HP.",
    description2: "Heal yourself or another unit 1 HP. 50% chance to also give +1 Constitution.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "3 MP" },
    ],
  },
  {
    name: "Shrug It Off",
    icon_path: "/assets/actives/collarless/ABILITY_Shrug_It_Off.svg",
    description: "Heal yourself HP equal to half your STRENGTH, rounded up.",
    description2: "Heal yourself HP equal to half your STRENGTH, rounded up. (This spell costs less.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "3 MP" },
    ],
  },
  {
    name: "Soothing Glow",
    icon_path: "/assets/actives/collarless/ABILITY_Soothing_Glow.svg",
    description: "Heal yourself 1.",
    description2: "Heal yourself 1 and gain +1 to a random stat.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "2 MP" },
    ],
  },
  {
    name: "Rest",
    icon_path: "/assets/actives/collarless/ABILITY_Rest.svg",
    description: "Heal some HP, then fall asleep.",
    description2: "Heal a lot of HP, then fall asleep.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "2 MP" },
    ],
  },
  {
    name: "Blow Kiss",
    icon_path: "/assets/actives/collarless/ABILITY_Blow_Kiss.svg",
    description: "Heal another unit by 1 HP at infinite range.",
    description2: "Heal another unit by 2 HP at infinite range.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "4 MP" },
    ],
  },
  {
    name: "Lick",
    icon_path: "/assets/actives/collarless/ABILITY_Lick.svg",
    description: "Heal an adjacent unit by 2 HP.",
    description2: "Heal an adjacent unit by 2 HP. Healed enemies gain Confusion 3.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "4 MP" },
    ],
  },
  {
    name: "Path of the Cleric",
    icon_path: "/assets/actives/collarless/ABILITY_Path_of_the_Cleric.svg",
    description: "Give an enemy All Stats Up and fully heal it, then this spell becomes a random Cleric spell permanently.",
    description2: "Transform this spell into a random upgraded Cleric spell permanently.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "0 MP" },
    ],
    unlock: "Complete The Core with the Cleric"
  },
  {
    name: "Rouse",
    icon_path: "/assets/actives/collarless/ABILITY_Rouse.svg",
    description: "Give an adjacent unit +2 Charge. (Castable once per turn.)",
    description2: "Give any unit +2 Charge. (Castable once per turn.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "0 MP" },
    ],
  },
  {
    name: "Path of the Monk",
    icon_path: "/assets/actives/collarless/ABILITY_Path_of_the_Monk.svg",
    description: "Gain All Stats Down, then this spell becomes a random Monk spell permanently.",
    description2: "This spell becomes a random upgraded Monk spell permanently.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "0 MP" },
    ],
    unlock: "Complete The Core with the Monk"
  },
  {
    name: "Path of the Jester",
    icon_path: "/assets/actives/collarless/ABILITY_Path_of_the_Jester.svg",
    description: "Gain 10 random stat ups and 5 random stat downs, then transform this spell into a random class spell permanently.",
    description2: "Gain 10 random stat ups, then transform this spell into a random upgraded class spell permanently.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "0 MP" },
    ],
    unlock: "Complete The Core with the Jester"
  },
  {
    name: "Burgeoning Barrier",
    icon_path: "/assets/actives/collarless/ABILITY_Burgeoning_Barrier.svg",
    description: "Gain 0 Shield. Increase this spell's Shield by 2 at the end of each turn. (Castable once per battle.)",
    description2: "Gain 0 Shield. Increase this spell's Shield by 3 at the end of each turn. (Castable once per battle.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "0 MP" },
    ],
  },
  {
    name: "Burgeoning Battery",
    icon_path: "/assets/actives/collarless/ABILITY_Burgeoning_Battery.svg",
    description: "Gain 0 mana. Increase this spell's mana gain by 2 at the end of each turn. (Castable once per battle.)",
    description2: "Gain 0 mana. Increase this spell's mana gain by 3 at the end of each turn. (Castable once per battle.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "0 MP" },
    ],
  },
  {
    name: "Reduce",
    icon_path: "/assets/actives/collarless/ABILITY_Reduce.svg",
    description: "Gain +20% Dodge Chance, +4 Speed, and -2 Damage. (Castable once per battle.)",
    description2: "Gain +20% Dodge Chance, +4 Speed, and -2 Damage. (This spell costs 0 mana. Castable once per battle.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "5 MP" },
    ],
  },
  {
    name: "Gamble",
    icon_path: "/assets/actives/collarless/ABILITY_Gamble.svg",
    description: "Gain +2% critical hit chance. If your next attack is critical, deal +100% more damage and spawn coins.",
    description2: "Gain +2% critical hit chance. If your next attack is critical, deal +200% more damage and spawn more coins.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "2 MP" },
    ],
  },
  {
    name: "Block",
    icon_path: "/assets/actives/collarless/ABILITY_Block.svg",
    description: "Gain +2 Shield.",
    description2: "Gain +5 Shield.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "5 MP" },
    ],
  },
  {
    name: "Claws Out",
    icon_path: "/assets/actives/collarless/ABILITY_Claws_Out.svg",
    description: "Gain +1 Thorns.",
    description2: "Gain +1 Thorns. (This spell costs less.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "4 MP" },
    ],
  },
  {
    name: "Flex",
    icon_path: "/assets/actives/collarless/ABILITY_Flex.svg",
    description: "Gain +1 temporary Brace until your next turn and deal 1 knockback to each adjacent unit.",
    description2: "Gain +1 temporary Brace until your next turn and deal 3 knockback to each adjacent unit. (This spell costs less.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "5 MP" },
    ],
  },
  {
    name: "Brace",
    icon_path: "/assets/actives/collarless/ABILITY_Brace.svg",
    description: "Gain +1 temporary Brace until your next turn.",
    description2: "Gain +1 temporary Brace and +1 temporary Thorns until your next turn.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "3 MP" },
    ],
  },
  {
    name: "Sharpen Claws",
    icon_path: "/assets/actives/collarless/ABILITY_Sharpen_Claws.svg",
    description: "Gain +1 Strength.",
    description2: "Gain +1 Strength. Bonus Passive: Your basic attack inflicts Bleed.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "4 MP" },
    ],
  },
  {
    name: "Feather Feet",
    icon_path: "/assets/actives/collarless/ABILITY_Feather_Feet.svg",
    description: "Gain +1 Speed.",
    description2: "Gain +1 Speed. Bonus Passive: You're unaffected by tile effects.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "4 MP" },
    ],
  },
  {
    name: "Boost",
    icon_path: "/assets/actives/collarless/ABILITY_Boost.svg",
    description: "Gain +1 Magic Damage until end of turn.",
    description2: "Gain +1 Magic Damage until end of turn. (This spell costs less.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "3 MP" },
    ],
  },
  {
    name: "Stack the Deck",
    icon_path: "/assets/actives/collarless/ABILITY_Stack_the_Deck.svg",
    description: "Gain +1 Luck.",
    description2: "Gain +1 Luck. You have +99 Luck during your next action.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "4 MP" },
    ],
  },
  {
    name: "Ponder",
    icon_path: "/assets/actives/collarless/ABILITY_Ponder.svg",
    description: "Gain +1 Intelligence.",
    description2: "Gain +1 Intelligence and conjure a random bonus ability.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "4 MP" },
    ],
  },
  {
    name: "Focus",
    icon_path: "/assets/actives/collarless/ABILITY_Focus.svg",
    description: "Gain +1 Dexterity.",
    description2: "Gain +1 Dexterity. Bonus Passive: +25% critical hit chance.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "4 MP" },
    ],
  },
  {
    name: "Metabolize",
    icon_path: "/assets/actives/collarless/ABILITY_Metabolize.svg",
    description: "Gain +1 Constitution.",
    description2: "Gain +1 Constitution. Bonus Passive: +3 Health Regeneration.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "3 MP" },
    ],
  },
  {
    name: "Doll Up",
    icon_path: "/assets/actives/collarless/ABILITY_Doll_Up.svg",
    description: "Gain +1 Charisma.",
    description2: "Gain +1 Charisma. Bonus Passive: You have a chance to inflict Charm on units that contact or attack you. This chance increases with your Charisma.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "2 MP" },
    ],
  },
  {
    name: "Burst",
    icon_path: "/assets/actives/collarless/ABILITY_Burst.svg",
    description: "Fire a magical blast. (Castable once per battle.)",
    description2: "Fire a magical blast. (This spell costs 0 mana. Castable once per battle.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "7 MP" },
    ],
  },
  {
    name: "Interchange",
    icon_path: "/assets/actives/collarless/ABILITY_Interchange.svg",
    description: "Exchange your movement action for an additional basic attack, and vice versa.",
    description2: "Exchange your movement action for an additional basic attack, and vice versa. (This spell costs 0 mana the first time you cast it each turn.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "3 MP" },
    ],
  },
  {
    name: "Look at me!",
    icon_path: "/assets/actives/collarless/ABILITY_Look_at_me-.svg",
    description: "Each unit turns to face you.",
    description2: "Each unit turns to face you. 20% chance to Confuse enemies.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "2 MP" },
    ],
  },
  {
    name: "Play Dead",
    icon_path: "/assets/actives/collarless/ABILITY_Play_Dead.svg",
    description: "Down yourself. You don't get injured.",
    description2: "Down yourself. You don't get injured. Revive at the end of the next round at full HP.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "0 MP" },
    ],
  },
  {
    name: "Proliferate",
    icon_path: "/assets/actives/collarless/ABILITY_Proliferate.svg",
    description: "Double a unit's Poison, Bleed, and Burn. (Castable once per battle.)",
    description2: "Double a unit's Poison, Bleed, and Burn. (This spell costs 0 mana. Castable once per battle.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "8 MP" },
    ],
  },
  {
    name: "Waste Time",
    icon_path: "/assets/actives/collarless/ABILITY_Waste_Time.svg",
    description: "Do nothing.",
    description2: "Gain 1 Charge.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "1 MP" },
    ],
  },
  {
    name: "Find a Rock",
    icon_path: "/assets/actives/collarless/ABILITY_Find_a_Rock.svg",
    description: "Dig up a small rock.",
    description2: "Dig up a small rock. (This spell costs less.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "4 MP" },
    ],
  },
  {
    name: "Tunnel",
    icon_path: "/assets/actives/collarless/ABILITY_Tunnel.svg",
    description: "Dig to any open tile. (Castable once per battle.)",
    description2: "Dig to any open tile. (Castable once per battle. This spell costs 0 mana.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "3 MP" },
    ],
  },
  {
    name: "Path of the Tinkerer",
    icon_path: "/assets/actives/collarless/ABILITY_Path_of_the_Tinkerer.svg",
    description: "Destroy your weapon, then this spell becomes a random Tinkerer spell permanently.",
    description2: "Transform this spell into a random upgraded Tinkerer spell permanently.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "0 MP" },
    ],
    unlock: "Complete The Core with the Tinkerer"
  },
  {
    name: "Path of the Necromancer",
    icon_path: "/assets/actives/collarless/ABILITY_Path_of_the_Necromancer.svg",
    description: "Destroy a corpse, then this spell becomes a random Necromancer spell permanently.",
    description2: "Transform this spell into a random Necromancer spell permanently.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "0 MP" },
    ],
    unlock: "Complete The Core with the Necromancer"
  },
  {
    name: "Desecrate",
    icon_path: "/assets/actives/collarless/ABILITY_Desecrate.svg",
    description: "Destroy a body.",
    description2: "Destroy a body and gain 2 mana.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "0 MP" },
    ],
  },
  {
    name: "Cold Shoulder",
    icon_path: "/assets/actives/collarless/ABILITY_Cold_Shoulder.svg",
    description: "Deal 1 ice damage and inflict Slow 1 at infinite range.",
    description2: "Deal 1 ice damage and inflict Slow 1 at infinite range. (This spell costs less.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "6 MP" },
    ],
  },
  {
    name: "Zap",
    icon_path: "/assets/actives/collarless/ABILITY_Zap.svg",
    description: "Deal 1 electric damage at infinite range.",
    description2: "Deal 1 electric damage with a 25% chance to Stun at infinite range.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "4 MP" },
    ],
  },
  {
    name: "Itch",
    icon_path: "/assets/actives/collarless/ABILITY_Itch.svg",
    description: "Deal 1 damage to yourself. 50% chance to spawn a friendly flea.",
    description2: "Deal 1 damage to yourself. Spawn a friendly flea.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "3 MP" },
    ],
  },
  {
    name: "Soul Reap",
    icon_path: "/assets/actives/collarless/ABILITY_Soul_Reap.svg",
    description: "Deal 1 damage to a unit within five tiles. If this kills it, gain 5 mana.",
    description2: "Deal 1 damage to any unit. If this kills it, gain 5 mana.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "3 MP" },
    ],
  },
  {
    name: "Rat Roulette",
    icon_path: "/assets/actives/collarless/ABILITY_Rat_Roulette.svg",
    description: "Deal 1 damage to a random unit. If you kill that unit, take an extra turn.",
    description2: "Deal 2 damage to a random unit. If you kill that unit, take an extra turn. (This spell costs less.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "6 MP" },
    ],
  },
  {
    name: "Forbidden Fart",
    icon_path: "/assets/actives/collarless/ABILITY_Forbidden_Fart.svg",
    description: "Damage, Inflict Poison 4 and Knock Up nearby units. There will be permanent consequences for casting this spell… (Castable once per turn.)",
    description2: "Damage, Inflict Poison 6 and Knock Up nearby units in a larger area. There will be permanent consequences for casting this spell… (Castable once per turn.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "0 MP" },
    ],
  },
  {
    name: "Path Of The Void",
    icon_path: "/assets/actives/collarless/ABILITY_Path_Of_The_Void.svg",
    description: "Conjure a random Collarless spell into your bonus spell slot.",
    description2: "Conjure a random upgraded Collarless spell into your bonus spell slot.",
    unlock: "Complete The Core with a Collarless cat",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "1 MP" },
    ],
  },
  {
    name: "Path of the Butcher",
    icon_path: "/assets/actives/collarless/ABILITY_Path_of_the_Butcher.svg",
    description: "Collect an adjacent food pickup, then this spell becomes a random Butcher spell permanently.",
    description2: "Transform this spell into a random upgraded Butcher spell permanently.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "1 MP" },
    ],
    unlock: "Complete The Core with the Butcher"
  },
  {
    name: "Stun",
    icon_path: "/assets/actives/collarless/ABILITY_Stun.svg",
    description: "Chuck a rock at a unit, inflicting Stun on that unit. (Castable once per battle.)",
    description2: "Chuck a rock at a unit, inflicting Stun on that unit. (This spell costs 0 mana. Castable once per battle.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "5 MP" },
    ],
  },
  {
    name: "Metronome",
    icon_path: "/assets/actives/collarless/ABILITY_Metronome_-Ability-.svg",
    description: "Cast a random spell.",
    description2: "Cast a random upgraded spell.",
    unlock: "Complete The Caves with a Collarless cat",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "5 MP" },
    ],
  },
  {
    name: "Blow",
    icon_path: "/assets/actives/collarless/ABILITY_Blow.svg",
    description: "Blow units in a cone back 1 tile.",
    description2: "Blow units in a larger cone back 1 tile.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "4 MP" },
    ],
  },
  {
    name: "Over There!",
    icon_path: "/assets/actives/collarless/ABILITY_Over_There-.svg",
    description: "Adjacent units turn away from you.",
    description2: "Units within three tiles of you turn away from you.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "2 MP" },
    ],
  },
  {
    name: "Hiss",
    icon_path: "/assets/actives/collarless/ABILITY_Hiss.svg",
    description: "Adjacent units move away from you. You have a 25% chance to inflict Fear on them.",
    description2: "Adjacent units move away from you. Inflict Fear on them.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "6 MP" },
    ],
  },
  {
    name: "Smack",
    icon_path: "/assets/actives/collarless/ABILITY_Smack.svg",
    description: "A weak melee attack.",
    description2: "A weak melee attack with a chance to repeat.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "5 MP" },
    ],
  },
  {
    name: "Path of the Thief",
    icon_path: "/assets/actives/collarless/ABILITY_Path_of_the_Thief.svg",
    description: "A straight shot attack that deals 1 damage. If this makes a critical hit, this spell becomes a random Thief spell permanently.",
    description2: "Transform this spell into a random upgraded Thief spell permanently.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "4 MP" },
    ],
    unlock: "Complete The Core with the Thief"
  },
  {
    name: "Burgeoning Blast",
    icon_path: "/assets/actives/collarless/ABILITY_Burgeoning_Blast.svg",
    description: "A spell that deals 0 damage. Increase this spell's damage by 2 at the end of each turn. (Castable once per battle.)",
    description2: "A spell that deals 0 damage. Increase this spell's damage by 3 at the end of each turn. (Castable once per battle.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "0 MP" },
    ],
  },
  {
    name: "Hunt",
    icon_path: "/assets/actives/collarless/ABILITY_Hunt.svg",
    description: "A ranged attack that turns anything it kills into meat.",
    description2: "A stronger ranged attack that turns anything it kills into meat.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "6 MP" },
    ],
  },
  {
    name: "Barf Ball",
    icon_path: "/assets/actives/collarless/ABILITY_Barf_Ball.svg",
    description: "A ranged attack that deals damage equal to half your Constitution, rounded up.",
    description2: "A ranged attack that deals damage equal to half your Constitution, rounded up. (This spell costs less.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "6 MP" },
    ],
  },
  {
    name: "Dexterous Hit",
    icon_path: "/assets/actives/collarless/ABILITY_Dexterous_Hit.svg",
    description: "A melee attack that deals damage equal to half your Dexterity, rounded up.",
    description2: "A melee attack that deals damage equal to half your Dexterity, rounded up. (This spell costs less.)",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "6 MP" },
    ],
  },
  {
    name: "Path of the Hunter",
    icon_path: "/assets/actives/collarless/ABILITY_Path_of_the_Hunter.svg",
    description: "A lobbed attack that deals 1 damage. If this kills an enemy, this spell becomes a random Hunter spell permanently.",
    description2: "Transform this spell into a random upgraded Hunter spell permanently.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "5 MP" },
    ],
    unlock: "Complete The Core with the Hunter"
  },
  {
    name: "Healing Bolt",
    icon_path: "/assets/actives/collarless/ABILITY_Healing_Bolt.svg",
    description: "A lightning bolt that heals and has a chance to Stun.",
    description2: "A lightning bolt that heals allies and has a chance to Stun enemies.",
    notes: [
      { label: "Class", content: "Collarless" },
      { label: "Cost", content: "7 MP" },
    ],
  },
  // ...existing code...
]

export default COLLARLESS_ACTIVE_OBJECTS;