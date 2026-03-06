import type { GameObject } from "../../types";

const MAGE_PASSIVE_OBJECTS: GameObject[] = [
	{
		name: "Burning Paws",
		icon_path: "/assets/passives/mage/ABILITY_Burning_Paws.svg",
		description: "Your basic action inflicts Burn 1.",
		description2: "Your basic action inflicts Burn 3.",
		notes: [
			{ label: "Class", content: "Mage" },
		]
	},
	{
		name: "Charge Up",
		icon_path: "/assets/passives/mage/ABILITY_Charge_Up.svg",
		description: "If you end your turn with 0 mana, the next spell you cast is free.",
		description2: "If you end your turn with 0 mana, gain +1 Magic Damage and the next spell you cast is free.",
		notes: [
			{ label: "Class", content: "Mage" },
		]
	},
	{
		name: "Elemental Attunement",
		icon_path: "/assets/passives/mage/ABILITY_Elemental_Attunement.svg",
		description: "Casting elemental spells imbues your basic attack with those elements and relevant effects for the rest of the battle.",
		description2: "Casting elemental spells imbues your basic attack with those elements and relevant effects for the rest of the battle. Elemental spells cost -2 mana.",
		notes: [
			{ label: "Class", content: "Mage" },
		]
	},
	{
		name: "Epiphany",
		icon_path: "/assets/passives/mage/ABILITY_Epiphany.svg",
		description: "+5 starting mana. +5 Mana Regeneration  Lose all unspent mana at the end of each of your turns",
		description2: "+20 starting mana. +5 Mana Regeneration  Lose all unspent mana at the end of each of your turns",
		notes: [
			{ label: "Class", content: "Mage" },
		]
	},
	{
		name: "Fire Aspect",
		icon_path: "/assets/passives/mage/ABILITY_Fire_Aspect.svg",
		description: "Fire immunity. Inflict Burn 1 on units that contact you. Your Fire element damage is increased by 1 and inflicts +1 Burn.",
		description2: "Fire immunity. Inflict Burn 3 on units that contact you. Your Fire element damage is increased by 2 and inflicts +3 Burn.",
		notes: [
			{ label: "Class", content: "Mage" },
		]
	},
	{
		name: "Five",
		icon_path: "/assets/passives/mage/ABILITY_Five.svg",
		description: "When you end your turn with exactly 5 mana, gain +5 Shield and temporarily gain +5 Kinetic Spikes until the end of your next turn.",
		description2: "When you end your turn with exactly 5 mana, gain +5 Shield, heal 5 HP and temporarily gain +5 Kinetic Spikes and +5 Damage until the end of your next turn.",
		notes: [
			{ label: "Class", content: "Mage" },
		]
	},
	{
		name: "Force Field",
		icon_path: "/assets/passives/mage/ABILITY_Force_Field.svg",
		description: "+1 Holy Shield. At the start of every third turn, gain +1 Holy Shield.",
		description2: "+1 Holy Shield. At the start of every other turn, gain +1 Holy Shield.",
		notes: [
			{ label: "Class", content: "Mage" },
		]
	},
	{
		name: "Four",
		icon_path: "/assets/passives/mage/ABILITY_Four.svg",
		description: "When you end your turn, if you have exactly 4 mana, gain +1 Intelligence and +1 Magic Damage.",
		description2: "When you end your turn, if you have exactly 4 mana, gain +1 Intelligence, +1 Magic Damage, +1 Kinetic Spikes, and +1 Holy Shield.",
		notes: [
			{ label: "Class", content: "Mage" },
		]
	},
	{
		name: "Ice Aspect",
		icon_path: "/assets/passives/mage/ABILITY_Ice_Aspect.svg",
		description: "Ice immunity. You can damage frozen units. Units that contact you take 1 Ice Damage, Slow 2, and have a 5% chance to Freeze.",
		description2: "+2 Brace. Ice immunity. You can damage frozen units. Units that contact you take 3 Ice Damage, Slow 2, and have a 15% chance to Freeze.",
		notes: [
			{ label: "Class", content: "Mage" },
		]
	},
	{
		name: "Ice Paws",
		icon_path: "/assets/passives/mage/ABILITY_Ice_Paws.svg",
		description: "Your basic attack deals Ice Damage, inflicts Slow 1, and has a 15% chance to Freeze.",
		description2: "Your basic attack deals Ice Damage, inflicts Slow 2, and has a 50% chance to Freeze.",
		notes: [
			{ label: "Class", content: "Mage" },
		]
	},
	{
		name: "Latent Energy",
		icon_path: "/assets/passives/mage/ABILITY_Latent_Energy.svg",
		description: "When an ally spends mana, Gain +2 Magic Damage until the next time you use magic.",
		description2: "When an ally spends mana, Gain +2 Magic Damage until the next time you use magic, and gain +2 mana.",
		notes: [
			{ label: "Class", content: "Mage" },
		]
	},
	{
		name: "Learn From Me",
		icon_path: "/assets/passives/mage/ABILITY_Learn_From_Me.svg",
		description: "When you cast a spell, all allied cats gain that spell in their bonus slot.",
		description2: "When you cast a spell, all allied cats gain the upgraded version of that spell in their bonus slot.",
		notes: [
			{ label: "Class", content: "Mage" },
		]
	},
	{
		name: "Light Up the Stage",
		icon_path: "/assets/passives/mage/ABILITY_Light_Up_the_Stage.svg",
		description: "At the end of your turn, Emit a Sparkle for each turn you've taken.",
		description2: "At the end of your turn, emit a Sparkle for each turn you've taken and gain +1 Kinetic Spikes.",
		notes: [
			{ label: "Class", content: "Mage" },
		]
	},
	{
		name: "Lightning Aspect",
		icon_path: "/assets/passives/mage/ABILITY_Lightning_Aspect.svg",
		description: "Electric immunity. When you deal Electric Damage, gain +1 Charge.",
		description2: "Electric immunity. When you deal Electric Damage, gain +1 Charge for each point of damage dealt.",
		notes: [
			{ label: "Class", content: "Mage" },
		]
	},
	{
		name: "Lightning Paws",
		icon_path: "/assets/passives/mage/ABILITY_Lightning_Paws.svg",
		description: "Your basic attack deals +1 Electric Damage and has a 10% chance to Stun.",
		description2: "Your basic attack deals +2 Electric Damage and has a 33% chance to Stun.",
		notes: [
			{ label: "Class", content: "Mage" },
		]
	},
	{
		name: "Long Cast",
		icon_path: "/assets/passives/mage/ABILITY_Long_Cast.svg",
		description: "Tile-targeted spells gain +3 Range.",
		description2: "+1 Magic Damage. Tile-targeted spells gain +5 Range.",
		notes: [
			{ label: "Class", content: "Mage" },
		]
	},
	{
		name: "Magic Guru",
		icon_path: "/assets/passives/mage/ABILITY_Magic_Guru.svg",
		description: "Your allies have +1 Mana Regeneration. When an ally spends 7+ mana to cast a spell, they gain All Stats Up.",
		description2: "Your allies have +1 Mana Regeneration. When an ally spends 7+ mana to cast a spell, they gain All Stats Up. When you spend mana, each ally gains +1 mana.",
		notes: [
			{ label: "Class", content: "Mage" },
		]
	},
	{
		name: "One",
		icon_path: "/assets/passives/mage/ABILITY_One.svg",
		description: "When you end your turn, if you cast exactly 1 spell, double cast your next spell.",
		description2: "When you end your turn, if you cast exactly 1 spell, double cast your next 2 spells.",
		notes: [
			{ label: "Class", content: "Mage" },
		]
	},
	{
		name: "Overload",
		icon_path: "/assets/passives/mage/ABILITY_Overload.svg",
		description: "When you cast a spell, deal 1 random elemental damage to adjacent tiles.",
		description2: "When you cast a spell, deal 2 tri-elemental damage to adjacent tiles.",
		notes: [
			{ label: "Class", content: "Mage" },
		]
	},
	{
		name: "Paw Missile",
		icon_path: "/assets/passives/mage/ABILITY_Paw_Missile.svg",
		description: "Your basic attack is Magic Missile. (its damage scales with INTELLIGENCE).",
		description2: "Your basic attack is Magic Missile. (its damage scales with INTELLIGENCE). Emit 4 Sparkles when you use your basic attack.",
		notes: [
			{ label: "Class", content: "Mage" },
		]
	},
	{
		name: "Resonance",
		icon_path: "/assets/passives/mage/ABILITY_Resonance.svg",
		description: "When you cast a spell gain +1 Magic Damage for the rest of the turn.",
		description2: "When you cast a spell gain +1 Magic Damage and +1 Damage for the rest of the turn.",
		notes: [
			{ label: "Class", content: "Mage" },
		]
	},
	{
		name: "Splash Damage",
		icon_path: "/assets/passives/mage/ABILITY_Splash_Damage.svg",
		description: "Your basic attack deals 2 Magic splash damage.",
		description2: "+2 Range. Your basic attack deals 2 Magic splash damage in a wide area.",
		notes: [
			{ label: "Class", content: "Mage" },
		]
	},
	{
		name: "Synthesize",
		icon_path: "/assets/passives/mage/ABILITY_Synthesize_(Mage).svg",
		description: "Gain +1 Intelligence at the start of each turn.",
		description2: "Gain +1 Intelligence at the start of each turn. Your spells cost 25% less mana.",
		notes: [
			{ label: "Class", content: "Mage" },
		]
	},
	{
		name: "Three",
		icon_path: "/assets/passives/mage/ABILITY_Three.svg",
		description: "Every 3rd spell you cast in a turn is cast twice.",
		description2: "The first spell and every 3rd spell you cast is cast twice.",
    unlock: "Complete The Boneyard with the Mage",
		notes: [
			{ label: "Class", content: "Mage" },
		]
	},
	{
		name: "Two",
		icon_path: "/assets/passives/mage/ABILITY_Two.svg",
		description: "When you end your turn, if you cast exactly 2 spells, gain +1 Bonus Attack. When you end your turn, if you have exactly 2 mana, gain +1 Bonus Attack.",
		description2: "When you end your turn, if you cast exactly 2 spells, gain +1 Bonus Attack and Movement. When you end your turn, if you have exactly 2 mana, gain +1 Bonus Attack and Movement.",
		notes: [
			{ label: "Class", content: "Mage" },
		]
	},
];

export default MAGE_PASSIVE_OBJECTS;
