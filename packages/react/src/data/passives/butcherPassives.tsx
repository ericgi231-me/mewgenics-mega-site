import type { GameObject } from "../../types";

const BUTCHER_PASSIVE_OBJECTS: GameObject[] = [
	{
		name: "Barbed",
		icon_path: "assets/passives/butcher/ABILITY_Barbed.svg",
		description: "Your hook deals +1 damage and inflicts Bleed.",
		description2: "Your hook deals +5 damage and inflicts Bleed.",
		notes: [
			{ label: "Class", content: "Butcher" },
		],
	},
	{
		name: "Bowling Ball",
		icon_path: "assets/passives/butcher/ABILITY_Bowling_Ball.svg",
		description: "Adjacent and diagonal allied cats get the bonus ability Bowl.",
		description2: "Adjacent and diagonal allied cats get the bonus ability Bowl+.",
		notes: [
			{ label: "Class", content: "Butcher" },
		],
	},
	{
		name: "Confrontational",
		icon_path: "assets/passives/butcher/ABILITY_Confrontational.svg",
		description: "When you take damage, Trample one tile towards the source of damage.",
		description2: "When you take damage, Trample all the way to the source of damage.",
		notes: [
			{ label: "Class", content: "Butcher" },
		],
	},
	{
		name: "Duke of Flies",
		icon_path: "assets/passives/butcher/ABILITY_Duke_of_Flies.svg",
		description: "At the end of the battle, all food pickups become allied flies. Allied flies stay with you between battles.",
		description2: "At the end of the battle, all food pickups become allied flies. Allied flies stay with you between battles. Your basic attack spawns flies.",
		notes: [
			{ label: "Class", content: "Butcher" },
		],
	},
	{
		name: "Fresh Meat",
		icon_path: "assets/passives/butcher/ABILITY_Fresh_Meat.svg",
		description: "When you eat food, gain +1 Strength.",
		description2: "When you eat food, gain +1 Strength and +1 to a random stat.",
		notes: [
			{ label: "Class", content: "Butcher" },
		],
	},
	{
		name: "Glutton",
		icon_path: "assets/passives/butcher/ABILITY_Glutton.svg",
		description: "When a food pickup spawns within 2 tiles of you, move to it.",
		description2: "When a food pickup spawns within 2 tiles of you, move to it with Trample.",
		notes: [
			{ label: "Class", content: "Butcher" },
		],
	},
	{
		name: "Grappling Hook",
		icon_path: "assets/passives/butcher/ABILITY_Grappling_Hook.svg",
		description: "Your hook pulls you toward knockback-immune objects.",
		description2: "Your hook pulls you toward knockback-immune objects. Refresh your movement action when you use your hook.",
		notes: [
			{ label: "Class", content: "Butcher" },
		],
	},
	{
		name: "Gurgitator",
		icon_path: "assets/passives/butcher/ABILITY_Gurgitator.svg",
		description: "Whenever you heal over your max HP, gain +1 Strength.",
		description2: "Whenever you heal over your max HP, gain +1 Strength and +1 Weapon Damage.",
		notes: [
			{ label: "Class", content: "Butcher" },
		],
	},
	{
		name: "Hack",
		icon_path: "assets/passives/butcher/ABILITY_Hack.svg",
		description: "Your basic attack is always critical against enemies with Shield. Your basic attack's critical hits remove buffs from units.",
		description2: "Your basic attack is always critical against enemies with Shield. Your basic attack's critical hits remove buffs from units. Your critical hits deal +100% damage.",
		notes: [
			{ label: "Class", content: "Butcher" },
		],
	},
	{
		name: "Harpooner",
		icon_path: "assets/passives/butcher/ABILITY_Harpooner.svg",
		description: "When an enemy moves in range, hook it.",
		description2: "When an enemy moves in range, hook it. Your hook deals +2 Damage.",
		notes: [
			{ label: "Class", content: "Butcher" },
		],
	},
	{
		name: "Heave Hook",
		icon_path: "assets/passives/butcher/ABILITY_Heave_Hook.svg",
		description: "Your hook can target tiles. Units pulled by your hook gain Trample while being hooked.",
		description2: "Your hook can target tiles. Units pulled by your hook gain Trample while being hooked, this Trample damage is doubled.",
		notes: [
			{ label: "Class", content: "Butcher" },
		],
	},
	{
		name: "Hooked",
		icon_path: "assets/passives/butcher/ABILITY_Hooked.svg",
		description: "You can use your hook 2 additional times on your turn.",
		description2: "You can use your hook 2 additional times on your turn. Your hook deals +1 damage and has Cleave.",
		notes: [
			{ label: "Class", content: "Butcher" },
		],
	},
	{
		name: "Incubator",
		icon_path: "assets/passives/butcher/ABILITY_Incubator.svg",
		description: "Whenever you heal over your max HP, spawn a Rot fly.",
		description2: "Whenever you heal over your max HP, spawn a Rot fly with HP and damage equal to the excess healing.",
		notes: [
			{ label: "Class", content: "Butcher" },
		],
	},
	{
		name: "Indigestion",
		icon_path: "assets/passives/butcher/ABILITY_Indigestion.svg",
		description: "Whenever you heal over your max HP, fart and inflict Poison 3 on adjacent units.",
		description2: "Whenever you heal over your max HP, fart and inflict Poison 3 and Burn 3 on adjacent units.",
		notes: [
			{ label: "Class", content: "Butcher" },
		],
	},
	{
		name: "Loose Meat",
		icon_path: "assets/passives/butcher/ABILITY_Loose_Meat.svg",
		description: "When you take damage, spawn a food pickup.",
		description2: "When you take damage or move, spawn a food pickup.",
		notes: [
			{ label: "Class", content: "Butcher" },
		],
	},
	{
		name: "Lord of the Flies",
		icon_path: "assets/passives/butcher/ABILITY_Lord_of_the_Flies.svg",
		description: "All flies are Charmed and get +1 Damage. Whenever you inflict Rot, you inflict +1 Rot.",
		description2: "All flies are Charmed and get +4 Damage. Whenever you inflict Rot, you inflict +1 Rot.",
		notes: [
			{ label: "Class", content: "Butcher" },
		],
	},
	{
		name: "Masochist",
		icon_path: "assets/passives/butcher/ABILITY_Masochist.svg",
		description: "When you take damage, gain +1 Strength, Constitution, or Speed at random.",
		description2: "When you take damage, you get +1 Strength, Constitution, and Speed.",
		notes: [
			{ label: "Class", content: "Butcher" },
		],
	},
	{
		name: "Never Full",
		icon_path: "assets/passives/butcher/ABILITY_Never_Full.svg",
		description: "You can heal over your max HP. Excess HP is lost between battles.",
		description2: "You can heal over your max HP. Excess HP is lost between battles. Gain +1 Strength for every 5 HP you have over max HP.",
		notes: [
			{ label: "Class", content: "Butcher" },
		],
	},
	{
		name: "Putrefy",
		icon_path: "assets/passives/butcher/ABILITY_Putrefy.svg",
		description: "Your basic attack inflicts Rot 1.",
		description2: "Your basic attack inflicts permanent Rot.",
		notes: [
			{ label: "Class", content: "Butcher" },
		],
	},
	{
		name: "Rankle",
		icon_path: "assets/passives/butcher/ABILITY_Rankle.svg",
		description: "When you take damage, gain +2 Temp Damage.",
		description2: "When you take damage, gain +1 Damage and +1 Temp Damage.",
		notes: [
			{ label: "Class", content: "Butcher" },
		],
	},
	{
		name: "Schadenfreude",
		icon_path: "assets/passives/butcher/ABILITY_Schadenfreude.svg",
		description: "Your Strength and Constitution are increased by 2 for each disorder your party has.",
		description2: "All of your stats are increased by 2 for each disorder your party has.",
		notes: [
			{ label: "Class", content: "Butcher" },
		],
	},
	{
		name: "Spin to Win",
		icon_path: "assets/passives/butcher/ABILITY_Spin_to_Win.svg",
		description: "Your basic attack is a 3x3 tile spin attack with Cleave.",
		description2: "Your basic attack is a 3x3 tile double spin attack with Cleave.",
		notes: [
			{ label: "Class", content: "Butcher" },
		],
	},
	{
		name: "Stompy!",
		icon_path: "assets/passives/butcher/ABILITY_Stompy-.svg",
		description: "You have Trample. Trample damage you deal has Cleave.",
		description2: "You have Trample and +2 Bonus Moves. Trample damage you deal has Cleave.",
		notes: [
			{ label: "Class", content: "Butcher" },
		],
	},
	{
		name: "Supersize Me!",
		icon_path: "assets/passives/butcher/ABILITY_Supersize_Me-.svg",
		description: "Food and scrap pickups you spawn are bigger.",
		description2: "Food and scrap pickups you spawn are max size.",
		notes: [
			{ label: "Class", content: "Butcher" },
		],
	},
	{
		name: "Testy",
		icon_path: "assets/passives/butcher/ABILITY_Testy.svg",
		description: "When you take damage, gain +1 movement range until the end of your turn.",
		description2: "When you take damage, gain +1 movement range.",
		notes: [
			{ label: "Class", content: "Butcher" },
		],
	},
];

export default BUTCHER_PASSIVE_OBJECTS;
