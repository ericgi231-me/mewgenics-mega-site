import type { GameObject } from "../../types";

const PSYCHIC_PASSIVE_OBJECTS: GameObject[] = [
	{
		name: "Antigravity",
		icon_path: "assets/passives/psychic/ABILITY_Antigravity.svg",
		description: "You have Flying Movement. When you use a Gravity element ability gain +1 Speed. Gravity element spells cost -1 mana.",
		description2: "You have Flying Movement. When you use a Gravity element ability gain +2 Speed. Gravity element spells cost -2 mana.",
		notes: [
			{ label: "Class", content: "Psychic" }
		]
	},
	{
		name: "Beckon",
		icon_path: "assets/passives/psychic/ABILITY_Beckon.svg",
		description: "Your basic attack has +4 Knockback.",
		description2: "Your basic attack has +4 Knockback and Chain Knockback.",
		notes: [
			{ label: "Class", content: "Psychic" }
		]
	},
	{
		name: "Blink",
		icon_path: "assets/passives/psychic/ABILITY_Blink.svg",
		description: "33% chance to teleport to a random tile when targeted by an enemy.",
		description2: "50% chance to teleport to a random tile when targeted by an enemy.",
		notes: [
			{ label: "Class", content: "Psychic" }
		]
	},
	{
		name: "Braingeyser",
		icon_path: "assets/passives/psychic/ABILITY_Braingeyser.svg",
		description: "When you gain excess mana, emit that many Sparkles.",
		description2: "When you gain excess mana, emit that many Sparkles and remove all your debuffs.",
		notes: [
			{ label: "Class", content: "Psychic" }
		]
	},
	{
		name: "Drag",
		icon_path: "assets/passives/psychic/ABILITY_Drag.svg",
		description: "Units that you knockback take 1 damage for each tile they pass through.",
		description2: "Units that you knockback take 2 damage for each tile they pass through.",
		notes: [
			{ label: "Class", content: "Psychic" }
		]
	},
	{
		name: "Eldritch Visage",
		icon_path: "assets/passives/psychic/ABILITY_Eldritch_Visage.svg",
		description: "At the start of your turn, inflict Magic Weakness 1 on all enemies in your line of sight.",
		description2: "At the start of your turn, inflict Magic Weakness 1 and Marked on all enemies in your line of sight.",
		notes: [
			{ label: "Class", content: "Psychic" }
		]
	},
	{
		name: "Enlightened",
		icon_path: "assets/passives/psychic/ABILITY_Enlightened.svg",
		description: "While at full mana, the first spell you cast each turn is free.",
		description2: "While at full mana, all of your spells are free to cast once a turn.",
		notes: [
			{ label: "Class", content: "Psychic" }
		]
	},
	{
		name: "Flourish",
		icon_path: "assets/passives/psychic/ABILITY_Flourish.svg",
		description: "Gravity element abilities do not harm allies. Gravity element abilities give a random positive status effect when used on allies. When you inflict a positive status effect, inflict +1 of that status effect.",
		description2: "Gravity element abilities do not harm allies. Gravity element abilities give a random positive status effect when used on allies. When you inflict a positive status effect, inflict +2 of that status effect.",
		notes: [
			{ label: "Class", content: "Psychic" }
		]
	},
	{
		name: "Full Power",
		icon_path: "assets/passives/psychic/ABILITY_Full_Power.svg",
		description: "While at full mana, your basic attack deals triple damage and has +3 Knockback.",
		description2: "While at full mana, your basic attack deals triple damage and has +3 Knockback. Bonus Ability: Grow Head.",
		notes: [
			{ label: "Class", content: "Psychic" }
		]
	},
	{
		name: "Glow",
		icon_path: "assets/passives/psychic/ABILITY_Glow.svg",
		description: "Your basic attack inflicts Blind.",
		description2: "All damage you deal inflicts Blind.",
		notes: [
			{ label: "Class", content: "Psychic" }
		]
	},
	{
		name: "Gravity Well",
		icon_path: "assets/passives/psychic/ABILITY_Gravity_Well.svg",
		description: "When a unit is knocked through a tile adjacent to you, stop it and inflict Stun.",
		description2: "When a unit is knocked through a tile adjacent to you, stop it, inflict Stun and deal 5 damage to it.",
    unlock: "Complete The Boneyard with the Psychic",
		notes: [
			{ label: "Class", content: "Psychic" }
		]
	},
	{
		name: "Mad Visage",
		icon_path: "assets/passives/psychic/ABILITY_Mad_Visage.svg",
		description: "All injuries you get are Disfigured. While at full mana, your basic action inflicts Madness. While you have 0 or less CHARISMA you can attack an additional time each turn.",
		description2: "All injuries you get are Disfigured. Units that contact or attack you get Madness. While at full mana, your basic attack inflicts Madness. While at 0 CHARISMA you can attack 2 additional times each turn.",
		notes: [
			{ label: "Class", content: "Psychic" }
		]
	},
	{
		name: "Mental Storm",
		icon_path: "assets/passives/psychic/ABILITY_Mental_Storm.svg",
		description: "Gain +1 Charge when you cast a spell.",
		description2: "Gain +2 Charge when you cast a spell.",
		notes: [
			{ label: "Class", content: "Psychic" }
		]
	},
	{
		name: "Mind Tempest",
		icon_path: "assets/passives/psychic/ABILITY_Mind_Tempest.svg",
		description: "After every sixth spell you cast, gain All Stats Up and +1 Magic Damage.",
		description2: "After every sixth spell you cast, gain All Stats Up, +1 Magic Damage, and reduce the cost of your spells by 1 mana.",
		notes: [
			{ label: "Class", content: "Psychic" }
		]
	},
	{
		name: "Omniscience",
		icon_path: "assets/passives/psychic/ABILITY_Omniscience.svg",
		description: "You can see EVERYTHING. Line of sight restrictions are ignored.",
		description2: "+4 Intelligence. You can see EVERYTHING. Line of sight restrictions are ignored.",
		notes: [
			{ label: "Class", content: "Psychic" }
		]
	},
	{
		name: "Overflow",
		icon_path: "assets/passives/psychic/ABILITY_Overflow.svg",
		description: "While at full mana, gain +2 Brace and Flying Movement. Your mana is uncapped.",
		description2: "While at full mana, gain +2 Brace and Teleportation. Your mana is uncapped.",
		notes: [
			{ label: "Class", content: "Psychic" }
		]
	},
	{
		name: "Power Up",
		icon_path: "assets/passives/psychic/ABILITY_Power_Up_(Psychic).svg",
		description: "When you gain excess mana, gain +1 Magic Damage and +1 Intelligence.",
		description2: "When you gain excess mana, gain +1 Magic Damage, +1 Intelligence, and +1 Holy Shield.",
		notes: [
			{ label: "Class", content: "Psychic" }
		]
	},
	{
		name: "Psionic Repel",
		icon_path: "assets/passives/psychic/ABILITY_Psionic_Repel.svg",
		description: "Units that attack or contact you get knocked back 10 tiles.",
		description2: "Units that attack or contact you get knocked back 10 tiles and are Immobilized.",
		notes: [
			{ label: "Class", content: "Psychic" }
		]
	},
	{
		name: "Psy Smack",
		icon_path: "assets/passives/psychic/ABILITY_Psy_Smack.svg",
		description: "Knockback damage you and your allies deal is doubled.",
		description2: "Knockback damage and distance you and your allies deal is doubled and has Chain Knockback.",
		notes: [
			{ label: "Class", content: "Psychic" }
		]
	},
	{
		name: "Reality Shatter",
		icon_path: "assets/passives/psychic/ABILITY_Reality_Shatter.svg",
		description: "Gravity element abilities spawn Floating Glass.",
		description2: "Gravity element abilities spawn Floating Glass and inflict Bleed 1.",
		notes: [
			{ label: "Class", content: "Psychic" }
		]
	},
	{
		name: "Repressed Memories",
		icon_path: "assets/passives/psychic/ABILITY_Repressed_Memories.svg",
		description: "When you spend mana, cast a random Psychic spell that costs less than the mana spent.",
		description2: "When you spend mana, cast a random spell from any class that costs less than the mana spent.",
		notes: [
			{ label: "Class", content: "Psychic" }
		]
	},
	{
		name: "Soul Shatter",
		icon_path: "assets/passives/psychic/ABILITY_Soul_Shatter.svg",
		description: "When you kill a unit, deal 1 damage to all enemies.",
		description2: "When you kill a unit, deal 2 damage to all enemies.",
		notes: [
			{ label: "Class", content: "Psychic" }
		]
	},
	{
		name: "True Sight",
		icon_path: "assets/passives/psychic/ABILITY_True_Sight.svg",
		description: "You and your allies can't miss enemies within your line of sight.",
		description2: "You and your allies can't miss enemies within your line of sight. Allied physical attacks gain +50% critical hit chance against those enemies.",
		notes: [
			{ label: "Class", content: "Psychic" }
		]
	},
	{
		name: "Twiddle",
		icon_path: "assets/passives/psychic/ABILITY_Twiddle.svg",
		description: "Your basic attack deals 0 damage, but you can use it 2 additional times each turn.",
		description2: "Start each battle with +5 Bonus Attacks. Your basic attack deals 0 damage, but you can use it 2 additional times each turn.",
		notes: [
			{ label: "Class", content: "Psychic" }
		]
	},
	{
		name: "Wither",
		icon_path: "assets/passives/psychic/ABILITY_Wither.svg",
		description: "Gravity element abilities inflict a random negative status effect when used on enemies.",
		description2: "Gravity element abilities inflict a random negative status effect when used on enemies. When you inflict a negative status effect, inflict +1 of that status effect.",
		notes: [
			{ label: "Class", content: "Psychic" }
		]
	}
];

export default PSYCHIC_PASSIVE_OBJECTS;
