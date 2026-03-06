import type { GameObject } from "../../types";

const THIEF_PASSIVE_OBJECTS: GameObject[] = [
	{
		name: "After Image",
		icon_path: "/assets/passives/thief/ABILITY_After_Image.svg",
		description: "When you move, spawn a shadow where you moved from. The shadow mimics your basic action but fades away at the end of your turn.",
		description2: "When you move, spawn a shadow where you moved from. The shadow mimics your basic action.",
		notes: [
			{ label: "Class", content: "Thief" },
		],
	},
	{
		name: "Agile",
		icon_path: "/assets/passives/thief/ABILITY_Agile.svg",
		description: "+2 Movement Range. If you move fewer tiles than your full movement range, you can move a 2nd time for the rest of your movement range.",
		description2: "+4 Movement Range. If you move fewer tiles than your full movement range, you can move a 2nd, 3rd and 4th time for the rest of your movement range.",
		notes: [
			{ label: "Class", content: "Thief" },
		],
	},
	{
		name: "Backstabber",
		icon_path: "/assets/passives/thief/ABILITY_Backstabber.svg",
		description: "Your backstabs are always critical.",
		description2: "Your backstabs are always critical. When you land a critical hit, gain a random stat up.",
		notes: [
			{ label: "Class", content: "Thief" },
		],
	},
	{
		name: "Bounty Hunter",
		icon_path: "/assets/passives/thief/ABILITY_Bounty_Hunter.svg",
		description: "During your turn, one random enemy has a Bounty.",
		description2: "During your turn, 2 random enemies have a large Bounty.",
		notes: [
			{ label: "Class", content: "Thief" },
		],
	},
	{
		name: "Burgle",
		icon_path: "/assets/passives/thief/ABILITY_Burgle.svg",
		description: "Your basic attack gains you 1 coin when it deals damage.",
		description2: "Your basic attack gains you 1 coin and spawns a coin pickup when it deals damage.",
		notes: [
			{ label: "Class", content: "Thief" },
		],
	},
	{
		name: "Cripple",
		icon_path: "/assets/passives/thief/ABILITY_Cripple.svg",
		description: "Your critical hits inflict Immobilize and Weakness 2.",
		description2: "Your critical hits inflict Stun and Weakness 2.",
		notes: [
			{ label: "Class", content: "Thief" },
		],
	},
	{
		name: "Critical",
		icon_path: "/assets/passives/thief/ABILITY_Critical.svg",
		description: "Your critical hits deal +100% more damage. Gain +1 Luck whenever you make a critical hit.",
		description2: "Your critical hits deal +100% more damage and inflict Bleed and Weakness 1. Gain +1 Luck whenever you make a critical hit.",
		notes: [
			{ label: "Class", content: "Thief" },
		],
	},
	{
		name: "Double Throw",
		icon_path: "/assets/passives/thief/ABILITY_Double_Throw.svg",
		description: "Your basic attack hits twice for half damage.",
		description2: "Your basic attack hits thrice for 1/3rd damage.",
		notes: [
			{ label: "Class", content: "Thief" },
		],
	},
	{
		name: "First Strike",
		icon_path: "/assets/passives/thief/ABILITY_First_Strike.svg",
		description: "Gain an extra turn at the start of the battle.",
		description2: "Gain an extra turn at the start of the battle. Damage you deal on this turn is always critical.",
		notes: [
			{ label: "Class", content: "Thief" },
		],
	},
	{
		name: "Flip a Coin",
		icon_path: "/assets/passives/thief/ABILITY_Flip_a_Coin.svg",
		description: "When you gain a coin, you have a 50% chance to spawn a coin on a random tile and a 50% chance to gain +2 Speed and +2 Luck.",
		description2: "When you gain a coin, you have a 50% chance to spawn 2 coins on random tiles and a 50% chance to gain +2 Speed, +2 Luck and +2 Dexterity.",
		notes: [
			{ label: "Class", content: "Thief" },
		],
	},
	{
		name: "Golden Claws",
		icon_path: "/assets/passives/thief/ABILITY_Golden_Claws.svg",
		description: "Gain +1 Damage for each coin you collect.",
		description2: "Gain +2 Damage for each coin you collect.",
		notes: [
			{ label: "Class", content: "Thief" },
		],
	},
	{
		name: "Loot Hoarder",
		icon_path: "/assets/passives/thief/ABILITY_Loot_Hoarder.svg",
		description: "Automatically collect all pickups at the end of the battle if you're not downed.",
		description2: "Automatically destroy all enemy bodies and collect all pickups at the end of the battle if you're not downed.",
		notes: [
			{ label: "Class", content: "Thief" },
		],
	},
	{
		name: "More!",
		icon_path: "/assets/passives/thief/ABILITY_More-.svg",
		description: "When you kill a unit, refresh your movement action.",
		description2: "When you kill a unit, refresh your movement and basic attack.",
		notes: [
			{ label: "Class", content: "Thief" },
		],
	},
	{
		name: "Penetrate",
		icon_path: "/assets/passives/thief/ABILITY_Penetrate.svg",
		description: "Your basic attack passes through units and ignores shield. +1 Range.",
		description2: "Your basic attack passes through units and ignores shield. +10 Range.",
		notes: [
			{ label: "Class", content: "Thief" },
		],
	},
	{
		name: "Pinpoint",
		icon_path: "/assets/passives/thief/ABILITY_Pinpoint.svg",
		description: "Your critical hits inflict Marked.",
		description2: "Your critical hits inflict Marked. Your critical hits deal 100% more damage.",
		notes: [
			{ label: "Class", content: "Thief" },
		],
	},
	{
		name: "Poison Tips",
		icon_path: "/assets/passives/thief/ABILITY_Poison_Tips.svg",
		description: "Your basic attack inflicts Poison 1.",
		description2: "Your basic attack inflicts Poison 1. Poison you inflict is doubled.",
		notes: [
			{ label: "Class", content: "Thief" },
		],
	},
	{
		name: "Razor Claws",
		icon_path: "/assets/passives/thief/ABILITY_Razor_Claws.svg",
		description: "Your basic attack inflicts Bleed 1.",
		description2: "All of your damaging abilities inflict Bleed 1.",
		notes: [
			{ label: "Class", content: "Thief" },
		],
	},
	{
		name: "Shake Down",
		icon_path: "/assets/passives/thief/ABILITY_Shake_Down.svg",
		description: "Your critical hits spawn a coin and a random pickup.",
		description2: "+25% critical hit chance. Your critical hits spawn a coin and two random pickups.",
		notes: [
			{ label: "Class", content: "Thief" },
		],
	},
	{
		name: "Shank",
		icon_path: "/assets/passives/thief/ABILITY_Shank.svg",
		description: "When behind and adjacent to an enemy, your basic attack is a melee attack that hits twice.",
		description2: "When behind and adjacent to an enemy, your basic attack is a melee attack that hits thrice!",
		notes: [
			{ label: "Class", content: "Thief" },
		],
	},
	{
		name: "Shiv",
		icon_path: "/assets/passives/thief/ABILITY_Shiv.svg",
		description: "Your basic attack has +2 damage, +25% critical chance, and inflicts Bleed 1 when attacking a unit in melee range.",
		description2: "Your basic attack has +2 damage, +50% critical chance, and inflicts Bleed 2 when attacking a unit in melee range.",
		notes: [
			{ label: "Class", content: "Thief" },
		],
	},
	{
		name: "Stealthed",
		icon_path: "/assets/passives/thief/ABILITY_Stealthed.svg",
		description: "Start each battle with Stealth.",
		description2: "Start each battle with Stealth. Gain Stealth when you get a kill.",
		notes: [
			{ label: "Class", content: "Thief" },
		],
	},
	{
		name: "Sweetspot",
		icon_path: "/assets/passives/thief/ABILITY_Sweetspot.svg",
		description: "+1 Range. Your basic attack deals more damage the farther away you are from the target.",
		description2: "+6 Range. Your basic attack deals more damage the farther away you are from the target.",
		notes: [
			{ label: "Class", content: "Thief" },
		],
	},
	{
		name: "Swift Looter",
		icon_path: "/assets/passives/thief/ABILITY_Swift_Looter.svg",
		description: "When you collect a coin pickup, refresh your movement action. 1-2 extra coins spawn in each battle.",
		description2: "When you collect a coin pickup, refresh your movement action and gain +1 Dexterity and +1 Speed. 2-3 extra coins spawn in each battle.",
		notes: [
			{ label: "Class", content: "Thief" },
		],
	},
	{
		name: "Weak Spot",
		icon_path: "/assets/passives/thief/ABILITY_Weak_Spot.svg",
		description: "Your basic attack ignores shield and inflicts Weakness 1.",
		description2: "All of your damaging abilities ignore shield and inflict Weakness 2. +25% crit chance.",
		notes: [
			{ label: "Class", content: "Thief" },
		],
	},
	{
		name: "ZIP!",
		icon_path: "/assets/passives/thief/ABILITY_ZIP-.svg",
		description: "Your movement action is Shadowstep.",
		description2: "Your movement action is Shadowstep. You can use your movement action an extra time each turn.",
		notes: [
			{ label: "Class", content: "Thief" },
		],
	},
];

export default THIEF_PASSIVE_OBJECTS;
