import type { GameObject } from "../../types";

const PSYCHIC_ACTIVE_OBJECTS: GameObject[] = [
	{
		name: "Alter DNA",
		icon_path: "assets/actives/psychic/ABILITY_Alter_DNA.svg",
		description: "Spend all your mana. Give a unit within your line of sight a random stat up for every 3 mana spent (rounded up). Give enemies random stat downs instead.",
		description2: "Spend all your mana. Give a unit within your line of sight a random stat up for every 2 mana spent (rounded up). Give enemies random stat downs instead.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "X MP" }
		]
	},
	{
		name: "Ancestral Recall",
		icon_path: "assets/actives/psychic/ABILITY_Ancestral_Recall.svg",
		description: "Upgrade one of your spells at random for the rest of the battle.",
		description2: "Target yourself or a unit within your line of sight and upgrade one of their spells at random for the rest of the battle.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "8 MP" }
		]
	},
	{
		name: "Asteroid",
		icon_path: "assets/actives/psychic/ABILITY_Asteroid.svg",
		description: "Make an asteroid fall onto a tile within your line of sight. The asteroid deals damage and leaves a rock.",
		description2: "Make an asteroid fall onto a tile within your line of sight. The asteroid deals damage, bruises and leaves a boulder.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "9 MP" }
		]
	},
	{
		name: "Become Entropy",
		icon_path: "assets/actives/psychic/ABILITY_Become_Entropy.svg",
		description: "Vaporize everything on a tile within your line of sight. Against a boss, this deals damage and inflicts Stun instead.",
		description2: "Vaporize everything on a tile within your line of sight. Against a boss, this deals massive damage and inflicts Stun instead.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "14 MP" }
		]
	},
	{
		name: "Blinding Flash",
		icon_path: "assets/actives/psychic/ABILITY_Blinding_Flash.svg",
		description: "Inflict Blind 2 on each unit near you in your line of sight.",
		description2: "Inflict Blind 2 on each enemy within five tiles of you in your line of sight.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "5 MP" }
		]
	},
	{
		name: "Chaos Swap",
		icon_path: "assets/actives/psychic/ABILITY_Chaos_Swap.svg",
		description: "Swap positions with a random unit.",
		description2: "Swap positions with a random unit. If that unit was an enemy, you inflict Confusion on it.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "2 MP" }
		]
	},
	{
		name: "Cumulative Blast",
		icon_path: "assets/actives/psychic/ABILITY_Cumulative_Blast.svg",
		description: "Deal damage to a unit in your line of sight, then increase this spell's damage by 1 for the rest of the battle.",
		description2: "Deal damage to a unit in your line of sight, then increase this spell's damage by 1 for the rest of the battle. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "6 MP" }
		]
	},
	{
		name: "Echo",
		icon_path: "assets/actives/psychic/ABILITY_Echo.svg",
		description: "Teleport to the last tile you targeted with an ability if it's empty.",
		description2: "Teleport to the last tile you targeted with an ability. Displace and damage any units on that tile.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "1 MP" }
		]
	},
	{
		name: "Extra Turn?",
		icon_path: "assets/actives/psychic/ABILITY_Extra_Turn-.svg",
		description: "Take an extra turn. You're stunned and don't regenerate mana on that turn. (This spell can't be cast on extra turns.)",
		description2: "Take an extra turn. You have a 75% chance to be stunned and don't regenerate mana on that turn. (This spell can't be cast on extra turns.)",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "4 MP" }
		]
	},
	{
		name: "Fast Forward",
		icon_path: "assets/actives/psychic/ABILITY_Fast_Forward.svg",
		description: "Every ally that hasn't taken their turn yet takes their turn right after yours. You go first next round.",
		description2: "Every ally that hasn't taken their turn yet takes their turn right after yours. Those units get +4 temporary SPEED. You go first next round.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "4 MP" }
		]
	},
	{
		name: "Flash Forward",
		icon_path: "assets/actives/psychic/ABILITY_Flash_Forward.svg",
		description: "Teleport to any tile. At the end of your turn, teleport back to your original tile and deal 10 damage to any unit you teleport into.",
		description2: "Teleport to any tile. At the end of your turn, teleport back to your original tile and deal 10 damage to any unit you teleport into. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "7 MP" }
		]
	},
	{
		name: "Flicker",
		icon_path: "assets/actives/psychic/ABILITY_Flicker.svg",
		description: "Teleport two tiles away. Displace any units you teleport into.",
		description2: "Teleport two tiles away. Displace any units you teleport into and inflict them with Confusion 2 and Blind 2.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "4 MP" }
		]
	},
	{
		name: "Flip",
		icon_path: "assets/actives/psychic/ABILITY_Flip.svg",
		description: "Turn a unit within your line of sight 180 degrees. Inflict Confusion 1 on that unit.",
		description2: "Turn a unit within your line of sight 180 degrees. Inflict Confusion 2 and Magic Weakness 1 on that unit.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "4 MP" }
		]
	},
	{
		name: "Future Sight",
		icon_path: "assets/actives/psychic/ABILITY_Future_Sight.svg",
		description: "A unit within your line of sight backflips out of the way the next time they're targeted by an enemy.",
		description2: "A unit within your line of sight backflips out of the way the next time they're targeted by an enemy. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "5 MP" }
		]
	},
	{
		name: "Glare",
		icon_path: "assets/actives/psychic/ABILITY_Glare.svg",
		description: "Inflict Madness on a unit in your line of sight.",
		description2: "Inflict Madness and Confusion on a unit in your line of sight.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "7 MP" }
		]
	},
	{
		name: "Gravity Blast",
		icon_path: "assets/actives/psychic/ABILITY_Gravity_Blast.svg",
		description: "Deal 10 Knockback to adjacent units. If you cast this from full mana, the units take 10 damage on collision.",
		description2: "Deal 10 Knockback to adjacent units. If you cast this from full mana, the units take 10 damage on collision and get stunned.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "6 MP" }
		]
	},
	{
		name: "Gravity Pull",
		icon_path: "assets/actives/psychic/ABILITY_Gravity_Pull.svg",
		description: "Pull units toward a tile within range 5.",
		description2: "Pull units in a larger area toward a tile at infinite range.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "3 MP" }
		]
	},
	{
		name: "Gravity Wave",
		icon_path: "assets/actives/psychic/ABILITY_Gravity_Wave.svg",
		description: "Deal damage with Knockback 4 and Chain Knockback in a cone.",
		description2: "Deal damage with Knockback 4, Chain Knockback and inflict Bruise 1 in a cone.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "6 MP" }
		]
	},
	{
		name: "Hallucinate",
		icon_path: "assets/actives/psychic/ABILITY_Hallucinate.svg",
		description: "Spawn a friendly illusion of a random unit that fades away after one turn.",
		description2: "Spawn a friendly illusion of a random unit that fades away after one turn. The illusion gets +4 Speed and +2 Damage.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "7 MP" }
		]
	},
	{
		name: "Increase Gravity",
		icon_path: "assets/actives/psychic/ABILITY_Increase_Gravity.svg",
		description: "Inflict Slow 1 on a unit within your line of sight. If you cast this from full mana, instead inflict Immobilize 1 and deal 6 damage.",
		description2: "Inflict Slow 1 on each unit in an area around a tile within your line of sight. If you cast this from full mana, instead inflict Immobilize 1 and deal 6 damage.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "3 MP" }
		]
	},
	{
		name: "Inversion",
		icon_path: "assets/actives/psychic/ABILITY_Inversion.svg",
		description: "Swap positions with a unit in your line of sight.",
		description2: "Swap positions with a unit in your line of sight. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "4 MP" }
		]
	},
	{
		name: "Look Away",
		icon_path: "assets/actives/psychic/ABILITY_Look_Away.svg",
		description: "Every unit within your line of sight turns away from you.",
		description2: "Every unit within your line of sight turns away from you and is inflicted with Blind 1.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "2 MP" }
		]
	},
	{
		name: "Manifest",
		icon_path: "assets/actives/psychic/ABILITY_Manifest.svg",
		description: "Teleport in a straight line into a unit within your line of sight. Deal damage and displace it.",
		description2: "Teleport into a unit within your line of sight. Deal damage and displace it.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "6 MP" }
		]
	},
	{
		name: "Mass Hysteria",
		icon_path: "assets/actives/psychic/ABILITY_Mass_Hysteria.svg",
		description: "Every enemy in your line of sight takes an extra turn. They are charmed on that turn.",
		description2: "Every enemy in your line of sight takes an extra turn. They are charmed on that turn. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "10 MP" }
		]
	},
	{
		name: "Mass Mana Leech",
		icon_path: "assets/actives/psychic/ABILITY_Mass_Mana_Leech.svg",
		description: "Inflict Mana Leech 2 and Weakness 2 on all units within 3 tiles of you.",
		description2: "Inflict Mana Leech 2 and Weakness 2 on all units within 5 tiles of you.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "5 MP" }
		]
	},
	{
		name: "Mega Grav",
		icon_path: "assets/actives/psychic/ABILITY_Mega_Grav.svg",
		description: "Damage and throw each unit near you to random tiles.",
		description2: "Damage and throw each unit in a target area to random tiles.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "5 MP" }
		]
	},
	{
		name: "Mimic",
		icon_path: "assets/actives/psychic/ABILITY_Mimic.svg",
		description: "Target an allied cat within your line of sight. Cast one of their spells at random for free (or use their basic attack if theres no good spells).",
		description2: "Target an allied cat within your line of sight. Cast one of their spells at random for free (or use their basic attack if theres no good spells). (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "7 MP" }
		]
	},
	{
		name: "Mind Control",
		icon_path: "assets/actives/psychic/ABILITY_Mind_Control.svg",
		description: "Charm an enemy within your line of sight for the rest of the battle.",
		description2: "Charm an enemy within your line of sight for the rest of the battle. That unit immediately takes an extra turn.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "15 MP" }
		]
	},
	{
		name: "Mind Meld",
		icon_path: "assets/actives/psychic/ABILITY_Mind_Meld.svg",
		description: "Give another unit an extra turn after this one. This spell can't be cast during extra turns.",
		description2: "Give another unit +10 mana and an extra turn after this one. This spell can't be cast during extra turns.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "10 MP" }
		]
	},
	{
		name: "Mindblast",
		icon_path: "assets/actives/psychic/ABILITY_Mindblast.svg",
		description: "Push away each unit near you. This inflicts Madness and has a small chance to inflict Stun.",
		description2: "Push away each unit near a target area. This inflicts Madness and has a small chance to inflict Stun.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "5 MP" }
		]
	},
	{
		name: "Mindcrack",
		icon_path: "assets/actives/psychic/ABILITY_Mindcrack.svg",
		description: "Inflict Magic Weakness 2 on all units in your line of sight.",
		description2: "Inflict Magic Weakness 2 and Confusion 1 on all non-allied units in your line of sight.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "7 MP" }
		]
	},
	{
		name: "Order",
		icon_path: "assets/actives/psychic/ABILITY_Order.svg",
		description: "Force a unit within your line of sight to move and attack one of its enemies.",
		description2: "Give a unit within your line of sight All Stats Up and force it to move and attack one of its enemies.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "8 MP" }
		]
	},
	{
		name: "Pass",
		icon_path: "assets/actives/psychic/ABILITY_Pass.svg",
		description: "Give a unit within your line of sight an extra turn immediately, then end your turn. Castable only if you haven't taken any actions this turn. (This can't be cast on extra turns.)",
		description2: "Give a unit within your line of sight an extra turn immediately, then end your turn. Castable only if you haven't taken any actions this turn other than your movement action. (This can't be cast on extra turns.)",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "3 MP" }
		]
	},
	{
		name: "Ping",
		icon_path: "assets/actives/psychic/ABILITY_Ping.svg",
		description: "Deal 1 damage to any unit within your line of sight. RELOAD: Spend mana",
		description2: "Deal 1 damage to any unit within your line of sight. RELOAD: Spend mana. Bonus Passive: +2 Intelligence.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "0 MP" }
		]
	},
	{
		name: "Psychic Choke",
		icon_path: "assets/actives/psychic/ABILITY_Psychic_Choke.svg",
		description: "Deal damage to and inflict Bruise on a unit within your line of sight.",
		description2: "Deal damage to and inflict Bruise on a unit within your line of sight. This damage counts as physical damage and scales with STRENGTH.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "5 MP" }
		]
	},
	{
		name: "Psyflutter",
		icon_path: "assets/actives/psychic/ABILITY_Psyflutter.svg",
		description: "Teleport exactly three tiles away.",
		description2: "Teleport exactly three tiles away. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "5 MP" }
		]
	},
	{
		name: "Puppet",
		icon_path: "assets/actives/psychic/ABILITY_Puppet.svg",
		description: "Force an enemy within your line of sight to attack in the direction it's facing.",
		description2: "Force a unit within your line of sight to attack in the direction it's facing.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "3 MP" }
		]
	},
	{
		name: "Read Mind",
		icon_path: "assets/actives/psychic/ABILITY_Read_Mind.svg",
		description: "Replace your spells with the spells of an ally cat until the end of the turn.",
		description2: "Replace your spells with upgraded versions of the spells of an ally cat until the end of the turn.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "3 MP" }
		]
	},
	{
		name: "Reality Scramble",
		icon_path: "assets/actives/psychic/ABILITY_Reality_Scramble.svg",
		description: "Randomize the positions of all units. Enemies get Confused.",
		description2: "Randomize the positions of all units. Enemies get Confused. Non-boss enemies have a 10% chance to be erased from existence.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "6 MP" }
		]
	},
	{
		name: "Reset",
		icon_path: "assets/actives/psychic/ABILITY_Reset.svg",
		description: "Revive all bodies, fully heal all units, and clear all status effects. (This spell can be cast only once per battle.)",
		description2: "Revive all bodies, fully heal all units, and clear all status effects. Castable while you're downed. It costs 0 mana if you're downed. (This spell can be cast only once per battle.)",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "16 MP" }
		]
	},
	{
		name: "Shatter the Sky",
		icon_path: "assets/actives/psychic/ABILITY_Shatter_the_Sky.svg",
		description: "Create floating glass shards on a tile within your line of sight.",
		description2: "Create floating glass shards in an area within your line of sight.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "5 MP" }
		]
	},
	{
		name: "Slipstream",
		icon_path: "assets/actives/psychic/ABILITY_Slipstream.svg",
		description: "Dash up to three tiles in a straight line or diagonally. Leave floating glass shards on tiles you pass through.",
		description2: "Dash up to five tiles in a straight line or diagonally. Leave floating glass shards on tiles you pass through.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "5 MP" }
		]
	},
	{
		name: "Snatch",
		icon_path: "assets/actives/psychic/ABILITY_Snatch.svg",
		description: "Collect any pickup within your line of sight.",
		description2: "Collect any pickup within your line of sight. Gain +1 Luck.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "1 MP" }
		]
	},
	{
		name: "Stasis",
		icon_path: "assets/actives/psychic/ABILITY_Stasis.svg",
		description: "Inflict Freeze on a unit within your line of sight.",
		description2: "Inflict Freeze 1, Blind 2, and Confusion 2 on a unit within your line of sight.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "8 MP" }
		]
	},
	{
		name: "Suggestion",
		icon_path: "assets/actives/psychic/ABILITY_Suggestion.svg",
		description: "Cause an enemy within your line of sight to attack another enemy if it can.",
		description2: "Cause enemies in a target area within your line of sight to each attack another enemy if they can.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "6 MP" }
		]
	},
	{
		name: "Supernova",
		icon_path: "assets/actives/psychic/ABILITY_Supernova.svg",
		description: "Deal damage to and inflict Blind on every unit within your line of sight.",
		description2: "Deal damage to and inflict Blind on every unit within your line of sight, excluding your allies.",
    unlock: "Complete The Caves with the Psychic",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "10 MP" }
		]
	},
	{
		name: "Telekinesis",
		icon_path: "assets/actives/psychic/ABILITY_Telekinesis.svg",
		description: "Push a unit within your line of sight away from you 10 tiles.",
		description2: "Push a unit within your line of sight away from you 10 tiles with Chain Knockback.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "4 MP" }
		]
	},
	{
		name: "Temporal Shards",
		icon_path: "assets/actives/psychic/ABILITY_Temporal_Shards.svg",
		description: "Give a unit within your line of sight +3 temporary Bleed Thorns until the end of its turn.",
		description2: "Give a unit within your line of sight +3 temporary Bleed Thorns until the end of its turn. If its was an ally, the Bleed Thorns last for the rest of the battle.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "7 MP" }
		]
	},
	{
		name: "Think Deep",
		icon_path: "assets/actives/psychic/ABILITY_Think_Deep.svg",
		description: "Restore all of your mana and fall asleep. (Castable once per turn.)",
		description2: "Restore all of your mana and fall asleep. (Castable once per turn. This spell costs 0 mana.)",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "5 MP" }
		]
	},
	{
		name: "Vacuum",
		icon_path: "assets/actives/psychic/ABILITY_Vacuum.svg",
		description: "Teleport all enemies within an area as close to the center of that area as possible.",
		description2: "Teleport all enemies within a large area as close to the center of that area as possible and inflict Confusion on those units.",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "5 MP" }
		]
	},
	{
		name: "Withdraw",
		icon_path: "assets/actives/psychic/ABILITY_Withdraw.svg",
		description: "Pull any unit within your line of sight to a tile adjacent to you.",
		description2: "Pull any unit within your line of sight to a tile adjacent to you. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Psychic" },
			{ label: "Cost", content: "5 MP" }
		]
	}
];

export default PSYCHIC_ACTIVE_OBJECTS;
