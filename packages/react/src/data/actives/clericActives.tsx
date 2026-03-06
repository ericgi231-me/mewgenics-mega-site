import type { GameObject } from "../../types";

const CLERIC_ACTIVE_OBJECTS: GameObject[] = [
	{
		name: "Adoubment",
		icon_path: "/assets/actives/cleric/ABILITY_Adoubment.svg",
		description: "Heal a unit and remove its debuffs. That unit gets +1 to a random stat and becomes The Alpha. If there is an Alpha, this spell has infinite range and must target it.",
		description2: "Heal or revive a unit and remove its debuffs. That unit gets +1 to 3 random stats and becomes The Alpha. If there is an Alpha, this spell has infinite range and must target it.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "5" },
		],
	},
	{
		name: "An Eye for an Eye",
		icon_path: "/assets/actives/cleric/ABILITY_An_Eye_for_an_Eye.svg",
		description: "A melee attack that inflicts Blind 5 and Bleed 1.",
		description2: "A melee attack that inflicts Blind 5, Bleed 1, and Madness 1.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "5" },
		],
	},
	{
		name: "Anoint",
		icon_path: "/assets/actives/cleric/ABILITY_Anoint.svg",
		description: "Give +2 Diminishing Health Regeneration and +1 to a random stat to an adjacent unit.",
		description2: "Give +2 Diminishing Health Regeneration and +1 to 2 random stats to any unit.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Awaken",
		icon_path: "/assets/actives/cleric/ABILITY_Awaken.svg",
		description: "Revive a body to 1 HP.",
		description2: "Revive a body to 1 HP. Give that unit +1 Holy Shield and All Stats Up.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "1" },
		],
	},
	{
		name: "Benediction",
		icon_path: "/assets/actives/cleric/ABILITY_Benediction.svg",
		description: "Heal EVERYTHING for 2 HP.",
		description2: "Heal EVERYTHING for 2 HP. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "5" },
		],
	},
	{
		name: "Blinding Lights",
		icon_path: "/assets/actives/cleric/ABILITY_Blinding_Lights.svg",
		description: "Inflict Blind 1 on each unit in an area.",
		description2: "Inflict Blind 2 on each unit in a larger area.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Booster",
		icon_path: "/assets/actives/cleric/ABILITY_Booster.svg",
		description: "Heal an adjacent unit. Excess healing is converted to an equal amount of random stat ups.",
		description2: "Heal a unit at range. Excess healing is converted to an equal amount of random stat ups.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "6" },
		],
	},
	{
		name: "Born Again",
		icon_path: "/assets/actives/cleric/ABILITY_Born_Again.svg",
		description: "Revive a body to 100% HP and give it All Stats Up, then you fall asleep.",
		description2: "Revive a body to 100% HP and give it All Stats Up.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "10" },
		],
	},
	{
		name: "Buddy Up",
		icon_path: "/assets/actives/cleric/ABILITY_Buddy_Up.svg",
		description: "Jump to an open tile next to an ally.",
		description2: "Jump to an open tile next to an ally. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Call Over",
		icon_path: "/assets/actives/cleric/ABILITY_Call_Over.svg",
		description: "Make an ally move toward you.",
		description2: "Make an ally move toward you. Infinite range.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "2" },
		],
	},
	{
		name: "Chosen Warrior",
		icon_path: "/assets/actives/cleric/ABILITY_Chosen_Warrior.svg",
		description: "Give a unit +1 Damage. That unit becomes The Alpha. If there is an Alpha, this spell must target it and it gives +1 bonus attack.",
		description2: "Give a unit +1 Damage and +1 Magic Damage. That unit becomes The Alpha. If there is an Alpha, this spell must target it and it gives +1 bonus attack. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "6" },
		],
	},
	{
		name: "Circle of Protection",
		icon_path: "/assets/actives/cleric/ABILITY_Circle_of_Protection.svg",
		description: "Give +1 Holy Shield to each unit within 2 tiles of you.",
		description2: "Give +1 Holy Shield and +1 Health Regeneration to each unit within 2 tiles of you. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "8" },
		],
	},
	{
		name: "Cleanse",
		icon_path: "/assets/actives/cleric/ABILITY_Cleanse.svg",
		description: "Remove all debuffs from units in an area.",
		description2: "Remove all debuffs from units in an area. Those units get +1 Holy Shield for each debuff removed.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "3" },
		],
	},
	{
		name: "Convert",
		icon_path: "/assets/actives/cleric/ABILITY_Convert.svg",
		description: "Inflict Charm 2 on an adjacent unit.",
		description2: "Inflict Charm 2 on an adjacent unit. Non-boss enemies with less than 25% health join your party.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "6" },
		],
	},
	{
		name: "Crusade",
		icon_path: "/assets/actives/cleric/ABILITY_Crusade.svg",
		description: "You and your allies move toward the nearest enemy.",
		description2: "You and your allies move toward the nearest enemy and gain +1 Strength.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "3" },
		],
	},
	{
		name: "Cure Wounds",
		icon_path: "/assets/actives/cleric/ABILITY_Cure_Wounds.svg",
		description: "Heal an adjacent unit.",
		description2: "Heal all adjacent units.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "5" },
		],
	},
	{
		name: "Divine Gift",
		icon_path: "/assets/actives/cleric/ABILITY_Divine_Gift.svg",
		description: "Gain All Stats Up. This spell costs 1 mana less for each HP you healed other units this turn. (Castable once per turn.)",
		description2: "Gain All Stats Up and +1 Holy Shield. This spell costs 1 mana less for each HP you healed other units this turn. (Castable once per turn.)",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "10-X" },
		],
	},
	{
		name: "Divine Protection",
		icon_path: "/assets/actives/cleric/ABILITY_Divine_Protection.svg",
		description: "Give a unit +1 Holy Shield and +1 Kinetic Spikes. That unit becomes The Alpha. If there is an Alpha, this spell costs less and must target it.",
		description2: "Give a unit anywhere +1 Holy Shield and +2 Kinetic Spikes. That unit becomes The Alpha. If there is an Alpha, this spell costs less and must target it.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "10-X*6" },
		],
	},
	{
		name: "Emergency",
		icon_path: "/assets/actives/cleric/ABILITY_Emergency.svg",
		description: "Run next to the ally with the most missing health. Trample all in the way.",
		description2: "Run next to the ally with the most missing health. Trample all in the way. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "5" },
		],
	},
	{
		name: "Enlighten",
		icon_path: "/assets/actives/cleric/ABILITY_Enlighten.svg",
		description: "Another unit's next spell is free.",
		description2: "Another unit's next spell is free. Infinite range. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "8" },
		],
	},
	{
		name: "Ethereal",
		icon_path: "/assets/actives/cleric/ABILITY_Ethereal.svg",
		description: "Gain 4 Holy Shield, 3 Shield, heal 2 HP, and Brace 1.",
		description2: "Gain Thorns 6, Reflect 5, 4 Holy Shield, 3 Shield, heal 2 HP and Brace 1.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "16" },
		],
	},
	{
		name: "Friend or Foe",
		icon_path: "/assets/actives/cleric/ABILITY_Friend_or_Foe.svg",
		description: "A ranged spell that heals allies and damages enemies.",
		description2: "An infinitely ranged spell that heals allies and damages enemies.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "5" },
		],
	},
	{
		name: "Fury Heal",
		icon_path: "/assets/actives/cleric/ABILITY_Fury_Heal.svg",
		description: "Heal an adjacent unit 2 to 6 times.",
		description2: "Heal an adjacent unit 2 to 6 times. Each heal gives +1 to a random stat.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "5" },
		],
	},
	{
		name: "Grace",
		icon_path: "/assets/actives/cleric/ABILITY_Grace.svg",
		description: "You or an adjacent unit gains a random positive effect.",
		description2: "You or an adjacent unit heals a random amount of HP, gains +1 to a random stat, and gains a random positive effect.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "3" },
		],
	},
	{
		name: "Guardian Angel",
		icon_path: "/assets/actives/cleric/ABILITY_Guardian_Angel.svg",
		description: "Make a unit The Alpha. Bonus Passive: The Alpha has +50% Dodge Chance.",
		description2: "Make a unit anywhere The Alpha. (This spell costs less.) Bonus Passive: The Alpha has +50% Dodge Chance.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "8" },
		],
	},
	{
		name: "Hallowed Ground",
		icon_path: "/assets/actives/cleric/ABILITY_Hallowed_Ground.svg",
		description: "Spawn a blessing pickup on an empty tile in range.",
		description2: "Spawn a blessing pickup on any empty tile.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "5" },
		],
	},
	{
		name: "Haste",
		icon_path: "/assets/actives/cleric/ABILITY_Haste.svg",
		description: "Give a unit +10 Speed until the end of its next turn.",
		description2: "Give units in an area +10 Speed until the end of their next turns.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "3" },
		],
	},
	{
		name: "Healing Fall",
		icon_path: "/assets/actives/cleric/ABILITY_Healing_Fall.svg",
		description: "Jump to an open tile, then heal each adjacent unit.",
		description2: "Jump to an open tile, then heal each adjacent unit. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "8" },
		],
	},
	{
		name: "Healing Salve",
		icon_path: "/assets/actives/cleric/ABILITY_Healing_Salve.svg",
		description: "You or an adjacent unit gains +1 Health Regeneration.",
		description2: "You or an adjacent unit gains +2 Health Regeneration.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Healing Word",
		icon_path: "/assets/actives/cleric/ABILITY_Healing_Word.svg",
		description: "Heal a unit at range.",
		description2: "Heal other units in an area at range.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "5" },
		],
	},
	{
		name: "Heretic Mark",
		icon_path: "/assets/actives/cleric/ABILITY_Heretic_Mark.svg",
		description: "Inflict Ostracized 2 on a unit.",
		description2: "Inflict Ostracized 4 on a unit.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "10" },
		],
	},
	{
		name: "Holy Dash",
		icon_path: "/assets/actives/cleric/ABILITY_Holy_Dash.svg",
		description: "Dash forward, heal a unit and give it a random stat up.",
		description2: "Dash forward, heal a unit and give it 3 random stat ups.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "8" },
		],
	},
	{
		name: "Holy Light",
		icon_path: "/assets/actives/cleric/ABILITY_Holy_Light.svg",
		description: "Heal allies and damage enemies in an area. This spell has half effect outside its center.",
		description2: "Heal allies and damage enemies in an area. This spell has half effect outside its center. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "12" },
		],
	},
	{
		name: "Holy Weapon",
		icon_path: "/assets/actives/cleric/ABILITY_Holy_Weapon.svg",
		description: "A dash attack with range, damage, and knockback equal to the amount of HP you healed other units this turn. (Castable once per turn.)",
		description2: "A dash attack with range, damage, and knockback equal to twice the amount of HP you healed other units this turn. (Castable once per turn.)",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "0" },
		],
	},
	{
		name: "Malaise",
		icon_path: "/assets/actives/cleric/ABILITY_Malaise.svg",
		description: "Inflict Weakness on units in an area.",
		description2: "Inflict Weakness and Poison on units in an area.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "5" },
		],
	},
	{
		name: "Open Wounds",
		icon_path: "/assets/actives/cleric/ABILITY_Open_Wounds.svg",
		description: "An attack that deals more damage the less health the target unit has. (based on their health percent)",
		description2: "An attack that deals even more damage the less health the target unit has. (based on their health percent)",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "8" },
		],
	},
	{
		name: "Pray",
		icon_path: "/assets/actives/cleric/ABILITY_Pray.svg",
		description: "Give another unit +5 Luck until the end of its next turn.",
		description2: "Give allies +5 Luck and enemies -5 Luck until the end of their next turns, in an area.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Prayer",
		icon_path: "/assets/actives/cleric/ABILITY_Prayer.svg",
		description: "Heal units in an area.",
		description2: "Heal units in a larger area. Infinite range.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Purge",
		icon_path: "/assets/actives/cleric/ABILITY_Purge.svg",
		description: "Remove all buffs from a unit.",
		description2: "Remove all buffs from a unit. Deal 3 damage to that unit for each unique status effect removed.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "3" },
		],
	},
	{
		name: "Rally",
		icon_path: "/assets/actives/cleric/ABILITY_Rally.svg",
		description: "Force a unit to attack one of its enemies.",
		description2: "Force units in an area to each attack one of their enemies.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "8" },
		],
	},
	{
		name: "Rebuke",
		icon_path: "/assets/actives/cleric/ABILITY_Rebuke.svg",
		description: "Deal damage to a unit equal to the damage that unit last dealt.",
		description2: "Deal damage to a unit equal to twice the damage that unit last dealt.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "5" },
		],
	},
	{
		name: "Reverse Damage",
		icon_path: "/assets/actives/cleric/ABILITY_Reverse_Damage.svg",
		description: "Reverse the last damage an adjacent unit took.",
		description2: "Reverse the last damage a unit within range took.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Revive",
		icon_path: "/assets/actives/cleric/ABILITY_Revive.svg",
		description: "Revive a body to 50% HP and cure one of its injuries.",
		description2: "Revive a body to 100% HP and cure one of its injuries. If it was an enemy, it gets charmed.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "8" },
		],
	},
	{
		name: "Stand In",
		icon_path: "/assets/actives/cleric/ABILITY_Stand_In.svg",
		description: "Swap positions with any unit. That unit becomes The Alpha. If there is an Alpha, this spell must target it.",
		description2: "Swap positions with any unit and heal it by 1 HP. That unit becomes The Alpha. If there is an Alpha, this spell must target it.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "2" },
		],
	},
	{
		name: "Stimulants",
		icon_path: "/assets/actives/cleric/ABILITY_Stimulants.svg",
		description: "You and adjacent units gain +2 Speed.",
		description2: "You and adjacent units gain +2 Speed and +1 Intelligence.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Swift Servant",
		icon_path: "/assets/actives/cleric/ABILITY_Swift_Servant.svg",
		description: "Give a unit +1 Bonus Move. That unit becomes The Alpha. If there is an Alpha, this spell must target it and it gives you +1 Bonus Move too.",
		description2: "Give a unit +1 Bonus Move. That unit becomes The Alpha. If there is an Alpha, this spell has infinite range, costs less and must target it, and it gives you +1 Bonus Move too.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Turn Foe",
		icon_path: "/assets/actives/cleric/ABILITY_Turn_Foe.svg",
		description: "Force a nearby unit to move away from you.",
		description2: "Force a nearby unit to move away from you. If it was an enemy, inflict Madness 1 and Confusion 1.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "2" },
		],
	},
	{
		name: "Wish",
		icon_path: "/assets/actives/cleric/ABILITY_Wish.svg",
		description: "Target an area. At the beginning of your next turn, heal all units in that area. (Castable once per turn.)",
		description2: "Target an area. At the beginning of your next turn, heal all units in that area. This spell tracks its target if you directly targeted a unit. (Castable once per turn.)",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "3" },
		],
	},
	{
		name: "Witch Hunt",
		icon_path: "/assets/actives/cleric/ABILITY_Witch_Hunt.svg",
		description: "Put a bounty on a unit. When that unit dies, its killer gains All Stats Up.",
		description2: "Put a bounty on a unit. When that unit dies, it becomes meat and its killer gains All Stats Up. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "4" },
		],
	},
	{
		name: "Wrath of God",
		icon_path: "/assets/actives/cleric/ABILITY_Wrath_of_God.svg",
		description: "Deal holy damage and inflict Blind to everything except for a safe circle around you. This vaporizes units it kills.",
		description2: "Deal holy damage and inflict Blind to all enemies. This vaporizes units it kills.",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "10" },
		],
	},
	{
		name: "Zealot",
		icon_path: "/assets/actives/cleric/ABILITY_Zealot.svg",
		description: "Gain +1 Holy Shield.",
		description2: "Gain +1 Holy Shield. (This spell costs less.)",
		notes: [
			{ label: "Class", content: "Cleric" },
			{ label: "Mana Cost", content: "7" },
		],
	},
];

export default CLERIC_ACTIVE_OBJECTS;
