import type { GameObject } from "../../types";

const TANK_PASSIVE_OBJECTS: GameObject[] = [
	{
		name: "Bouncer",
		icon_path: "/assets/passives/tank/ABILITY_Bouncer.svg",
		description: "When an ally takes damage, move 3 tiles toward the source of the damage and attack it if you can.",
		description2: "When an ally takes damage, full move toward the source of the damage and attack it if you can.",
    unlock: "Complete The Boneyard with the Tank",
		notes: [
			{ label: "Class", content: "Tank" },
		],
	},
	{
		name: "Cat-A-Pult",
		icon_path: "/assets/passives/tank/ABILITY_Cat-A-Pult.svg",
		description: "You can throw adjacent allies up to 4 tiles on their turns without using their movement action.",
		description2: "You can throw adjacent allies to any tile on their turns without using their movement action.",
		notes: [
			{ label: "Class", content: "Tank" },
		],
	},
	{
		name: "Chain Knockback",
		icon_path: "/assets/passives/tank/ABILITY_Chain_Knockback.svg",
		description: "Your basic attack gains +1 Knockback. Units you knockback will Knockback other units.",
		description2: "Your basic attack gains +1 Knockback. All knockback you deal is increased by 2 and deals +1 extra damage. Units you knockback will Knockback other units further.",
		notes: [
			{ label: "Class", content: "Tank" },
		],
	},
	{
		name: "Follow Up",
		icon_path: "/assets/passives/tank/ABILITY_Follow_Up.svg",
		description: "After you use your basic attack, dash forward as far as you can.",
		description2: "After you use your basic attack, dash forward as far as you can and do a melee attack.",
		notes: [
			{ label: "Class", content: "Tank" },
		],
	},
	{
		name: "Hard Head",
		icon_path: "/assets/passives/tank/ABILITY_Hard_Head.svg",
		description: "You block attacks from the front.",
		description2: "You block attacks from the front. Your basic attack inflicts Bruise.",
		notes: [
			{ label: "Class", content: "Tank" },
		],
	},
	{
		name: "Hardy",
		icon_path: "/assets/passives/tank/ABILITY_Hardy.svg",
		description: "Heal to full HP at the start of each battle.",
		description2: "Heal to full HP at the start of each battle. +3 Health Regeneration.",
		notes: [
			{ label: "Class", content: "Tank" },
		],
	},
	{
		name: "Heavy Handed",
		icon_path: "/assets/passives/tank/ABILITY_Heavy_Handed.svg",
		description: "+2 Knockback Damage.",
		description2: "+3 Knockback Damage. Your basic attack gains +3 Knockback.",
		notes: [
			{ label: "Class", content: "Tank" },
		],
	},
	{
		name: "Home Run",
		icon_path: "/assets/passives/tank/ABILITY_Home_Run.svg",
		description: "Knockback you deal is increased by 10.",
		description2: "Knockback you deal is increased by 10 and inflicts Bruise 1.",
		notes: [
			{ label: "Class", content: "Tank" },
		],
	},
	{
		name: "Mountain Form",
		icon_path: "/assets/passives/tank/ABILITY_Mountain_Form.svg",
		description: "Knockback immunity. Tiles you walk over become dirt and may spawn rocks.",
		description2: "Trample. Knockback and Fire immunity. Tiles you walk over become dirt and may spawn rocks.",
		notes: [
			{ label: "Class", content: "Tank" },
		],
	},
	{
		name: "My Leg!",
		icon_path: "/assets/passives/tank/ABILITY_My_Leg-.svg",
		description: "All injuries you get are Broken Legs. If you have four broken legs, gain +4 Thorns, Trample, and adjacent allies have Toss as a bonus ability.",
		description2: "All injuries you get are Broken Legs. If you have four broken legs, gain +4 Thorns, +4 Brace, Trample, and adjacent allies have Toss as a bonus ability.",
		notes: [
			{ label: "Class", content: "Tank" },
		],
	},
	{
		name: "Pet Rocks",
		icon_path: "/assets/passives/tank/ABILITY_Pet_Rocks.svg",
		description: "Rocks you spawn are alive!! ...and have +3 HP. Spawn a rock at the start of the battle.",
		description2: "Rocks you spawn are alive, and hot!! ...and have +7 HP. Spawn a boulder at the start of the battle.",
		notes: [
			{ label: "Class", content: "Tank" },
		],
	},
	{
		name: "Plow",
		icon_path: "/assets/passives/tank/ABILITY_Plow.svg",
		description: "When you knock back a unit, leave a rock where that unit was.",
		description2: "When you knock back a unit, leave a rock where that unit was. All damage you deal has +1 Knockback.",
		notes: [
			{ label: "Class", content: "Tank" },
		],
	},
	{
		name: "Priority Target",
		icon_path: "/assets/passives/tank/ABILITY_Priority_Target.svg",
		description: "+1 Constitution. Enemies will attack you instead of your allies if they can.",
		description2: "+2 Constitution, +2 Thorns, +2 Brace, and +2 Health Regeneration. Enemies will attack you instead of your allies if they can.",
		notes: [
			{ label: "Class", content: "Tank" },
		],
	},
	{
		name: "Protective",
		icon_path: "/assets/passives/tank/ABILITY_Protective.svg",
		description: "Your allies have Brace 1.",
		description2: "Your allies have Brace 2.",
		notes: [
			{ label: "Class", content: "Tank" },
		],
	},
	{
		name: "Rock Aspect",
		icon_path: "/assets/passives/tank/ABILITY_Rock_Aspect.svg",
		description: "Units that attack or contact you have a 10% chance to get Petrified.",
		description2: "Units that attack or contact you have a 20% chance to get Petrified.",
		notes: [
			{ label: "Class", content: "Tank" },
		],
	},
	{
		name: "Scabs",
		icon_path: "/assets/passives/tank/ABILITY_Scabs.svg",
		description: "Gain +2 Shield when you take damage from an ability.",
		description2: "Gain +2 Shield when you take damage from any source.",
		notes: [
			{ label: "Class", content: "Tank" },
		],
	},
	{
		name: "Shoving Match",
		icon_path: "/assets/passives/tank/ABILITY_Shoving_Match.svg",
		description: "When you knock a unit into an ally, or knock an ally into an enemy, that ally uses their basic attack on the other unit. Your basic attack has +1 Knockback.",
		description2: "When you knock a unit into an ally, or knock an ally into an enemy, that ally uses their basic attack on the other unit. Your basic attack has +2 Knockback. You deal no damage to allies.",
		notes: [
			{ label: "Class", content: "Tank" },
		],
	},
	{
		name: "Slack Off",
		icon_path: "/assets/passives/tank/ABILITY_Slack_Off.svg",
		description: "If you end your turn with unused movement actions, gain 8 HP.",
		description2: "If you end your turn with unused movement actions, gain +2 Constitution, 8 HP and 5 mana.",
		notes: [
			{ label: "Class", content: "Tank" },
		],
	},
	{
		name: "Slow and Steady",
		icon_path: "/assets/passives/tank/ABILITY_Slow_and_Steady.svg",
		description: "Gain -2 Speed and +1 Range at the end of each turn. If your SPEED is 0, you can attack an extra time each turn.",
		description2: "Gain -2 Speed, +1 Range, +1 Strength, and +1 Intelligence at the end of each turn. If your SPEED is 0, you can attack an extra time each turn.",
		notes: [
			{ label: "Class", content: "Tank" },
		],
	},
	{
		name: "Stoic",
		icon_path: "/assets/passives/tank/ABILITY_Stoic.svg",
		description: "If you end your turn with unused movement actions, gain +2 Bonus Moves.",
		description2: "If you end your turn with unused movement actions, gain +2 Bonus Moves, +2 Shield and +1 Brace.",
		notes: [
			{ label: "Class", content: "Tank" },
		],
	},
	{
		name: "Thorns",
		icon_path: "/assets/passives/tank/ABILITY_Thorns.svg",
		description: "Thorns 2.",
		description2: "Thorns 4. Gain +1 Thorns when you take damage.",
		notes: [
			{ label: "Class", content: "Tank" },
		],
	},
	{
		name: "Thunder Thighs",
		icon_path: "/assets/passives/tank/ABILITY_Thunder_Thighs.svg",
		description: "Trample.",
		description2: "+1 Constitution. Trample 9.",
		notes: [
			{ label: "Class", content: "Tank" },
		],
	},
	{
		name: "Toad Style",
		icon_path: "/assets/passives/tank/ABILITY_Toad_Style.svg",
		description: "+4 Speed. Your movement action is a jump. Landing on a unit deals damage and displaces it.",
		description2: "+8 Speed. Your movement action is a jump. Landing on a unit deals damage and displaces it.",
		notes: [
			{ label: "Class", content: "Tank" },
		],
	},
	{
		name: "Wide Load",
		icon_path: "/assets/passives/tank/ABILITY_Wide_Load.svg",
		description: "+1 Constitution. When an adjacent ally is targeted by an enemy, swap places with the ally.",
		description2: "+1 Constitution. When an adjacent ally is targeted by an enemy, gain +1 temp Thorns and temp Brace, then swap places with the ally.",
		notes: [
			{ label: "Class", content: "Tank" },
		],
	},
	{
		name: "Wrestlemaniac",
		icon_path: "/assets/passives/tank/ABILITY_Wrestlemaniac.svg",
		description: "+2 Speed. Your basic attack becomes Suplex when adjacent to enemies. You gain the ability Toss.",
		description2: "+2 Speed. Your basic attack is Suplex while you're next to a unit that can be suplexed and Your basic attack becomes Suplex when adjacent to enemies. +1 Bonus Move. You gain the ability Toss+.",
		notes: [
			{ label: "Class", content: "Tank" },
		],
	},
];

export default TANK_PASSIVE_OBJECTS;
