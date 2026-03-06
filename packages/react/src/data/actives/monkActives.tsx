import type { GameObject } from "../../types";

const MONK_ACTIVE_OBJECTS: GameObject[] = [
	{
		name: "Air Burst",
		icon_path: "assets/actives/monk/ABILITY_Air_Burst.svg",
		description: "A burst of air that knocks back units diagonally from the target.",
		description2: "A large burst of air that knocks back units diagonally from the target.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "3" }
		]
	},
	{
		name: "Anneal",
		icon_path: "assets/actives/monk/ABILITY_Anneal.svg",
		description: "Gain +1 Shield. This spell costs 0 mana the first time you cast it each turn.",
		description2: "Gain +1 Shield. This spell costs 0 mana the first time you cast it each turn, and after each time you spend mana on another spell.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "3" }
		]
	},
	{
		name: "Bruise",
		icon_path: "assets/actives/monk/ABILITY_Bruise.svg",
		description: "Your basic attack inflicts Bruise until the end of the turn. (Castable once per turn.)",
		description2: "Your basic attack inflicts Bruise until the end of the turn.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "6" }
		]
	},
	{
		name: "Cartwheel",
		icon_path: "assets/actives/monk/ABILITY_Cartwheel.svg",
		description: "Roll up to 4 tiles diagonally.",
		description2: "Roll up to 4 tiles diagonally or in a straight line.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "4" }
		]
	},
	{
		name: "Charge Fists",
		icon_path: "assets/actives/monk/ABILITY_Charge_Fists.svg",
		description: "Until end of turn, your basic attack emits +1 Sparkle.",
		description2: "Until end of turn, your basic attack emits +1 Sparkle. Refresh your basic attack.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "3" }
		]
	},
	{
		name: "Charge Spirit Bomb",
		icon_path: "assets/actives/monk/ABILITY_Charge_Spirit_Bomb.svg",
		description: "Begin charging a spirit bomb. This ability becomes Throw Spirit Bomb. Allies gain the bonus ability Donate Energy until you throw it.",
		description2: "Begin charging a spirit bomb. This ability becomes Throw Spirit Bomb. Allies gain the bonus ability Donate Energy+ until you throw it.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "0" }
		]
	},
	{
		name: "Combo Pull",
		icon_path: "assets/actives/monk/ABILITY_Combo_Pull.svg",
		description: "A ranged attack that pulls the unit it hits toward you. When this hits, switch into melee stance and refresh your basic attack.",
		description2: "A ranged attack that pulls the unit it hits toward you. When this hits, switch into melee stance and refresh your basic attack. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "6" }
		]
	},
	{
		name: "Combo Throw",
		icon_path: "assets/actives/monk/ABILITY_Combo_Throw.svg",
		description: "A melee attack with Knockback 3. When this hits, switch into ranged stance and refresh your basic attack.",
		description2: "A melee attack with Knockback 3. When this hits, switch into ranged stance and refresh your basic attack. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "6" }
		]
	},
	{
		name: "Deep Dive",
		icon_path: "assets/actives/monk/ABILITY_Deep_Dive.svg",
		description: "Become downed. You don't get injured. At the end of the next round, you're revived with 1 HP, 15 Shield, and All Stats Up.",
		description2: "Become downed. You don't get injured. At the end of the next round, you're revived with 50% HP, 20 Shield, 2 Holy Shield, and All Stats Up 2.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "0" }
		]
	},
	{
		name: "Double Dragon",
		icon_path: "assets/actives/monk/ABILITY_Double_Dragon.svg",
		description: "Summon a 1 HP illusion of yourself within three tiles that mimics your basic attack, but in the opposite direction of you. It dies at the end of your turn.",
		description2: "Summon a 1 HP illusion of yourself on any tile that mimics your basic attack, but in the opposite direction of you. It dies at the end of your turn.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "5" }
		]
	},
	{
		name: "Dragon Punch",
		icon_path: "assets/actives/monk/ABILITY_Dragon_Punch.svg",
		description: "A magic damage melee attack with knockback 3 that inflicts Confusion.",
		description2: "A strong magic damage melee attack with knockback 10 that inflicts Confusion.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "7" }
		]
	},
	{
		name: "Empty Mind",
		icon_path: "assets/actives/monk/ABILITY_Empty_Mind.svg",
		description: "You can't cast spells for the rest of the battle. For the rest of the battle, whenever you kill an enemy, take an extra turn.",
		description2: "You can't cast spells for the rest of the battle. For the rest of the battle, whenever you kill an enemy, take an extra turn. Get an extra turn when you cast this.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "0" }
		]
	},
	{
		name: "Finisher",
		icon_path: "assets/actives/monk/ABILITY_Finisher.svg",
		description: "Dash forward three tiles and attack. This deals 2 damage for each action you've taken this turn. (Castable once per turn.)",
		description2: "Dash forward three tiles and attack. This deals 2 damage for each action you've taken this turn. (This spell costs 0 mana. Castable once per turn.)",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "6" }
		]
	},
	{
		name: "Fist of Fate",
		icon_path: "assets/actives/monk/ABILITY_Fist_of_Fate.svg",
		description: "Teleport next to a random enemy, then switch to melee stance and automatically attack it.",
		description2: "Teleport next to a random enemy, then switch to melee stance and automatically attack it. This has a chance to repeat multiple times.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "5" }
		]
	},
	{
		name: "Five Point Palm Exploding Heart Technique",
		icon_path: "assets/actives/monk/ABILITY_Five_Point_Palm_Exploding_Heart_Technique.svg",
		description: "A melee attack that causes a unit to die at the end of its next turn. Bosses fall asleep at the end of their next turn instead.",
		description2: "A melee attack that causes a unit to die at the end of its next turn. Bosses fall asleep at the end of their next turn instead. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "7" }
		]
	},
	{
		name: "Flying Fist",
		icon_path: "assets/actives/monk/ABILITY_Flying_Fist.svg",
		description: "A melee attack with knockback that hits two tiles away from you. This spell's range is increased by 1 each time you use it on the same turn.",
		description2: "A melee attack with knockback that hits two tiles away from you. This spell's range is increased by 1 and mana cost decreased by 1 each time you use it on the same turn.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "5" }
		]
	},
	{
		name: "Hadouken",
		icon_path: "assets/actives/monk/ABILITY_Hadouken.svg",
		description: "Shoot an energy blast in a straight line.",
		description2: "Shoot a high damage energy blast in a straight line.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "9" }
		]
	},
	{
		name: "Hip Toss",
		icon_path: "assets/actives/monk/ABILITY_Hip_Toss.svg",
		description: "Throw a random adjacent unit two tiles away, dealing damage to it.",
		description2: "Throw a random adjacent unit two tiles away, dealing damage to it. This deals double damage if it's thrown onto another unit.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "3" }
		]
	},
	{
		name: "Hop n' Block",
		icon_path: "assets/actives/monk/ABILITY_Hop_n-_Block.svg",
		description: "Jump to a tile, then gain +2 Shield for each enemy adjacent to the tile you land on.",
		description2: "Jump to any tile, then gain +2 Shield for each enemy adjacent to the tile you land on.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "6" }
		]
	},
	{
		name: "Hundred Hand Slap",
		icon_path: "assets/actives/monk/ABILITY_Hundred_Hand_Slap.svg",
		description: "A ten-hit multi-strike melee attack with Knockback 10 at the end of the combo.",
		description2: "A ten-hit multi-strike melee attack with Knockback 10 at the end of the combo. Each hit has a 10% chance to inflict Bruise. The final hit deals extra damage.",
    unlock: "Complete The Caves with the Monk",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "15" }
		]
	},
	{
		name: "Kamehameha",
		icon_path: "assets/actives/monk/ABILITY_Kamehameha.svg",
		description: "Fire a magic blast at a unit within 5 tiles. Requires line of sight. (Castable once per battle. If all your armor slots are empty, castable once per turn.)",
		description2: "Fire a magic blast at a unit anywhere within your line of sight. (Castable once per battle. If all your armor slots are empty, castable once per turn.)",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "0" }
		]
	},
	{
		name: "Ki Burst",
		icon_path: "assets/actives/monk/ABILITY_Ki_Burst.svg",
		description: "Deal 1 damage and knockback adjacent units. Gain +1 Shield.",
		description2: "Deal 2 damage and knockback adjacent units 2 tiles. Gain +2 Shield.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "3" }
		]
	},
	{
		name: "Kinetic Charge",
		icon_path: "assets/actives/monk/ABILITY_Kinetic_Charge.svg",
		description: "Gain +1 temporary Kinetic Spikes.",
		description2: "Gain +2 temporary Kinetic Spikes.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "3" }
		]
	},
	{
		name: "Meditate",
		icon_path: "assets/actives/monk/ABILITY_Meditate.svg",
		description: "Heal yourself for 8 HP and gain +8 Shield, All Stats Up 2, and Sleep 8.",
		description2: "Heal yourself for 8 HP and gain +8 Shield, All Stats Up 2, and Drowsy 8. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "8" }
		]
	},
	{
		name: "Nirvana",
		icon_path: "assets/actives/monk/ABILITY_Nirvana.svg",
		description: "Gain +1 Intelligence and +1 Shield. If you have 7 or more Shield, this spell costs 1 mana less.",
		description2: "Gain +1 Intelligence and +2 Shield. If you have 7 or more Shield, this spell costs 1 mana less.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "4-clamp(floor(X/7), 0, 1)" }
		]
	},
	{
		name: "Ocular Pat Down",
		icon_path: "assets/actives/monk/ABILITY_Ocular_Pat_Down.svg",
		description: "Inflict Marked and Magic Weakness 1 on a unit.",
		description2: "Inflict Marked 3 and Magic Weakness 3 on a unit.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "7" }
		]
	},
	{
		name: "One Punch",
		icon_path: "assets/actives/monk/ABILITY_One_Punch.svg",
		description: "A one-hit kill punch. Gain All Stats Down on use. This deals 25 damage to bosses instead of killing them. (Castable once per battle.)",
		description2: "A one-hit kill punch. It causes a cone of wind that deals 5 damage. Gain All Stats Down on use. This deals 25 damage to bosses instead of killing them. (Castable once per battle.)",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "0" }
		]
	},
	{
		name: "One With the Wind",
		icon_path: "assets/actives/monk/ABILITY_One_With_the_Wind.svg",
		description: "Gain +20 Movement Range until the end of the turn.",
		description2: "Gain +20 Movement Range until the end of the turn and refresh your movement action.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "6" }
		]
	},
	{
		name: "Perfect Form",
		icon_path: "assets/actives/monk/ABILITY_Perfect_Form.svg",
		description: "Gain +1 Shield for each empty armor slot you have, then switch stances.",
		description2: "Gain +1 Shield and heal 1 HP for each empty armor slot you have, then switch stances.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "4" }
		]
	},
	{
		name: "Pogo",
		icon_path: "assets/actives/monk/ABILITY_Pogo.svg",
		description: "Jump to a tile. Bounce off any unit you land on, damaging that unit.",
		description2: "Jump to a tile. Bounce off any unit you land on, damaging and Bruising that unit.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "5" }
		]
	},
	{
		name: "Porcupine",
		icon_path: "assets/actives/monk/ABILITY_Porcupine.svg",
		description: "Gain +2 temporary Brace and +2 temporary Thorns until your next turn.",
		description2: "Gain +2 temporary Brace and +2 temporary Thorns until your next turn. Also Reflect the next projectile you're hit by.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "5" }
		]
	},
	{
		name: "Position",
		icon_path: "assets/actives/monk/ABILITY_Position.svg",
		description: "Teleport exactly two tiles away, then switch stances.",
		description2: "Teleport two to four tiles away, then switch stances.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "3" }
		]
	},
	{
		name: "Propel",
		icon_path: "assets/actives/monk/ABILITY_Propel.svg",
		description: "Dash forward one tile and attack.",
		description2: "Dash forward one tile and attack, twice!",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "5" }
		]
	},
	{
		name: "Pummel",
		icon_path: "assets/actives/monk/ABILITY_Pummel.svg",
		description: "A melee attack that does 3 more damage each time you use it on the same turn. This attack inflicts all status effects your basic attack does.",
		description2: "A melee attack that does 4 more damage each time you use it on the same turn. This attack inflicts all status effects your basic attack does. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "5" }
		]
	},
	{
		name: "Quick Attack",
		icon_path: "assets/actives/monk/ABILITY_Quick_Attack.svg",
		description: "Teleport, then use your basic attack on an enemy within range. This spell's range is increased by 2 for each empty armor slot you have.",
		description2: "Teleport, then use your basic attack on an enemy within range. This spell's range is increased by 2 for each empty armor slot you have. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "7" }
		]
	},
	{
		name: "Really Fast Run",
		icon_path: "assets/actives/monk/ABILITY_Really_Fast_Run.svg",
		description: "Run in a straight line up to 4 tiles, through objects. Wind blows over tiles you run through.",
		description2: "Run diagonally or in a straight line any distance, through objects. Wind blows over tiles you run through.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "6" }
		]
	},
	{
		name: "Release Energy",
		icon_path: "assets/actives/monk/ABILITY_Release_Energy.svg",
		description: "Emit 10 Sparkles.",
		description2: "Emit 10 Sparkles. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "12" }
		]
	},
	{
		name: "Reverberate",
		icon_path: "assets/actives/monk/ABILITY_Reverberate.svg",
		description: "Gain +8 Shield and knock back adjacent units two tiles. This spell costs 3 mana less for each action you've taken this turn. (Castable once per turn.)",
		description2: "Gain +8 Shield and knock back adjacent units two tiles. This spell costs 3 mana less and grants 1 extra Shield for each action you've taken this turn. (Castable once per turn.)",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "22-X*3" }
		]
	},
	{
		name: "Sidestep",
		icon_path: "assets/actives/monk/ABILITY_Sidestep.svg",
		description: "Move one tile and gain +1 Shield.",
		description2: "Move one tile and gain +1 Shield. This spell costs 0 mana the first time you cast it each turn.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "4" }
		]
	},
	{
		name: "Slapback",
		icon_path: "assets/actives/monk/ABILITY_Slapback.svg",
		description: "A melee attack with a high critical hit chance. RELOAD: Take damage.",
		description2: "A melee attack with a 100% critical hit chance. RELOAD: Take damage.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "0" }
		]
	},
	{
		name: "Stone Fists",
		icon_path: "assets/actives/monk/ABILITY_Stone_Fists.svg",
		description: "Gain STRENGTH and DEXTERITY equal to your Shield until the end of your turn.",
		description2: "Convert your Shield to STRENGTH and DEXTERITY for the rest of the battle.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "5" }
		]
	},
	{
		name: "Summon Apprentice",
		icon_path: "assets/actives/monk/ABILITY_Summon_Apprentice.svg",
		description: "Summon a half-sized copy of yourself with half your stats. It's AI-controlled and can't use spells.",
		description2: "Summon a half-sized copy of yourself with half your stats. It's AI-controlled and CAN use spells.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "9" }
		]
	},
	{
		name: "Transcend",
		icon_path: "assets/actives/monk/ABILITY_Transcend.svg",
		description: "Cleanse your debuffs and gain +1 Shield.",
		description2: "Cleanse your debuffs and gain +1 Shield. At the end of each round, automatically cast this spell for free.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "4" }
		]
	},
	{
		name: "Unbridled Hits",
		icon_path: "assets/actives/monk/ABILITY_Unbridled_Hits.svg",
		description: "A weak melee attack that hits an extra time for each empty armor slot you have.",
		description2: "A weak melee attack that hits two extra times for each empty armor slot you have.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "5" }
		]
	},
	{
		name: "Unimpeded Lunge",
		icon_path: "assets/actives/monk/ABILITY_Unimpeded_Lunge.svg",
		description: "Dash forward X spaces, gain +X Shield, deal X damage, and deal X knockback. X is equal to the number of empty armor slots you have plus one.",
		description2: "Dash forward X spaces, gain +X Shield, deal X damage, and deal X knockback. X is equal to twice the number of empty armor slots you have.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "7" }
		]
	},
	{
		name: "Warm Up Stretch",
		icon_path: "assets/actives/monk/ABILITY_Warm_Up_Stretch.svg",
		description: "Gain +1 Dexterity, and +1 Speed. This spell costs 2 mana less for each empty armor slot you have.",
		description2: "Gain +1 Dexterity, +1 Speed and +1 Strength. This spell costs 2 mana less for each empty armor slot you have.",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "8-X*2" }
		]
	},
	{
		name: "Way of the Hare",
		icon_path: "assets/actives/monk/ABILITY_Way_of_the_Hare.svg",
		description: "For the rest of the battle, you can move an extra time each turn.",
		description2: "For the rest of the battle, you can move an extra time each turn. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "9" }
		]
	},
	{
		name: "Way of the Mantis",
		icon_path: "assets/actives/monk/ABILITY_Way_of_the_Mantis.svg",
		description: "For the rest of the battle, you can attack an extra time each turn.",
		description2: "For the rest of the battle, you can attack an extra time each turn. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "12" }
		]
	},
	{
		name: "Way of the Owl",
		icon_path: "assets/actives/monk/ABILITY_Way_of_the_Owl.svg",
		description: "For the rest of the battle, the first spell you cast each turn is cast twice.",
		description2: "For the rest of the battle, the first spell you cast each turn is cast twice. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "13" }
		]
	},
	{
		name: "Way of the Turtle",
		icon_path: "assets/actives/monk/ABILITY_Way_of_the_Turtle.svg",
		description: "Gain +1 Brace.",
		description2: "Gain +1 Brace. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Monk" },
			{ label: "Mana Cost", content: "9" }
		]
	}
];

export default MONK_ACTIVE_OBJECTS;
