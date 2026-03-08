import type { GameObject } from "../../types";

const TANK_ACTIVE_OBJECTS: GameObject[] = [
	{
		name: "Aftershock",
		icon_path: "/assets/actives/tank/ABILITY_Aftershock.svg",
		description: "All units on dirt tiles get tossed to random nearby tiles and take damage when they land.",
		description2: "All units on dirt tiles get tossed to random tiles and take damage when they land. Bonus Passive: All of your spells have Earth element.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "4 MP" },
		],
	},
	{
		name: "Anchor",
		icon_path: "/assets/actives/tank/ABILITY_Anchor.svg",
		description: "Gain +4 Brace until the next time you move.",
		description2: "Gain +4 Brace until the next time you move. Bonus Passive: Knockback immunity.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "6 MP" },
		],
	},
	{
		name: "Ass Blast",
		icon_path: "/assets/actives/tank/ABILITY_Ass_Blast.svg",
		description: "Knock back units in an area near you 2 tiles.",
		description2: "Knock back units in a larger area near you 10 tiles.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "4 MP" },
		],
	},
	{
		name: "Backbreaker",
		icon_path: "/assets/actives/tank/ABILITY_Backbreaker.svg",
		description: "A melee attack that Immobilizes.",
		description2: "A melee attack that Immobilizes and gives -2 Speed.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "6 MP" },
		],
	},
	{
		name: "Barbed Wire",
		icon_path: "/assets/actives/tank/ABILITY_Barbed_Wire.svg",
		description: "Give a unit +5 Thorns until your next turn. (You can target yourself.)",
		description2: "Give a unit or object +5 Thorns until your next turn. (You can target yourself.)",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "3 MP" },
		],
	},
	{
		name: "Batter Up",
		icon_path: "/assets/actives/tank/ABILITY_Batter_Up.svg",
		description: "Knock a unit back 10 tiles.",
		description2: "Knock a unit back 10 tiles with Chain Knockback.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "5 MP" },
		],
	},
	{
		name: "Belly Flop",
		icon_path: "/assets/actives/tank/ABILITY_Belly_Flop.svg",
		description: "Jump to a tile and Immobilize anything you land on.",
		description2: "Jump to a tile and Immobilize units in an area.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "6 MP" },
		],
	},
	{
		name: "Big Rock",
		icon_path: "/assets/actives/tank/ABILITY_Big_Rock.svg",
		description: "Drop a boulder on an adjacent tile, damaging and displacing units it lands on.",
		description2: "Drop a boulder on an adjacent tile, damaging, Stunning and displacing units it lands on.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "7 MP" },
		],
	},
	{
		name: "Body Guard",
		icon_path: "/assets/actives/tank/ABILITY_Body_Guard.svg",
		description: "The next time an ally is targeted by an enemy, switch places with that ally.",
		description2: "The next time an ally is targeted by an enemy, switch places with that ally and gain +4 Shield.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "2 MP" },
		],
	},
	{
		name: "Bowl Over",
		icon_path: "/assets/actives/tank/ABILITY_Bowl_Over.svg",
		description: "Trample over one tile diagonally.",
		description2: "Trample over two tiles diagonally with a 10% chance to inflict Stun.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "2 MP" },
		],
	},
	{
		name: "Chew",
		icon_path: "/assets/actives/tank/ABILITY_Chew.svg",
		description: "A melee attack with Lifesteal.",
		description2: "A melee attack with Lifesteal that inflicts Bleed 2 and ignores shield.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "5 MP" },
		],
	},
	{
		name: "Chew Cud",
		icon_path: "/assets/actives/tank/ABILITY_Chew_Cud.svg",
		description: "Heal yourself.",
		description2: "Heal yourself more.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "3 MP" },
		],
	},
	{
		name: "Clap",
		icon_path: "/assets/actives/tank/ABILITY_Clap.svg",
		description: "Knock 2 enemies in front of you together.",
		description2: "Knock 2 enemies in front of you together with +2 knockback damage.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "3 MP" },
		],
	},
	{
		name: "Demolish",
		icon_path: "/assets/actives/tank/ABILITY_Demolish.svg",
		description: "Turn a tile into a dirt tile, smashing any inanimate objects into rocks.",
		description2: "Turn 3 tiles into dirt tiles, smashing any inanimate objects into rocks.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "3 MP" },
		],
	},
	{
		name: "Earthquake",
		icon_path: "/assets/actives/tank/ABILITY_Earthquake.svg",
		description: "Deal damage in a cone with a 10% chance to Petrify. Has a chance to spawn rocks. (This spell spawns rocks.)",
		description2: "Deal more damage in a cone with a 20% chance to Petrify. Has a chance to spawn rocks. (This spell spawns rocks.)",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "7 MP" },
		],
	},
	{
		name: "Eat Rock",
		icon_path: "/assets/actives/tank/ABILITY_Eat_Rock.svg",
		description: "Eat a rock to gain +5 Shield and +1 Strength.",
		description2: "Eat a rock to gain +5 Shield and All Stats Up.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "1 MP" },
		],
	},
	{
		name: "Fault Line",
		icon_path: "/assets/actives/tank/ABILITY_Fault_Line.svg",
		description: "Fling all units in a straight line onto nearby tiles.",
		description2: "Fling all units in a straight line onto nearby tiles, dealing more damage.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "5 MP" },
		],
	},
	{
		name: "Fissure",
		icon_path: "/assets/actives/tank/ABILITY_Fissure.svg",
		description: "Pull all units in a wide line towards the center of that line. This has a 10% chance to Petrify.",
		description2: "Pull all units in a wide line towards the center of that line. This has a 15% chance to Petrify and spawns rocks.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "5 MP" },
		],
	},
	{
		name: "Flip Flop",
		icon_path: "/assets/actives/tank/ABILITY_Flip_Flop.svg",
		description: "Jump up to 3 tiles away, damage units you land on, then gain -1 Speed. (This spell's mana cost is equal to your SPEED. At 0 SPEED, this spell is Castable once per turn.)",
		description2: "Jump up to 4 tiles away, damage units you land on, then gain -1 Speed. If your SPEED is 0, this has increased range and damage. (This spell's mana cost is equal to your SPEED. At 0 SPEED, this spell is Castable once per turn.)",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "spd MP" },
		],
	},
	{
		name: "Full Force",
		icon_path: "/assets/actives/tank/ABILITY_Full_Force.svg",
		description: "Deal damage equal to your CONSTITUTION and inflict Stun. Also stuns yourself.",
		description2: "Deal damage equal to your CONSTITUTION and inflict Stun and Bruise 4. Also stuns yourself.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "8 MP" },
		],
	},
	{
		name: "Gang Up",
		icon_path: "/assets/actives/tank/ABILITY_Gang_Up.svg",
		description: "Toss a unit to an empty tile within 3 tiles of you, then your allies attack it if they can.",
		description2: "Toss a unit to an empty tile within 6 tiles of you and inflict Bruise, then your allies attack it if they can.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "9 MP" },
		],
	},
	{
		name: "Goad",
		icon_path: "/assets/actives/tank/ABILITY_Goad.svg",
		description: "Force an enemy to move towards you.",
		description2: "Force an enemy anywhere to move towards you. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "3 MP" },
		],
	},
	{
		name: "Gore",
		icon_path: "/assets/actives/tank/ABILITY_Gore.svg",
		description: "Dash 3 tiles, damage, inflict Bruise and throw what you hit towards your original tile.",
		description2: "Dash 10 tiles, damage, inflict Bruise and throw what you hit towards your original tile.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "5 MP" },
		],
	},
	{
		name: "Gorgon Glare",
		icon_path: "/assets/actives/tank/ABILITY_Gorgon_Glare.svg",
		description: "Inflict Petrify on all units in your line of sight.",
		description2: "Inflict Petrify on all units in your line of sight. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "10 MP" },
		],
	},
	{
		name: "Grab",
		icon_path: "/assets/actives/tank/ABILITY_Grab.svg",
		description: "Pull a unit within 2 tiles towards you, knocking it into you.",
		description2: "Pull a unit within 4 tiles towards you, knocking it into you and inflicting Grappled.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "3 MP" },
		],
	},
	{
		name: "Headbutt",
		icon_path: "/assets/actives/tank/ABILITY_Headbutt.svg",
		description: "A melee attack that inflicts Stun.",
		description2: "A melee attack that inflicts Stun. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "8 MP" },
		],
	},
	{
		name: "Intimidate",
		icon_path: "/assets/actives/tank/ABILITY_Intimidate.svg",
		description: "Inflict Fear on an adjacent unit.",
		description2: "Inflict Fear on a unit up to five tiles away.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "5 MP" },
		],
	},
	{
		name: "Iron Head",
		icon_path: "/assets/actives/tank/ABILITY_Iron_Head.svg",
		description: "Dash forward up to 3 tiles, gain +4 Shield then damage and knock back adjacent units.",
		description2: "Dash forward up to 10 tiles, gain +4 Shield then damage and knock back adjacent units with +5 knockback damage.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "6 MP" },
		],
	},
	{
		name: "Lunge",
		icon_path: "/assets/actives/tank/ABILITY_Lunge.svg",
		description: "Dash forward one tile and attack with Knockback. This spell uses up your movement action.",
		description2: "Dash forward one tile, attack with Knockback and inflict Stun. This spell uses up your movement action.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "0 MP" },
		],
	},
	{
		name: "Nudge",
		icon_path: "/assets/actives/tank/ABILITY_Nudge.svg",
		description: "Push a unit back 1 tile. (This spell costs 0 mana the first time it's used each turn.)",
		description2: "Push a unit back 10 tiles. (This spell costs 0 mana the first time it's used each turn.)",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "3 MP" },
		],
	},
	{
		name: "Pincushion",
		icon_path: "/assets/actives/tank/ABILITY_Pincushion.svg",
		description: "Gain +3 Thorns. This spell uses up your movement action.",
		description2: "Gain +3 Thorns and +1 Brace. This spell uses up your movement action.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "0 MP" },
		],
	},
	{
		name: "Plant Your Feet",
		icon_path: "/assets/actives/tank/ABILITY_Plant_Your_Feet.svg",
		description: "Gain +5 Shield and -1 Speed. If you are at 0 SPEED, instead cleanse all of your debuffs. (Castable once per turn.)",
		description2: "Gain +6 Shield and -1 Speed. If you are at 0 SPEED, instead cleanse all of your debuffs and gain All Stats Up. (Castable once per turn.)",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "0 MP" },
		],
	},
	{
		name: "Push Through",
		icon_path: "/assets/actives/tank/ABILITY_Push_Through.svg",
		description: "Trample over 2 tiles in a straight line destroying any inanimate objects.",
		description2: "Trample over 4 tiles in a straight line destroying any inanimate objects and inflicting Bruise 1 on units you Trample.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "4 MP" },
		],
	},
	{
		name: "Rock Blast",
		icon_path: "/assets/actives/tank/ABILITY_Rock_Blast.svg",
		description: "Shoot a rock forward.",
		description2: "Shoot a rock forward with Chain Knockback. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "6 MP" },
		],
	},
	{
		name: "Rock Crusher",
		icon_path: "/assets/actives/tank/ABILITY_Rock_Crusher.svg",
		description: "Jump on top of a rock, exploding it. Deal damage and knock back all adjacent units.",
		description2: "Jump on top of a rock, exploding it. Deal high damage and knock back all adjacent units.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "4 MP" },
		],
	},
	{
		name: "Rock Song",
		icon_path: "/assets/actives/tank/ABILITY_Rock_Song.svg",
		description: "Levitate all rocks. They will automatically fling towards enemies that end movement in line with them.",
		description2: "Levitate all rocks. They will automatically fling towards enemies that end movement in line with them. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "6 MP" },
		],
	},
	{
		name: "Rock Tomb",
		icon_path: "/assets/actives/tank/ABILITY_Rock_Tomb.svg",
		description: "Damage and Petrify a unit within 3 tiles of you.",
		description2: "Damage and Petrify a unit within 5 tiles of you. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "8 MP" },
		],
	},
	{
		name: "Rock Toss",
		icon_path: "/assets/actives/tank/ABILITY_Rock_Toss.svg",
		description: "Throw a rock with a 10% chance to Stun.",
		description2: "Throw a rock with a 33% chance to Stun.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "5 MP" },
		],
	},
	{
		name: "Sandstorm",
		icon_path: "/assets/actives/tank/ABILITY_Sandstorm.svg",
		description: "Start a sandstorm. (Sandstorm deals 1 damage to all units at the end of round.) If a sandstorm was already active, increase its damage by 1.",
		description2: "Start a sandstorm. (Sandstorm deals 1 damage to all units at the end of round.) If a sandstorm was already active, increase its damage by 1. (This spell costs 0 mana the first time you cast it each turn.)",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "4 MP" },
		],
	},
	{
		name: "Steelskin",
		icon_path: "/assets/actives/tank/ABILITY_Steelskin.svg",
		description: "Gain +99 Brace until your next turn, then disable this spell until you take a total of 25 damage.",
		description2: "Gain +99 Brace until your next turn, then disable this spell until you take a total of 15 damage.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "0 MP" },
		],
	},
	{
		name: "Stone Breath",
		icon_path: "/assets/actives/tank/ABILITY_Stone_Breath.svg",
		description: "Inflict Petrify on the first unit in a line.",
		description2: "Inflict Petrify and Knockback on the first unit in a line. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "6 MP" },
		],
	},
	{
		name: "Suplex",
		icon_path: "/assets/actives/tank/ABILITY_Suplex.svg",
		description: "Grab a unit in front of you and slam it into the tile behind you.",
		description2: "Grab a unit in front of you and slam it into the tile behind you, inflicting Bruise 3 and Immobile.",
    unlock: "Complete The Caves with the Tank",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "5 MP" },
		],
	},
	{
		name: "Supper",
		icon_path: "/assets/actives/tank/ABILITY_Supper.svg",
		description: "Heal 15 HP and gain -2 Speed. (Castable once per battle.)",
		description2: "Heal 15 HP, gain -2 Speed and +5 Health Regeneration. (Castable once per battle.)",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "0 MP" },
		],
	},
	{
		name: "Swap",
		icon_path: "/assets/actives/tank/ABILITY_Swap.svg",
		description: "Swap positions with any ally.",
		description2: "Swap positions with any unit.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "5 MP" },
		],
	},
	{
		name: "Tantrum",
		icon_path: "/assets/actives/tank/ABILITY_Tantrum.svg",
		description: "Hit all adjacent units, then spawn a rock.",
		description2: "Hit all adjacent and diagonally adjacent units, then spawn a rock.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "3 MP" },
		],
	},
	{
		name: "Thicken",
		icon_path: "/assets/actives/tank/ABILITY_Thicken.svg",
		description: "Gain +1 knockback damage and +1 knockback range until the end of the turn.",
		description2: "Gain +1 Constitution. Gain +1 knockback damage and +1 knockback range until the end of the turn.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "2 MP" },
		],
	},
	{
		name: "Throw Scrap",
		icon_path: "/assets/actives/tank/ABILITY_Throw_Scrap.svg",
		description: "Give +3 Shield to a unit or spawn a scrap pickup on an empty tile.",
		description2: "Give +3 Shield to units in an area and spawn scrap pickups on the empty tiles in that area.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "5 MP" },
		],
	},
	{
		name: "To the Rescue!",
		icon_path: "/assets/actives/tank/ABILITY_To_the_Rescue-.svg",
		description: "Jump to a tile adjacent to an ally. Damage and displace any units you land on.",
		description2: "Jump to a tile adjacent to an ally. Damage and displace any units you land on, or are adjacent to.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "5 MP" },
		],
	},
	{
		name: "Toss",
		icon_path: "/assets/actives/tank/ABILITY_Toss.svg",
		description: "Throw an adjacent unit to an open tile.",
		description2: "Throw an adjacent unit to a tile, dealing bonus damage if it collides with something.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "3 MP" },
		],
	},
	{
		name: "Trample Dash",
		icon_path: "/assets/actives/tank/ABILITY_Trample_Dash.svg",
		description: "Dash forward with Trample, then spawn a rock.",
		description2: "Dash forward with Trample, then spawn a rock. Deals more damage and has a 20% chance to inflict Stun.",
		notes: [
			{ label: "Class", content: "Tank" },
			{ label: "Cost", content: "6 MP" },
		],
	},
];

export default TANK_ACTIVE_OBJECTS;
