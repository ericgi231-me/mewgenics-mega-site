import type { GameObject } from "../../types";

const WEAPON_ITEM_OBJECTS: GameObject[] = [
  {
    name: ".22 Rifle",
    icon_path: "/assets/items/ITEM_-22_Rifle.svg",
    description: "Use: Fire a shot anywhere within your line of sight.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Rare" },
      { label: "Uses", content: "2-4" },
    ],
  },
  {
    name: "Air Horn",
    icon_path: "/assets/items/ITEM_Air_Horn.svg",
    description: "Side Quest Item. You are Ambushed every battle. Use to make some noise!",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Side Quest" },
    ],
  },
  {
    name: "Alien Blaster",
    icon_path: "/assets/items/ITEM_Alien_Blaster.svg",
    description: "Use: A laser attack. Gains +1 damage for the rest of the battle each time it's used.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Sets", content: "Space" },
    ],
  },
  {
    name: "Alien Tech",
    icon_path: "/assets/items/ITEM_Alien_Tech.svg",
    description: "Use: Target an area. Unleash a hyper beam attack in that area at the start of your next turn.\n(Usable once per battle.)",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Rare" },
      { label: "Sets", content: "Space" },
    ],
  },
  {
    name: "American Flag",
    icon_path: "/assets/items/ITEM_American_Flag.svg",
    description: "+1 Strength, +1 Dexterity, +1 Constitution, +1 Intelligence, +1 Speed, +1 Charisma, +1 Luck\nUse: Force a unit to attack one of its enemies.\n(Usable once per battle.)",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Rare" },
    ],
  },
  {
    name: "Amplified Air Horn",
    icon_path: "/assets/items/ITEM_Amplified_Air_Horn.svg",
    description: "Use: Apply Madness to a unit within 5 tiles in your line of sight.\n(Usable once per battle.)",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Rare" },
    ],
  },
  {
    name: "Anarchist Cookbook",
    icon_path: "/assets/items/ITEM_Anarchist_Cookbook.svg",
    description: "Use: Summon 3-5 grenades that explode at the end of the round or when destroyed.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Paper" },
    ],
  },
  {
    name: "Anointing Oil",
    icon_path: "/assets/items/ITEM_Anointing_Oil.svg",
    description: "Use: Cleanse debuffs from an adjacent unit or yourself.\n(Usable once per battle.)",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Rare" },
      { label: "Sets", content: "Cleric" },
    ],
  },
  {
    name: "Arrow of Infinity",
    icon_path: "/assets/items/ITEM_Arrow_of_Infinity.svg",
    description: "Use: Your next basic attack has +5 range, +100% Crit Chance, ignores shield and can't miss.\n(Usable once per battle.)",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Rare" },
      { label: "Sets", content: "Hunter" },
    ],
  },
  {
    name: "Bag Of Chum",
    icon_path: "/assets/items/ITEM_Bag_Of_Chum.svg",
    description: "Use: Spawn a Charmed Maggot.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Rare" },
      { label: "Sets", content: "Guts" },
    ],
  },
  {
    name: "Bag o' Glass",
    icon_path: "/assets/items/ITEM_Bag_o-_Glass.svg",
    description: "Use: Spawn Glass on an adjacent tile.\n5% chance to break when used.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Stunning" },
    ],
  },
  {
    name: "Bag o' Glitter",
    icon_path: "/assets/items/ITEM_Bag_o-_Glitter.svg",
    description: "Use: Inflict Blind 2 on an adjacent unit.\n5% chance to break when used.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Stunning" },
    ],
  },
  {
    name: "Bag o' Meat",
    icon_path: "/assets/items/ITEM_Bag_o-_Meat.svg",
    description: "Use: Spawn Meat on an adjacent tile.\n5% chance to break when used.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Meat" },
    ],
  },
  {
    name: "Bag o' Stuff",
    icon_path: "/assets/items/ITEM_Bag_o-_Stuff.svg",
    description: "Use: Spawn a random pickup on an adjacent tile.\n5% chance to break when used.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Common" },
    ],
  },
  {
    name: "Bag of Rocks",
    icon_path: "/assets/items/ITEM_Bag_of_Rocks.svg",
    description: "Use: A melee attack that inflicts Bruise.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Rare" },
      { label: "Sets", content: "Rock" },
    ],
  },
  {
    name: "Ball-Peen Hammer",
    icon_path: "/assets/items/ITEM_Ball-Peen_Hammer.svg",
    description: "Use: A melee attack. If used on an ally, give +1 use to all of their items instead of dealing damage.\n5% chance to break when used to repair items.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Rare" },
      { label: "Sets", content: "Tinkerer" },
    ],
  },
  {
    name: "Barbed Paw",
    icon_path: "/assets/items/ITEM_Barbed_Paw.svg",
    description: "-1 Constitution\nUse: A melee attack that inflicts Bleed 1.\nPassive: +1 Thorns.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Barbed" },
    ],
  },
  {
    name: "Battery",
    icon_path: "/assets/items/ITEM_Battery.svg",
    description: "Use: A ranged lightning attack with a 10% chance to Stun.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Uses", content: "3/6" },
    ],
  },
  {
    name: "Battle Axe",
    icon_path: "/assets/items/ITEM_Battle_Axe.svg",
    description: "Use: A melee spin attack.\nThis uses up both your movement and attack action.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Rare" },
      { label: "Sets", content: "Fighter" },
    ],
  },
  {
    name: "Bear Traps",
    icon_path: "/assets/items/ITEM_Bear_Traps.svg",
    description: "Use: Place a Bear Trap.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Uses", content: "6" },
      { label: "Sets", content: "Hunter,Survivalist" },
    ],
  },
  {
    name: "Bent Spoon",
    icon_path: "/assets/items/ITEM_Bent_Spoon.svg",
    description: "Use: Pull any unit 1 tile toward you and deal 1 damage to it.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Rare" },
      { label: "Sets", content: "Psychic" },
    ],
  },
  {
    name: "Big Spring",
    icon_path: "/assets/items/ITEM_Big_Spring.svg",
    description: "Use: Throw an adjacent unit to a tile.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Scrap" },
    ],
  },
  {
    name: "Big Stick",
    icon_path: "/assets/items/ITEM_Big_Stick.svg",
    description: "Use: A melee attack with +2 reach.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Uses", content: "8-12" },
      { label: "Sets", content: "Wood" },
    ],
  },
  {
    name: "Biggest Stick",
    icon_path: "/assets/items/ITEM_Biggest_Stick.svg",
    description: "Use: A melee attack with +3 reach.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Rare" },
      { label: "Uses", content: "8-12" },
      { label: "Sets", content: "Wood" },
    ],
  },
  {
    name: "Blackjack",
    icon_path: "/assets/items/ITEM_Blackjack.svg",
    description: "Use: A melee attack with a 5% chance to Stun.\nAutomatically use this when you stop next to an enemy or an enemy stops next to you.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Thief,Prowler" },
    ],
  },
  {
    name: "Black Mushroom",
    icon_path: "/assets/items/ITEM_Black_Mushroom.svg",
    description: "Use: A ranged attack that inflicts Weakness 2.\n(Usable once per battle.)",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Common" },
      { label: "Sets", content: "Druid" },
    ],
  },
  {
    name: "Black Shard",
    icon_path: "/assets/items/ITEM_Black_Shard.svg",
    description: "Use: Absorb a unit with 1 or less health to power this item up.\nTransforms after 20 absorptions.\n(Saves its power across multiple runs.)\n(Usable once per battle.)",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Quest" },
      { label: "Sets", content: "Obelisk" },
    ],
  },
  {
    name: "Blessed Anointing Oil",
    icon_path: "/assets/items/ITEM_Blessed_Anointing_Oil.svg",
    description: "Use: Cleanse debuffs and heal an adjacent unit or yourself.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Very Rare" },
      { label: "Sets", content: "Cleric" },
    ],
  },
  {
    name: "Blood Bucket",
    icon_path: "/assets/items/ITEM_Blood_Bucket.svg",
    description: "Use: A lobbed attack that creates a creep puddle.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Very Rare" },
    ],
  },
  {
    name: "Bloody Bag of Glass",
    icon_path: "/assets/items/ITEM_Bloody_Bag_of_Glass.svg",
    description: "Use: Throw a projectile that creates glass.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Very Rare" },
    ],
  },
  {
    name: "Bloody Bear Traps",
    icon_path: "/assets/items/ITEM_Bloody_Bear_Traps.svg",
    description: "Use: Place a Bear Trap.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Very Rare" },
      { label: "Sets", content: "Hunter,Survivalist" },
    ],
  },
  {
    name: "Bloody Knife",
    icon_path: "/assets/items/ITEM_Bloody_Knife.svg",
    description: "Use: A multi-hit melee attack with Lifesteal that inflicts Bleed.\n(Usable once per battle.)",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Very Rare" },
    ],
  },
  {
    name: "Bloody Meat Hook",
    icon_path: "/assets/items/ITEM_Bloody_Meat_Hook.svg",
    description: "Use: Pull a unit towards you, Cleaving and inflicting Bleed 1.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Very Rare" },
      { label: "Sets", content: "Butcher,Barbed" },
    ],
  },
  {
    name: "Bloody Soul Claw",
    icon_path: "/assets/items/ITEM_Bloody_Soul_Claw.svg",
    description: "Use: A melee attack that deals damage equal to the number of uses this has left.\nWhen this weapon kills a unit, it gains +2 uses and you heal 5 HP.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Very Rare" },
      { label: "Uses", content: "8" },
    ],
  },
  {
    name: "Bloody Spikes",
    icon_path: "/assets/items/ITEM_Bloody_Spikes.svg",
    description: "+1 Thorns.\nUse: A ranged attack.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Very Rare" },
    ],
  },
  {
    name: "Bloody Stick",
    icon_path: "/assets/items/ITEM_Bloody_Stick.svg",
    description: "+1 Health Regen.\nUse: A melee attack with +1 reach.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Very Rare" },
      { label: "Sets", content: "Wood" },
    ],
  },
  {
    name: "Bo",
    icon_path: "/assets/items/ITEM_Bo.svg",
    description: "Use: A melee attack. On hit, jump forward 2 tiles.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Rare" },
      { label: "Sets", content: "Monk,Wood" },
    ],
  },
  {
    name: "Bomb",
    icon_path: "/assets/items/ITEM_Bomb.svg",
    description: "Use: Throw a bomb that explodes.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Uses", content: "1" },
    ],
  },
  {
    name: "Bone Club",
    icon_path: "/assets/items/ITEM_Bone_Club.svg",
    description: "Use: A melee attack.\nThis weapon has a 15% chance to break each time it's used.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Uncommon" },
      { label: "Sets", content: "Bone" },
    ],
  },
  {
    name: "Book Of Belial",
    icon_path: "/assets/items/ITEM_Book_Of_Belial.svg",
    description: "Use: Gain +3 Damage.\nRELOAD: Kill an enemy.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Rare" },
      { label: "Sets", content: "Demonic,Paper" },
    ],
  },
  {
    name: "Bottles",
    icon_path: "/assets/items/ITEM_Bottles.svg",
    description: "Use: A lobbed attack that spawns a glass tile.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Common" },
      { label: "Uses", content: "6" },
    ],
  },
  {
    name: "Bottles of Blood",
    icon_path: "/assets/items/ITEM_Bottles_of_Blood.svg",
    description: "Use: A lobbed attack that creates glass tiles in an area.",
    notes: [
      { label: "Type", content: "Weapon" },
      { label: "Rarity", content: "Very Rare" },
    ],
  },
]

export default WEAPON_ITEM_OBJECTS;