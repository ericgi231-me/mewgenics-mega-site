import type { GameObject } from "../../types";

const THIEF_ACTIVE_OBJECTS: GameObject[] = [
	{
		name: "Assassinate",
		icon_path: "/assets/actives/thief/ABILITY_Assassinate.svg",
		description: "A melee attack that can only hit from behind. This attack ignores shield and has 50% crit chance.",
		description2: "A melee attack that can only hit from behind. This attack ignores shield and has 100% crit chance. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "8" },
		],
	},
	{
		name: "Backflip",
		icon_path: "/assets/actives/thief/ABILITY_Backflip.svg",
		description: "Backflip out of the way the next time you're targeted by an enemy.",
		description2: "Backflip out of the way the next time you're targeted by an enemy. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Blur",
		icon_path: "/assets/actives/thief/ABILITY_Blur.svg",
		description: "Gain +10% Dodge Chance. Disable this spell if you have more than 65% Dodge Chance.",
		description2: "Gain +15% Dodge Chance. Disable this spell if you have more than 80% Dodge Chance.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Boost Backstab",
		icon_path: "/assets/actives/thief/ABILITY_Boost_Backstab.svg",
		description: "Until end of turn, your backstabs do +75% more damage and ignore shield.",
		description2: "Until end of turn, your backstabs do +75% more damage, ignore shield, and inflict Bleed and Poison.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Caltrops",
		icon_path: "/assets/actives/thief/ABILITY_Caltrops.svg",
		description: "Move up to 3 tiles, spreading glass shards on the tiles you walk through.",
		description2: "Move up to 5 tiles, spreading glass shards on the tiles you walk through.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Chakram",
		icon_path: "/assets/actives/thief/ABILITY_Chakram.svg",
		description: "Throw a projectile that passes through units and then returns to you. This can collect pickups.",
		description2: "Throw a projectile that passes through units and then returns to you. At its apex, it deals increased damage and always crits. This can collect pickups.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "3" },
		],
	},
	{
		name: "Cheat",
		icon_path: "/assets/actives/thief/ABILITY_Cheat.svg",
		description: "Gain temporary +5 Luck until your next turn.",
		description2: "Gain temporary +10 Luck until your next turn.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "5" },
		],
	},
	{
		name: "Coin Toss",
		icon_path: "/assets/actives/thief/ABILITY_Coin_Toss.svg",
		description: "Throw a coin that deals damage. RELOAD: Collect a coin. This spell costs more mana each additional time you use it on the same turn.",
		description2: "Throw a coin at infinite range with +50% crit chance that ignores shield. RELOAD: Collect a coin. This spell costs more mana each additional time you use it on the same turn.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "X" },
		],
	},
	{
		name: "Cut Purse",
		icon_path: "/assets/actives/thief/ABILITY_Cut_Purse.svg",
		description: "Throw a nail that knocks coins out of units it hits and ignores shield.",
		description2: "Throw 2 nails that knock coins out of units they hit and ignore shield.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Declaw",
		icon_path: "/assets/actives/thief/ABILITY_Declaw.svg",
		description: "A melee attack that inflicts -1 Damage and Bleed.",
		description2: "A 2-hit melee attack that inflicts -1 Damage and Bleed.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "3" },
		],
	},
	{
		name: "Distract",
		icon_path: "/assets/actives/thief/ABILITY_Distract.svg",
		description: "Make a unit face away from you.",
		description2: "Make any unit look away from you. This has a 33% chance to inflict Confusion.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "2" },
		],
	},
	{
		name: "Eagle Eye",
		icon_path: "/assets/actives/thief/ABILITY_Eagle_Eye.svg",
		description: "Spawn 2-3 coins on random tiles.",
		description2: "Spawn 3-7 coins on random tiles.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Fade",
		icon_path: "/assets/actives/thief/ABILITY_Fade.svg",
		description: "Gain Stealth 1.",
		description2: "Gain Stealth 2.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "10" },
		],
	},
	{
		name: "Greedstep",
		icon_path: "/assets/actives/thief/ABILITY_Greedstep.svg",
		description: "Teleport to a tile with coins on it.",
		description2: "Teleport to a tile with coins on it, then spawn 1-2 coins on random tiles.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Jitter",
		icon_path: "/assets/actives/thief/ABILITY_Jitter.svg",
		description: "Inflict Confusion 1 on each adjacent unit.",
		description2: "Inflict Confusion 1 on each unit within 3 tiles of you.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "3" },
		],
	},
	{
		name: "Loot Corpse",
		icon_path: "/assets/actives/thief/ABILITY_Loot_Corpse.svg",
		description: "Loot 1-3 coins from a body... and possibly something else? (This might destroy the body)",
		description2: "Loot 1-3 coins from a body... and possibly something else? (This might not destroy the body) (Your chance of finding 'something else' is significantly increased.)",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "3" },
		],
	},
	{
		name: "Lucky Penny",
		icon_path: "/assets/actives/thief/ABILITY_Lucky_Penny.svg",
		description: "Collect an adjacent pickup and gain +2 Luck instead of its normal effects.",
		description2: "Collect a pickup within four tiles of you. Gain +2 Luck instead of its normal effects.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "1" },
		],
	},
	{
		name: "Move Again",
		icon_path: "/assets/actives/thief/ABILITY_Move_Again.svg",
		description: "Refresh your movement action.",
		description2: "Refresh your movement action. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "5" },
		],
	},
	{
		name: "Nail Flurry",
		icon_path: "/assets/actives/thief/ABILITY_Nail_Flurry.svg",
		description: "Throw 10 1-damage nails that ignore shield.",
		description2: "Throw 10 1-damage nails that ignore shield. Throw extra nails equal to your DEXTERITY.",
    unlock: "Complete The Caves with the Thief",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "10" },
		],
	},
	{
		name: "Nightshade",
		icon_path: "/assets/actives/thief/ABILITY_Nightshade.svg",
		description: "Inflict Poison 4 on an adjacent unit.",
		description2: "Inflict Poison 4 on an adjacent unit. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "7" },
		],
	},
	{
		name: "Outskirts",
		icon_path: "/assets/actives/thief/ABILITY_Outskirts.svg",
		description: "Teleport to a tile on the edge of the map.",
		description2: "Teleport to a tile on the edge of the map. Gain +2 Damage for the rest of the turn.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Over Here, Over There",
		icon_path: "/assets/actives/thief/ABILITY_Over_Here-_Over_There.svg",
		description: "Swap positions with an ally. Swap back at the end of your turn. (Castable once per turn.)",
		description2: "Swap positions with any unit. Swap back at the end of your turn. If the unit was an enemy, inflict Confusion 1. (Castable once per turn.)",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "0" },
		],
	},
	{
		name: "Pickpocket",
		icon_path: "/assets/actives/thief/ABILITY_Pickpocket.svg",
		description: "Steal 1-3 coins from a unit and give it -1 Damage.",
		description2: "Steal 3-5 coins from a unit, give it -1 Damage, and apply some extra debuffs at random.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "3" },
		],
	},
	{
		name: "Pierce",
		icon_path: "/assets/actives/thief/ABILITY_Pierce.svg",
		description: "Gain +2 Range. Your attacks pass through units and ignore shield for the rest of the turn.",
		description2: "Gain +4 Range. Your attacks pass through units and ignore shield for the rest of the turn. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Pierce Shot",
		icon_path: "/assets/actives/thief/ABILITY_Pierce_Shot.svg",
		description: "Throw a nail that passes through units and ignores shield.",
		description2: "Throw an infinite range nail that passes through units and ignores shield.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "5" },
		],
	},
	{
		name: "Pocket Sand",
		icon_path: "/assets/actives/thief/ABILITY_Pocket_Sand.svg",
		description: "Inflict Blind on all units in a small cone.",
		description2: "Inflict Blind 2 on all units in a larger cone.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Poison Dip",
		icon_path: "/assets/actives/thief/ABILITY_Poison_Dip.svg",
		description: "Spend all your mana. For every 5 mana spent, your basic attack inflicts +1 Poison. (Castable once per battle.)",
		description2: "Spend all your mana. For every 3 mana spent, your basic attack inflicts +1 Poison. (Castable once per battle.)",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "X" },
		],
	},
	{
		name: "Poison Gas",
		icon_path: "/assets/actives/thief/ABILITY_Poison_Gas.svg",
		description: "Inflict Poison 1 on all units adjacent to you.",
		description2: "Inflict Poison 2 on all units adjacent to you (even diagonally).",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Poison Nail",
		icon_path: "/assets/actives/thief/ABILITY_Poison_Nail.svg",
		description: "Throw a nail that inflicts Poison and ignores shield.",
		description2: "Throw 2 nails that inflict Poison and ignore shield.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "3" },
		],
	},
	{
		name: "Quick Roll",
		icon_path: "/assets/actives/thief/ABILITY_Quick_Roll.svg",
		description: "Roll in a straight line up to three tiles. RELOAD: Backstab a unit.",
		description2: "Roll in a straight or diagonal line up to five tiles. RELOAD: Backstab a unit.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "0" },
		],
	},
	{
		name: "Rearm",
		icon_path: "/assets/actives/thief/ABILITY_Rearm.svg",
		description: "Refresh your basic attack.",
		description2: "Refresh your basic attack. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "7" },
		],
	},
	{
		name: "Rebound",
		icon_path: "/assets/actives/thief/ABILITY_Rebound.svg",
		description: "A melee attack that rebounds you backwards 10 tiles.",
		description2: "A melee attack that rebounds you backwards 10 tiles. Deal damage to any unit you collide with.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "3" },
		],
	},
	{
		name: "Sever Artery",
		icon_path: "/assets/actives/thief/ABILITY_Sever_Artery.svg",
		description: "A weak melee attack. If this crits, inflict Bleed 5.",
		description2: "A weak melee attack. If this crits inflict Bleed 5 and you gain All Stats Up.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Shadow",
		icon_path: "/assets/actives/thief/ABILITY_Shadow.svg",
		description: "Teleport behind a unit. Nothin' personnel, kid.",
		description2: "Teleport behind a unit. Your next action has +100% crit chance. Nothin' personnel, kid.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Shadow Shift",
		icon_path: "/assets/actives/thief/ABILITY_Shadow_Shift.svg",
		description: "Teleport exactly 2 tiles away, leaving behind a shadow that mimics your basic attack. (The shadow fades at the end of your turn.)",
		description2: "Teleport up to 3 tiles away, leaving behind a shadow that mimics your basic attack. (The shadow fades at the end of your turn.)",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "5" },
		],
	},
	{
		name: "Sharp Nail",
		icon_path: "/assets/actives/thief/ABILITY_Sharp_Nail.svg",
		description: "Throw a nail that inflicts Bleed and ignores shield.",
		description2: "Throw 2 nails that inflict Bleed and ignore shield.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "3" },
		],
	},
	{
		name: "Sharpen Nail",
		icon_path: "/assets/actives/thief/ABILITY_Sharpen_Nail.svg",
		description: "Gain +1 Dexterity and +1 Range until the end of the battle.",
		description2: "Gain +1 Dexterity and +1 Range until the end of the battle. Automatically cast this spell at the end of each round for free.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "5" },
		],
	},
	{
		name: "Skin Disguise",
		icon_path: "/assets/actives/thief/ABILITY_Skin_Disguise.svg",
		description: "Destroy an adjacent body. Enemies won't attack you until your next turn. (Castable once per turn.)",
		description2: "Destroy a body in range 3. Enemies won't attack you until your next turn. (This spell is free. Castable once per turn.)",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "3" },
		],
	},
	{
		name: "Slice",
		icon_path: "/assets/actives/thief/ABILITY_Slice.svg",
		description: "A melee attack that has all effects of your basic attack and ignores shield.",
		description2: "A melee attack that has all effects of your basic attack and ignores shield. (This spell is free the 1st time you use it each turn.)",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "6" },
		],
	},
	{
		name: "Slingshade",
		icon_path: "/assets/actives/thief/ABILITY_Slingshade.svg",
		description: "Spawn a shadow up to 3 tiles away that mimics your basic attack. (The shadow fades at the end of your turn.)",
		description2: "Spawn a shadow up to 5 tiles away that mimics your basic attack. (The shadow fades at the end of your turn.) (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "6" },
		],
	},
	{
		name: "Sneak Up",
		icon_path: "/assets/actives/thief/ABILITY_Sneak_Up.svg",
		description: "Teleport directly behind a random enemy.",
		description2: "Teleport directly behind a random enemy. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Stalk",
		icon_path: "/assets/actives/thief/ABILITY_Stalk.svg",
		description: "Target any unit. Teleport behind it at the start of your next turn. (Castable once per turn.)",
		description2: "Target any unit. Teleport behind it at the start of your next turn. (Castable once per turn. Costs 0 mana.)",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "3" },
		],
	},
	{
		name: "Steal Kidney",
		icon_path: "/assets/actives/thief/ABILITY_Steal_Kidney.svg",
		description: "A melee attack with increased critical hit chance. If this crits and your trinket slot is empty, gain a kidney, then inflict Bleed 1.",
		description2: "A melee attack with increased critical hit chance that inflicts Bleed and Bruise 1. If this crits and your trinket slot is empty, gain a kidney, then inflict Bleed 1.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Steal Luck",
		icon_path: "/assets/actives/thief/ABILITY_Steal_Luck.svg",
		description: "A weak melee attack. If this crits, inflict -1 Luck and you gain +1 Luck.",
		description2: "A weak melee attack that inflicts -1 Luck and you gain +1 Luck.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "3" },
		],
	},
	{
		name: "Steal Time",
		icon_path: "/assets/actives/thief/ABILITY_Steal_Time.svg",
		description: "A melee attack. If this crits, refresh your basic attack and movement actions.",
		description2: "A melee attack with +30% crit chance. If this crits, refresh your basic attack and movement actions.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Time Walk",
		icon_path: "/assets/actives/thief/ABILITY_Time_Walk.svg",
		description: "Take an extra turn at the end of the round. (This spell can't be cast on extra turns.)",
		description2: "Take an extra turn at the end of the round. (This spell can't be cast on extra turns. This spell costs less.)",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "10" },
		],
	},
	{
		name: "Triple Nails",
		icon_path: "/assets/actives/thief/ABILITY_Triple_Nails.svg",
		description: "Throw 3 nails straight and diagonally in front of you. These nails have the effects of your basic attack and ignore shield.",
		description2: "Throw 3 nails straight and diagonally in front of you 2 times. These nails have the effects of your basic attack and ignore shield.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Venom Barrage",
		icon_path: "/assets/actives/thief/ABILITY_Venom_Barrage.svg",
		description: "Throw a nail that inflicts Poison 1 and ignores shield at each enemy in your line of sight.",
		description2: "Throw 2 nails that inflict Poison 1 and ignore shield at each enemy in your line of sight.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "5" },
		],
	},
	{
		name: "Weakening Nail",
		icon_path: "/assets/actives/thief/ABILITY_Weakening_Nail.svg",
		description: "Throw a nail that inflicts Weakness and ignores shield.",
		description2: "Throw 2 nails that inflict Weakness and ignore shield.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "3" },
		],
	},
	{
		name: "Wind Up",
		icon_path: "/assets/actives/thief/ABILITY_Wind_Up.svg",
		description: "Gain +1 Range for the rest of the turn.",
		description2: "Gain +1 Range.",
		notes: [
			{ label: "Class", content: "Thief" },
			{ label: "Mana Cost", content: "1" },
		],
	},
];

export default THIEF_ACTIVE_OBJECTS;
