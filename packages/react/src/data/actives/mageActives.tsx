import type { GameObject } from "../../types";

const MAGE_ACTIVE_OBJECTS: GameObject[] = [
	{
		name: "Absorb",
		icon_path: "assets/actives/mage/ABILITY_Absorb.svg",
		description: "Spend all of your mana and heal that much HP.",
		description2: "Spend all of your mana and heal that much HP. Excess healing is converted into Shield.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "X MP" },
		],
	},
	{
		name: "Black Magic",
		icon_path: "assets/actives/mage/ABILITY_Black_Magic.svg",
		description: "Drop to 1 HP. Gain mana equal to the HP lost. (Castable once per turn.)",
		description2: "Drop to 1 HP. Gain mana equal to the HP lost and gain All Stats Up 2. (Castable once per turn.)",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "0 MP" },
		],
	},
	{
		name: "Blizzard",
		icon_path: "assets/actives/mage/ABILITY_Blizzard.svg",
		description: "Deal ice damage in a wide line with Knockback 1 that inflicts Slow and has a 15% chance to Freeze.",
		description2: "Deal more ice damage in a wide line with Knockback 10 that inflicts Slow and has a 25% chance to Freeze.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "12 MP" },
		],
	},
	{
		name: "Bolt",
		icon_path: "assets/actives/mage/ABILITY_Bolt.svg",
		description: "A lightning bolt that has a 25% chance to Stun.",
		description2: "A stronger lightning bolt that has a 50% chance to Stun.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "7 MP" },
		],
	},
	{
		name: "Chain Lightning",
		icon_path: "assets/actives/mage/ABILITY_Chain_Lightning.svg",
		description: "Shoot lightning that chains randomly to other nearby units up to 2 tiles away.",
		description2: "Shoot lightning that chains randomly to other nearby enemies up to 3 tiles away.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "7 MP" },
		],
	},
	{
		name: "Chaos Teleport",
		icon_path: "assets/actives/mage/ABILITY_Chaos_Teleport.svg",
		description: "Teleport to a random tile.",
		description2: "Teleport to a random tile. Deal damage to units adjacent to the tile you teleport to.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "1 MP" },
		],
	},
	{
		name: "Chill",
		icon_path: "assets/actives/mage/ABILITY_Chill.svg",
		description: "Inflict Slow on a unit.",
		description2: "Inflict Slow on units in an area.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "3 MP" },
		],
	},
	{
		name: "Corrupt",
		icon_path: "assets/actives/mage/ABILITY_Corrupt.svg",
		description: "Injure yourself, then gain +3 Magic Damage.",
		description2: "Injure yourself, then gain +3 Magic Damage and emit a Sparkle.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "5 MP" },
		],
	},
	{
		name: "Crescendo",
		icon_path: "assets/actives/mage/ABILITY_Crescendo.svg",
		description: "This spell gains +1 damage, range and area, and -1 mana cost each time you cast a spell. This spell resets after you cast it.",
		description2: "This spell gains +1 damage, range and area, and -1 mana cost each time you cast a spell. This spell loses half its boosts after you cast it.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "6-X MP" },
		],
	},
	{
		name: "Cryo-Heal",
		icon_path: "assets/actives/mage/ABILITY_Cryo-Heal.svg",
		description: "Heal and inflict Freeze 1 on a unit in range 3.",
		description2: "Heal and inflict Freeze 1 on any unit. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "8 MP" },
		],
	},
	{
		name: "Deal with the Devil",
		icon_path: "assets/actives/mage/ABILITY_Deal_with_the_Devil.svg",
		description: "Injure yourself, then restore 15 mana. (Castable once per battle.)",
		description2: "Injure yourself, then restore all your mana. (Castable once per battle.)",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "0 MP" },
		],
	},
	{
		name: "Divide",
		icon_path: "assets/actives/mage/ABILITY_Divide.svg",
		description: "Lose Damage equal to half of your basic attack's damage, rounded up. For the rest of the battle, you can attack an extra time each turn. (This can't be cast if your basic attack's damage is 1 or less.)",
		description2: "Lose Damage equal to 1/3rd of your basic attack's damage, rounded up. For the rest of the battle, you can attack an extra time each turn. (This can't be cast if your basic attack's damage is 1 or less.)",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "3 MP" },
		],
	},
	{
		name: "Energy Blast",
		icon_path: "assets/actives/mage/ABILITY_Energy_Blast.svg",
		description: "A high damage spell that hits a single target.",
		description2: "A high damage spell that hits a single target and deals extra damage equal to your Intelligence.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "7 MP" },
		],
	},
	{
		name: "Fire Blast",
		icon_path: "assets/actives/mage/ABILITY_Fire_Blast.svg",
		description: "A fireblast that inflicts Burn 2 in an area.",
		description2: "A more damaging fireblast that inflicts Burn 3 in an area.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "7 MP" },
		],
	},
	{
		name: "Fire Surge",
		icon_path: "assets/actives/mage/ABILITY_Fire_Surge.svg",
		description: "A fire spell that increases its range, area, damage, and Burn by 1 every turn.",
		description2: "A fire spell that increases its range, area, damage, and Burn by 1 every turn. Starts stronger.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "5 MP" },
		],
	},
	{
		name: "Firebolt",
		icon_path: "assets/actives/mage/ABILITY_Firebolt.svg",
		description: "Cast a fire/electric spell that inflicts Burn 1 and has a 15% chance to inflict Stun in an X shaped area.",
		description2: "Cast a fire/electric spell that inflicts Burn 2 and has a 30% chance to inflict Stun in an X shaped area.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "8 MP" },
		],
	},
	{
		name: "Forbidden Flame",
		icon_path: "assets/actives/mage/ABILITY_Forbidden_Flame.svg",
		description: "Damage all enemies and Burn the entire map. There will be permanent consequences for casting this spell… (Castable once per battle.)",
		description2: "Heavily damage all enemies and Burn the entire map. There will be permanent consequences for casting this spell… (Castable once per battle.)",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "0 MP" },
		],
	},
	{
		name: "Forbidden Flood",
		icon_path: "assets/actives/mage/ABILITY_Forbidden_Flood.svg",
		description: "Knock back and damage all enemies, then flood the entire map. There will be permanent consequences for casting this spell… (Castable once per battle.)",
		description2: "Knock back and damage all enemies, heal all allies, then flood the entire map. There will be permanent consequences for casting this spell… (Castable once per battle.)",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "0 MP" },
		],
	},
	{
		name: "Forbidden Frost",
		icon_path: "assets/actives/mage/ABILITY_Forbidden_Frost.svg",
		description: "Apply Freeze 2 to each unit except for yourself and 1 other chosen unit. Deal 5 Damage to enemies and heal each ally 5 HP. There will be permanent consequences for casting this spell… (Castable once per battle.)",
		description2: "Apply Freeze 2 to each unit except for yourself and 1 other chosen unit. Deal 10 Damage to enemies and fully heal each ally. There will be permanent consequences for casting this spell… (Castable once per battle.)",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "0 MP" },
		],
	},
	{
		name: "Forbidden Fulmination",
		icon_path: "assets/actives/mage/ABILITY_Forbidden_Fulmination.svg",
		description: "Strike all enemies with lightning, inflicting Stun. There will be permanent consequences for casting this spell… (Castable once per battle.)",
		description2: "Strike all enemies with lightning, inflicting Stun 2. There will be permanent consequences for casting this spell… (Castable once per battle.)",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "0 MP" },
		],
	},
	{
		name: "Freezer Burn",
		icon_path: "assets/actives/mage/ABILITY_Freezer_Burn.svg",
		description: "Cast a fire/ice spell that inflicts Burn 2, Slow 2 and Knockback 2 on all units around you.",
		description2: "Cast a fire/ice spell that inflicts Burn 3, Slow 3 and Knockback 3 on all units around you in a larger area.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "8 MP" },
		],
	},
	{
		name: "Frost Blast",
		icon_path: "assets/actives/mage/ABILITY_Frost_Blast.svg",
		description: "Shoot a blast of ice in a line that freezes the first unit it hits.",
		description2: "Shoot a blast of ice in a line that freezes every unit it hits.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "4 MP" },
		],
	},
	{
		name: "Gust",
		icon_path: "assets/actives/mage/ABILITY_Gust.svg",
		description: "Knock back each unit adjacent to a chosen tile 1 space.",
		description2: "Knock back each unit adjacent to a chosen tile 3 spaces, at infinite range.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "3 MP" },
		],
	},
	{
		name: "Homing Blasts",
		icon_path: "assets/actives/mage/ABILITY_Homing_Blasts.svg",
		description: "Shoot 3 Magic Missiles at random enemies.",
		description2: "Shoot 4 Magic Missiles at random enemies.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "7 MP" },
		],
	},
	{
		name: "Hyper Beam",
		icon_path: "assets/actives/mage/ABILITY_Hyper_Beam.svg",
		description: "Target a tile. At the start of your next turn, unleash an extremely high damage mega beam on that tile. (Castable once per turn.)",
		description2: "Target a tile. At the start of your next turn, unleash an extremely high damage mega beam on that tile.",
    unlock: "Complete The Caves with the Mage",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "3 MP" },
		],
	},
	{
		name: "Ice Surge",
		icon_path: "assets/actives/mage/ABILITY_Ice_Surge.svg",
		description: "An ice spell that increases its range and Slow every turn. At 2 turns, it gains Immobilize 1. At 3 turns, it gains Freeze 1. (Current turns: {v0})",
		description2: "An ice spell that increases its range, damage, and Slow every turn. At 2 turns, it gains Immobilize 1. At 3 turns, it gains Freeze 1. (Current turns: {v0})",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "5 MP" },
		],
	},
	{
		name: "Icicle Zapper",
		icon_path: "assets/actives/mage/ABILITY_Icicle_Zapper.svg",
		description: "Shoot an ice/electric bolt in a straight line. It inflicts Slow 2, has a 25% chance to Stun and a 25% chance to Freeze.",
		description2: "Shoot 2 ice/electric bolts in a straight line. They inflict Slow 2, have a 25% chance to Stun and a 25% chance to Freeze.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "8 MP" },
		],
	},
	{
		name: "Inferno",
		icon_path: "assets/actives/mage/ABILITY_Inferno.svg",
		description: "Deal fire damage and inflict Burn 3 to all units in a large circle around you.",
		description2: "Deal more fire damage and inflict Burn 5 to all units in a large circle around you.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "12 MP" },
		],
	},
	{
		name: "Inspire",
		icon_path: "assets/actives/mage/ABILITY_Inspire.svg",
		description: "Give 2 mana to a unit.",
		description2: "Give 4 mana to a unit.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "3 MP" },
		],
	},
	{
		name: "Jolt",
		icon_path: "assets/actives/mage/ABILITY_Jolt.svg",
		description: "Shoot a lightning bolt that deals 1 damage and knocks the unit it hits 3 tiles in the direction it's facing.",
		description2: "Shoot a lightning bolt that deals 2 damage and knocks the unit it hits 6 tiles in the direction it's facing.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "3 MP" },
		],
	},
	{
		name: "Lightning Surge",
		icon_path: "assets/actives/mage/ABILITY_Lightning_Surge.svg",
		description: "An electric spell that increases its range and damage by 2 every turn, and its Stun chance by 10%.",
		description2: "An electric spell that increases its range and damage by 3 every turn, and its Stun chance by 10%.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "5 MP" },
		],
	},
	{
		name: "Magic Missile",
		icon_path: "assets/actives/mage/ABILITY_Magic_Missile.svg",
		description: "Shoot an infinite-range projectile that can't miss.",
		description2: "Shoot an infinite-range projectile that can't miss. Emit 3 Sparkles.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "5 MP" },
		],
	},
	{
		name: "Magnify",
		icon_path: "assets/actives/mage/ABILITY_Magnify.svg",
		description: "Your basic attack gains +1 range and area until the end of the turn.",
		description2: "Your basic attack gains +2 range and +1 area until the end of the turn. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "5 MP" },
		],
	},
	{
		name: "Mana Meld",
		icon_path: "assets/actives/mage/ABILITY_Mana_Meld.svg",
		description: "Give all of your mana to a unit in range 3.",
		description2: "Give all of your mana plus 2 to a unit.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "X MP" },
		],
	},
	{
		name: "Mega Blast",
		icon_path: "assets/actives/mage/ABILITY_Mega_Blast.svg",
		description: "Deal high damage in a cone.",
		description2: "Deal high damage in a larger cone.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "13 MP" },
		],
	},
	{
		name: "Meteor Storm",
		icon_path: "assets/actives/mage/ABILITY_Meteor_Storm.svg",
		description: "Summon meteors that hit random tiles in a large area. These meteors have a chance to Stun, spawn fires, or leave rocks behind.",
		description2: "Summon meteors that hit random tiles in a larger area. These meteors have a chance to Stun, spawn fires, or leave rocks behind.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "10 MP" },
		],
	},
	{
		name: "Replicate",
		icon_path: "assets/actives/mage/ABILITY_Replicate.svg",
		description: "The next spell you cast is cast twice.",
		description2: "The next spell you or another unit casts is cast twice.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "5 MP" },
		],
	},
	{
		name: "Shatter",
		icon_path: "assets/actives/mage/ABILITY_Shatter.svg",
		description: "A melee attack that instantly kills frozen units. If used on a boss, it instead removes Frozen to deal 15 damage and inflict Slow 2.",
		description2: "A spell that instantly kills frozen units in an area. If used on a boss, it instead removes Frozen to deal 15 damage and inflict Slow 2.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "4 MP" },
		],
	},
	{
		name: "Smolder",
		icon_path: "assets/actives/mage/ABILITY_Smolder.svg",
		description: "Inflict Burn 1 and +1 Speed to a unit in range.",
		description2: "Inflict Burn 1 and +1 Speed to any unit. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "3 MP" },
		],
	},
	{
		name: "Surf",
		icon_path: "assets/actives/mage/ABILITY_Surf.svg",
		description: "A water spell that deals damage and knockback in a large area.",
		description2: "A water spell that deals more damage and knockback in a larger area.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "7 MP" },
		],
	},
	{
		name: "Switch",
		icon_path: "assets/actives/mage/ABILITY_Switch.svg",
		description: "Switch positions with any unit.",
		description2: "Switch positions with any unit. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "5 MP" },
		],
	},
	{
		name: "Teach",
		icon_path: "assets/actives/mage/ABILITY_Teach.svg",
		description: "Reduce the cost of another unit's spells by 1 until the end of their turn.",
		description2: "Reduce the cost of a unit's spells by 1 until the end of their turn. This can target yourself.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "5 MP" },
		],
	},
	{
		name: "Telefrag",
		icon_path: "assets/actives/mage/ABILITY_Telefrag.svg",
		description: "Teleport onto a unit, dealing damage to yourself and that unit.",
		description2: "Teleport onto a unit, dealing damage to that unit.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "6 MP" },
		],
	},
	{
		name: "Teleport",
		icon_path: "assets/actives/mage/ABILITY_Teleport.svg",
		description: "Teleport to any tile.",
		description2: "Teleport to any tile. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "6 MP" },
		],
	},
	{
		name: "Thunderburst",
		icon_path: "assets/actives/mage/ABILITY_Thunderburst.svg",
		description: "Shoot lightning bolts in eight directions with a 15% chance to Stun.",
		description2: "Shoot stronger lightning bolts in eight directions with a 25% chance to Stun.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "12 MP" },
		],
	},
	{
		name: "Tri-Attack",
		icon_path: "assets/actives/mage/ABILITY_Tri-Attack.svg",
		description: "A Fire / Ice / Electric spell that inflicts Burn 1, Slow 1, and has a 5% chance to inflict Stun.",
		description2: "A Fire / Ice / Electric spell that inflicts Burn 1, Slow 1, and has a 5% chance to inflict Stun in an area.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "7 MP" },
		],
	},
	{
		name: "Wall of Fire",
		icon_path: "assets/actives/mage/ABILITY_Wall_of_Fire.svg",
		description: "A fire spell that inflicts Burn 1 and spawns fires in a perpendicular line.",
		description2: "A fire spell that damages, inflicts Burn 3 and spawns fires in a perpendicular line.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "8 MP" },
		],
	},
	{
		name: "Warp",
		icon_path: "assets/actives/mage/ABILITY_Warp.svg",
		description: "Teleport diagonally any distance.",
		description2: "Teleport diagonally any distance. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "4 MP" },
		],
	},
	{
		name: "Whirlpool",
		icon_path: "assets/actives/mage/ABILITY_Whirlpool.svg",
		description: "Create a whirlpool that spins units and inflicts Confusion on them.",
		description2: "Create a larger whirlpool that spins units and inflicts Confusion on them.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "7 MP" },
		],
	},
	{
		name: "Wind Slash",
		icon_path: "assets/actives/mage/ABILITY_Wind_Slash.svg",
		description: "A wind spell that hits an entire line with Knockback 1.",
		description2: "A wind spell that hits a wide line with Knockback 2.",
		notes: [
			{ label: "Class", content: "Mage" },
			{ label: "Cost", content: "4 MP" },
		],
	},
];

export default MAGE_ACTIVE_OBJECTS;
