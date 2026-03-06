import type { GameObject } from "../../types";

const TINKERER_PASSIVE_OBJECTS: GameObject[] = [
	{
		name: "Armor Specialist",
		icon_path: "assets/passives/tinkerer/ABILITY_Armor_Specialist.svg",
		description: "Your equipment passive effects are doubled.",
		description2: "Your equipment passive and active effects are doubled.",
    unlock: "Complete The Boneyard with the Tinkerer",
		notes: [
			{ label: "Class", content: "Tinkerer" },
		],
	},
	{
		name: "Armored Plating",
		icon_path: "assets/passives/tinkerer/ABILITY_Armored_Plating.svg",
		description: "Robots you spawn gain the stats and Shield of your equipped armor.",
		description2: "Robots you spawn gain the stats, Shield and passive effects of your equipped armor.",
		notes: [
			{ label: "Class", content: "Tinkerer" },
		],
	},
	{
		name: "Blacksmith",
		icon_path: "assets/passives/tinkerer/ABILITY_Blacksmith.svg",
		description: "If you have a weapon, your basic attack becomes Hone.",
		description2: "If you have a weapon, your basic attack becomes Hone+.",
		notes: [
			{ label: "Class", content: "Tinkerer" },
		],
	},
	{
		name: "Booby Trap",
		icon_path: "assets/passives/tinkerer/ABILITY_Booby_Trap.svg",
		description: "When an item you have equipped breaks, it explodes!",
		description2: "When an item you have equipped breaks, it explodes with bonus damage!",
		notes: [
			{ label: "Class", content: "Tinkerer" },
		],
	},
	{
		name: "Conductor",
		icon_path: "assets/passives/tinkerer/ABILITY_Conductor_-Passive-.svg",
		description: "Electric damage you deal is increased by 2 for each piece of metal armor you have equipped.",
		description2: "Electric damage you deal is increased by 2 for each piece of metal armor you have equipped. You have +2 Mana Regeneration for each piece of metal armor.",
		notes: [
			{ label: "Class", content: "Tinkerer" },
		],
	},
	{
		name: "Demo Man",
		icon_path: "assets/passives/tinkerer/ABILITY_Demo_Man.svg",
		description: "Always craft a bomb at Tech 1 or less.",
		description2: "Always craft a bomb at Tech 1 or less. You can use your basic action an additional time on each of your turns.",
		notes: [
			{ label: "Class", content: "Tinkerer" },
		],
	},
	{
		name: "Duct Tape",
		icon_path: "assets/passives/tinkerer/ABILITY_Duct_Tape.svg",
		description: "Items you craft stay with you between battles, but become cursed.",
		description2: "Items you craft stay with you between battles.",
		notes: [
			{ label: "Class", content: "Tinkerer" },
		],
	},
	{
		name: "EMP",
		icon_path: "assets/passives/tinkerer/ABILITY_EMP.svg",
		description: "Your explosions are Electric element and deal +1 damage. Instead of knockback, explosions have a chance to inflict Stun.",
		description2: "Your explosions are Electric element and deal +1 damage. Instead of knockback, explosions have a chance to inflict Stun. Your explosions don't affect allies.",
		notes: [
			{ label: "Class", content: "Tinkerer" },
		],
	},
	{
		name: "Energizer",
		icon_path: "assets/passives/tinkerer/ABILITY_Energizer.svg",
		description: "When you cast a spell, your weapon gets +1 Damage.",
		description2: "When you cast a spell, your weapon gets +1 Damage. Every third spell you cast, repair 1 use to your weapon.",
		notes: [
			{ label: "Class", content: "Tinkerer" },
		],
	},
	{
		name: "Escape Sequence",
		icon_path: "assets/passives/tinkerer/ABILITY_Escape_Sequence.svg",
		description: "When you take damage, explode and get launched to a random tile. This explosion doesn't damage you.",
		description2: "When you take damage, explode with a large blast radius and get launched to a random tile. This explosion doesn't damage you.",
		notes: [
			{ label: "Class", content: "Tinkerer" },
		],
	},
	{
		name: "Fuzzy Feet",
		icon_path: "assets/passives/tinkerer/ABILITY_Fuzzy_Feet.svg",
		description: "When you end your movement, deal 1 Electric Damage to all adjacent units for each tile you moved.",
		description2: "When you end your movement, deal 1 Electric Damage to all adjacent units for each tile you moved. This damage has a chance to inflict Stun.",
		notes: [
			{ label: "Class", content: "Tinkerer" },
		],
	},
	{
		name: "Ingenuity",
		icon_path: "assets/passives/tinkerer/ABILITY_Ingenuity.svg",
		description: "Pickups give you +1 Tech in addition to their other effects.",
		description2: "Pickups give you +1 Tech in addition to their other effects. 10 extra pickups spawn at the start of each battle.",
		notes: [
			{ label: "Class", content: "Tinkerer" },
		],
	},
	{
		name: "IT'S ALIVE!",
		icon_path: "assets/passives/tinkerer/ABILITY_IT-S_ALIVE-.svg",
		description: "Hitting a body with electric damage revives it with 1 HP. The revived corpse is charmed and takes an extra turn, then dies.",
		description2: "Hitting a body with electric damage revives it with 1 HP, +8 Speed, and +2 Damage. The revived corpse is charmed and takes an extra turn, then dies.",
		notes: [
			{ label: "Class", content: "Tinkerer" },
		],
	},
	{
		name: "Item Proxy",
		icon_path: "assets/passives/tinkerer/ABILITY_Item_Proxy.svg",
		description: "You need one fewer piece of equipment to get set bonuses.",
		description2: "You need two fewer pieces of equipment to get set bonuses.",
		notes: [
			{ label: "Class", content: "Tinkerer" },
		],
	},
	{
		name: "Lightning Rod",
		icon_path: "assets/passives/tinkerer/ABILITY_Lightning_Rod.svg",
		description: "You have Electric immunity. Electric damage you deal is increased by 1. Gain 1 Charge when you are hit with electric damage.",
		description2: "You have Electric immunity. Electric damage you deal is increased by 2. Gain 1 Charge for each damage prevented when you are hit with electric damage.",
		notes: [
			{ label: "Class", content: "Tinkerer" },
		],
	},
	{
		name: "Living Battery",
		icon_path: "assets/passives/tinkerer/ABILITY_Living_Battery.svg",
		description: "When an adjacent ally spends mana, gain that much mana.",
		description2: "When an adjacent ally spends mana, gain that much mana. You have no mana cap.",
		notes: [
			{ label: "Class", content: "Tinkerer" },
		],
	},
	{
		name: "Mr. Mega",
		icon_path: "assets/passives/tinkerer/ABILITY_Mr-_Mega.svg",
		description: "Your explosions are larger and deal +1 damage.",
		description2: "Your explosions are larger and deal +2 damage. You have explosion immunity.",
		notes: [
			{ label: "Class", content: "Tinkerer" },
		],
	},
	{
		name: "Nanobots",
		icon_path: "assets/passives/tinkerer/ABILITY_Nanobots.svg",
		description: "Gain +2 Health Regen (Diminishing) every time you take damage from an attack or spell.",
		description2: "Gain +2 Health Regen (Diminishing) every time you take damage from an attack or spell and +1 Health Regen (Diminishing) from any other sources.",
		notes: [
			{ label: "Class", content: "Tinkerer" },
		],
	},
	{
		name: "Napalm",
		icon_path: "assets/passives/tinkerer/ABILITY_Napalm.svg",
		description: "Your explosions inflict Burn 1 and light tiles on fire.",
		description2: "Your explosions inflict Burn 3 and light tiles on fire.",
		notes: [
			{ label: "Class", content: "Tinkerer" },
		],
	},
	{
		name: "Reactive Armor",
		icon_path: "assets/passives/tinkerer/ABILITY_Reactive_Armor.svg",
		description: "When you take damage, craft a Tinkerer weapon or armor piece and equip it in an empty slot.",
		description2: "When you take damage, craft a Tinkerer weapon or armor piece and equip it in an empty slot and gain +1 Shield.",
		notes: [
			{ label: "Class", content: "Tinkerer" },
		],
	},
	{
		name: "Robot Arms",
		icon_path: "assets/passives/tinkerer/ABILITY_Robot_Arms.svg",
		description: "You can use your weapon an additional time each turn.",
		description2: "You can use your weapon and trinket an additional time each turn. Whenever you equip a new item during battle it gains +1 use.",
		notes: [
			{ label: "Class", content: "Tinkerer" },
		],
	},
	{
		name: "Scrapper",
		icon_path: "assets/passives/tinkerer/ABILITY_Scrapper.svg",
		description: "Find an extra consumable item at the end of each battle. When you use up a consumable or trinket, equip a new consumable from your inventory if you have any.",
		description2: "Find an extra item at the end of each battle. When you use up a consumable or trinket, equip a new consumable from your inventory if you have any.",
		notes: [
			{ label: "Class", content: "Tinkerer" },
		],
	},
	{
		name: "Shrapnel",
		icon_path: "assets/passives/tinkerer/ABILITY_Shrapnel.svg",
		description: "When you break an item, gain +1 Thorns.",
		description2: "When you break an item, gain +2 Thorns and +3 Shield.",
		notes: [
			{ label: "Class", content: "Tinkerer" },
		],
	},
	{
		name: "V2.0",
		icon_path: "assets/passives/tinkerer/ABILITY_V2-0.svg",
		description: "Start with 1 Tech. Your Tech can't drop below 1.",
		description2: "Start with 1 Tech. Your Tech can't drop below 1. Your Tech isn't removed when you craft.",
		notes: [
			{ label: "Class", content: "Tinkerer" },
		],
	},
	{
		name: "Weapon Proficiency",
		icon_path: "assets/passives/tinkerer/ABILITY_Weapon_Proficiency.svg",
		description: "Your weapon damage scales with your stats and counts as a basic attack.",
		description2: "Your weapon damage scales with your stats and counts as a basic attack. You can use your weapon an extra time each turn.",
		notes: [
			{ label: "Class", content: "Tinkerer" },
		],
	},
];

export default TINKERER_PASSIVE_OBJECTS;
