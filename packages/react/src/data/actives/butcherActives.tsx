import type { GameObject } from "../../types";

const BUTCHER_ACTIVE_OBJECTS: GameObject[] = [
	{
		name: "Bad Gas",
		icon_path: "assets/actives/butcher/ABILITY_Bad_Gas.svg",
		description: "Fart on a unit, inflicting Poison 3 and propelling yourself 3 tiles.",
		description2: "Fart on a unit, inflicting Poison 3 and propelling yourself ten tiles. Units in your path get trampled over.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "6" },
		],
	},
	{
		name: "Binge",
		icon_path: "assets/actives/butcher/ABILITY_Binge.svg",
		description: "Gain -1 Speed, +1 Constitution, and +1 Strength.",
		description2: "Gain -1 Speed, +1 Constitution, +1 Strength, and heal 4 HP.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "2" },
		],
	},
	{
		name: "Blood Magic",
		icon_path: "assets/actives/butcher/ABILITY_Blood_Magic.svg",
		description: "Take 5 damage and gain 5 mana. (Castable once per turn.)",
		description2: "Take 5 damage and gain 10 mana. (Castable once per turn.)",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "0" },
		],
	},
	{
		name: "Body Slam",
		icon_path: "assets/actives/butcher/ABILITY_Body_Slam.svg",
		description: "Jump to a tile within range 2. Damage both yourself and units you land on equal to 25% of your current HP.",
		description2: "Jump to a tile within range 2. Damage both yourself and units you land on equal to 25% of your current HP. This attack inflicts Bruise and has a chance to Stun.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "6" },
		],
	},
	{
		name: "Burp",
		icon_path: "assets/actives/butcher/ABILITY_Burp.svg",
		description: "Inflict Rot on a unit and it moves away from you.",
		description2: "Inflict Rot 2 and Poison 2 on a unit and it moves away from you.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "5" },
		],
	},
	{
		name: "Butcher",
		icon_path: "assets/actives/butcher/ABILITY_Butcher.svg",
		description: "Kill every unit with 3 or less health. They become meat.",
		description2: "Kill every unit with 3 or less health. They become meat. Gain 5 health for each unit killed.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "5" },
		],
	},
	{
		name: "Cannon Ball!",
		icon_path: "assets/actives/butcher/ABILITY_Cannon_Ball-.svg",
		description: "Target any tile. At the beginning of your next turn, jump to that tile. If you land on a unit, Stun it. (Castable once per turn.)",
		description2: "Target any tile. At the beginning of your next turn, jump to that tile. If you land on a unit, damage and Stun it. (This spell costs less.) (Castable once per turn.)",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Chomp",
		icon_path: "assets/actives/butcher/ABILITY_Chomp.svg",
		description: "A melee attack with Life Steal. If used on an ally, gain +1 Strength. If used on a pickup, gain double that pickup's effects.",
		description2: "A wide melee attack with Life Steal. If used on an ally, gain +1 Strength. If used on a pickup, gain double that pickup's effects.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "6" },
		],
	},
	{
		name: "Chonkwalk",
		icon_path: "assets/actives/butcher/ABILITY_Chonkwalk.svg",
		description: "Deal 5 damage to yourself. Refresh your movement action.",
		description2: "Deal 5 damage to yourself. Refresh your movement action. PASSIVE: You have Trample.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "2" },
		],
	},
	{
		name: "Consume",
		icon_path: "assets/actives/butcher/ABILITY_Consume.svg",
		description: "Collect all pickups, then become Drowsy.",
		description2: "Collect all pickups, then become Drowsy. Gain double the effects of these pickups.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "3" },
		],
	},
	{
		name: "Contaminate",
		icon_path: "assets/actives/butcher/ABILITY_Contaminate.svg",
		description: "Collect an adjacent pickup. Instead of that pickup's normal effects, add Poison 1 to your weapon for the rest of the battle.",
		description2: "Collect a pickup in range 5. Instead of that pickup's normal effects, add Poison 1 to your weapon for the rest of the battle.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "2" },
		],
	},
	{
		name: "Cough",
		icon_path: "assets/actives/butcher/ABILITY_Cough.svg",
		description: "Take 2 damage. Summon a Rot Fly.",
		description2: "Take 2 damage. Summon a Champion Rot Fly.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "3" },
		],
	},
	{
		name: "Crushinator",
		icon_path: "assets/actives/butcher/ABILITY_Crushinator.svg",
		description: "This spell only damages Shield. Cleave and inflict Stun on units with Shield. Deals 3 Knockback to units without Shield.",
		description2: "This spell only damages Shield. Cleave and inflict Stun on units with Shield. Deals 10 Knockback to units without Shield.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "6" },
		],
	},
	{
		name: "Death Wind",
		icon_path: "assets/actives/butcher/ABILITY_Death_Wind.svg",
		description: "Blow wind that inflicts Poison 4 in a cone. The cone is larger the less health you have.",
		description2: "Blow wind that inflicts Poison 4 in a cone. The cone is larger the less health you have. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "8" },
		],
	},
	{
		name: "Delicious Scent",
		icon_path: "assets/actives/butcher/ABILITY_Delicious_Scent.svg",
		description: "Inflict Attraction on all enemies within range 4.",
		description2: "Jump to a tile, then inflict Attraction on all enemies within range 4.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "10" },
		],
	},
	{
		name: "Fartoom!",
		icon_path: "assets/actives/butcher/ABILITY_Fartoom-.svg",
		description: "Lose 25% of your current HP, deal that much damage to adjacent units, and deal Knockback to them.",
		description2: "Lose 25% of your HP, deal that much damage to nearby units, and deal Knockback to them.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "5" },
		],
	},
	{
		name: "Fire Fart",
		icon_path: "assets/actives/butcher/ABILITY_Fire_Fart.svg",
		description: "Inflict Poison 2 and Burn 2 on a unit in melee range.",
		description2: "Inflict Poison 2 and Burn 2 in a small cone.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "5" },
		],
	},
	{
		name: "Force Feed",
		icon_path: "assets/actives/butcher/ABILITY_Force_Feed.svg",
		description: "Heal an adjacent unit and give that unit +1 Constitution and -1 Speed.",
		description2: "Heal a unit within range and give that unit +1 Constitution and -1 Speed.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "3" },
		],
	},
	{
		name: "Gib",
		icon_path: "assets/actives/butcher/ABILITY_Gib.svg",
		description: "Attack a unit in melee range. If this kills it, it becomes 3 food pickups.",
		description2: "Attack a unit in melee range for more damage. If this kills it, it becomes 3 food pickups.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "5" },
		],
	},
	{
		name: "Grapnel",
		icon_path: "assets/actives/butcher/ABILITY_Grapnel.svg",
		description: "Lob a hook at an object and pull yourself to it. Trample over tiles in your path.",
		description2: "Lob a hook at an object and pull yourself to it. Trample over tiles in your path. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "5" },
		],
	},
	{
		name: "Grill",
		icon_path: "assets/actives/butcher/ABILITY_Grill.svg",
		description: "Light a fire under a food pickup on any tile.",
		description2: "Light a fire under any tile.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "2" },
		],
	},
	{
		name: "Hog Rush",
		icon_path: "assets/actives/butcher/ABILITY_Hog_Rush.svg",
		description: "Trample over to a tile with meat on it.",
		description2: "Trample over to a tile with meat on it and Cleave all units in your way.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "7" },
		],
	},
	{
		name: "Hook Bind",
		icon_path: "assets/actives/butcher/ABILITY_Hook_Bind.svg",
		description: "Melee attack that immobilizes.",
		description2: "Melee attack that immobilizes and inflicts Bleed 2.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "6" },
		],
	},
	{
		name: "Lighten the Load",
		icon_path: "assets/actives/butcher/ABILITY_Lighten_the_Load.svg",
		description: "Take 25 damage. You take an extra turn after this one. (This spell can't be cast on extra turns.)",
		description2: "Take 15 damage. You take an extra turn after this one. (This spell can't be cast on extra turns.)",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "2" },
		],
	},
	{
		name: "Lodge Hook",
		icon_path: "assets/actives/butcher/ABILITY_Lodge_Hook.svg",
		description: "Inflict Bleed 10 on an adjacent unit. You can't use your weapon for the rest of the battle. (Castable once per battle.)",
		description2: "Inflict Bleed 10, Immobilize 2, and Bruise 2 on an adjacent unit. You can't use your weapon for the rest of the battle. (Castable once per battle.)",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "0" },
		],
	},
	{
		name: "Lunch Time",
		icon_path: "assets/actives/butcher/ABILITY_Lunch_Time.svg",
		description: "Jump to a food pickup in range 4.",
		description2: "Jump to any food pickup.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "3" },
		],
	},
	{
		name: "Monch",
		icon_path: "assets/actives/butcher/ABILITY_Monch.svg",
		description: "A melee attack with Lifesteal. This spell does more damage the less health you have.",
		description2: "A melee attack with Lifesteal. This spell does more damage the less health you have. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "5" },
		],
	},
	{
		name: "Mutilate",
		icon_path: "assets/actives/butcher/ABILITY_Mutilate.svg",
		description: "Attack 3-5 times for 1 damage each. These attacks inflict Bleed.",
		description2: "Attack 3-10 times for 1 damage each. These attacks inflict Bleed.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "8" },
		],
	},
	{
		name: "My Turn!",
		icon_path: "assets/actives/butcher/ABILITY_My_Turn-.svg",
		description: "Steal an allied cat's next turn for yourself.",
		description2: "Steal an allied cat's next turn for yourself. (This spell costs 1 mana.)",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Purge",
		icon_path: "assets/actives/butcher/ABILITY_Purge.svg",
		description: "Puke on the tile in front of you. You get -1 Constitution and +2 Speed.",
		description2: "Puke on a tile in range. You get -1 Constitution and +2 Speed.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "2" },
		],
	},
	{
		name: "Reflux",
		icon_path: "assets/actives/butcher/ABILITY_Reflux.svg",
		description: "Take 2 damage and gain Burn 2, then fire a projectile that spawns a lava tile at short range.",
		description2: "Take 2 damage and gain Burn 2, then fire a projectile that spawns a lava tile at long range.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "7" },
		],
	},
	{
		name: "Regurge",
		icon_path: "assets/actives/butcher/ABILITY_Regurge.svg",
		description: "Take 2 damage and spawn a food pickup.",
		description2: "Take 2 damage and spawn a big food pickup.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "3" },
		],
	},
	{
		name: "Rehook",
		icon_path: "assets/actives/butcher/ABILITY_Rehook.svg",
		description: "Refresh your weapon ability.",
		description2: "Refresh your weapon and movement action.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "3" },
		],
	},
	{
		name: "Roast",
		icon_path: "assets/actives/butcher/ABILITY_Roast.svg",
		description: "Breathe a cone of fire.",
		description2: "Breathe a larger cone of fire.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "6" },
		],
	},
	{
		name: "Rough Toss",
		icon_path: "assets/actives/butcher/ABILITY_Rough_Toss.svg",
		description: "Throw an adjacent unit to an empty tile, dealing a lot of damage to that unit.",
		description2: "Throw an adjacent unit to another tile (even if it isn't empty), dealing a lot of damage to that unit and whatever it lands on.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "6" },
		],
	},
	{
		name: "Self Harm",
		icon_path: "assets/actives/butcher/ABILITY_Self_Harm.svg",
		description: "Attack yourself with Cleave to gain +2 Strength.",
		description2: "Attack yourself at half damage with Cleave to gain +2 Strength.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "2" },
		],
	},
	{
		name: "Sharpen",
		icon_path: "assets/actives/butcher/ABILITY_Sharpen.svg",
		description: "Your weapon gains +1 damage for the rest of the battle.",
		description2: "Your weapon gains +1 damage for the rest of the battle and you gain +1 Damage.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Shred",
		icon_path: "assets/actives/butcher/ABILITY_Shred.svg",
		description: "Attack five times for 1 damage each. These attacks inflict all status effects your basic attack does.",
		description2: "Attack five times with damage that scales with STRENGTH. These attacks inflict all status effects your basic attack does.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "12" },
		],
	},
	{
		name: "Skull Bash",
		icon_path: "assets/actives/butcher/ABILITY_Skull_Bash.svg",
		description: "A range 1 dash attack that inflicts Stun and knockback. Also stuns yourself.",
		description2: "A range 4 dash attack that inflicts Stun and knockback. Has a 50% chance to Stun yourself.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "5" },
		],
	},
	{
		name: "Slice and Dice",
		icon_path: "assets/actives/butcher/ABILITY_Slice_and_Dice.svg",
		description: "Dash forward one tile and do a spin attack with Cleave, then repeat twice more.",
		description2: "Dash forward one tile and do a spin attack with Cleave, then repeat four more times.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "9" },
		],
	},
	{
		name: "Smell Blood",
		icon_path: "assets/actives/butcher/ABILITY_Smell_Blood.svg",
		description: "Until your next turn, if a unit in your attack range takes physical damage from a source that isn't you, you attack that unit.",
		description2: "Until your next turn, if a unit in your attack range takes physical damage from a source that isn't you, you attack that unit. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "7" },
		],
	},
	{
		name: "Spoil",
		icon_path: "assets/actives/butcher/ABILITY_Spoil.svg",
		description: "Turn all food pickups into Rot Flies.",
		description2: "Turn all food pickups into Rot Flies. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "6" },
		],
	},
	{
		name: "SUCC",
		icon_path: "assets/actives/butcher/ABILITY_SUCC.svg",
		description: "Collect a pickup within two tiles of you.",
		description2: "Collect all pickups within two tiles of you.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "2" },
		],
	},
	{
		name: "Swallow",
		icon_path: "assets/actives/butcher/ABILITY_Swallow.svg",
		description: "Eat a unit and take damage equal to that unit's remaining HP. You can't swallow bosses or large units.",
		description2: "Eat a unit within range 2 and take damage equal to half of that unit's remaining HP. You can't swallow bosses or large units.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Tainted Offering",
		icon_path: "assets/actives/butcher/ABILITY_Tainted_Offering.svg",
		description: "Jump to any open tile and fall asleep. While asleep, inflict Rot 1 and Poison 1 on units that contact you.",
		description2: "Jump to any open tile and fall asleep. While asleep, inflict Rot 2 and Poison 2 on units that contact you.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Track",
		icon_path: "assets/actives/butcher/ABILITY_Track.svg",
		description: "Trample one tile toward the nearest food pickup.",
		description2: "Trample two tiles toward the nearest food pickup.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "3" },
		],
	},
	{
		name: "Tromp",
		icon_path: "assets/actives/butcher/ABILITY_Tromp.svg",
		description: "Trample over one tile. If you trample over a unit, you inflict Bruise on that unit and yourself.",
		description2: "Trample over one tile. If you trample over a unit, you inflict Bruise on that unit.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "3" },
		],
	},
	{
		name: "Trudge",
		icon_path: "assets/actives/butcher/ABILITY_Trudge.svg",
		description: "Move four tiles. Costs less mana the lower your HP is.",
		description2: "Trample over four tiles. Costs less mana the lower your HP is.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "X" },
		],
	},
	{
		name: "Vurp",
		icon_path: "assets/actives/butcher/ABILITY_Vurp.svg",
		description: "Vomit up the last consumable you ate this battle and equip it. (Castable once per battle.)",
		description2: "Vomit up the last consumable you ate this battle and equip it. (Castable once per turn.)",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Yawn",
		icon_path: "assets/actives/butcher/ABILITY_Yawn.svg",
		description: "You and adjacent units fall asleep.",
		description2: "You and adjacent units fall asleep. You gain All Stats Up and heal 4.",
		notes: [
			{ label: "Class", content: "Butcher" },
			{ label: "Mana Cost", content: "5" },
		],
	},
];

export default BUTCHER_ACTIVE_OBJECTS;
