import type { GameObject } from "../../types";

const CLERIC_PASSIVE_OBJECTS: GameObject[] = [
	{
		name: "Alms for the Poor",
		icon_path: "/assets/passives/cleric/ABILITY_Alms_for_the_Poor.svg",
		description: "When you gain coins, all allies heal +1 HP and gain +1 Luck.",
		description2: "When you gain coins, you gain +1 Holy Shield and all allies heal HP and gain Luck equal to the number of coins gained.",
		notes: [
			{ label: "Class", content: "Cleric" },
		],
	},
	{
		name: "Angelic Inspiration",
		icon_path: "/assets/passives/cleric/ABILITY_Angelic_Inspiration.svg",
		description: "When you heal an ally, they also gain +2 mana.",
		description2: "+1 Charisma, +1 Intelligence. When you heal an ally, they also gain mana equal to half the amount healed.",
		notes: [
			{ label: "Class", content: "Cleric" },
		],
	},
	{
		name: "Blessed",
		icon_path: "/assets/passives/cleric/ABILITY_Blessed.svg",
		description: "Gain +1 to 2 random stats at the start of each turn.",
		description2: "+3 Health Regeneration. Gain +1 to 3 random stats at the start of each turn.",
		notes: [
			{ label: "Class", content: "Cleric" },
		],
	},
	{
		name: "Blessing of Holy Fire",
		icon_path: "/assets/passives/cleric/ABILITY_Blessing_of_Holy_Fire.svg",
		description: "Holy-element spells deal double damage to enemies instead of healing and inflict Burn 2. This blessing is lost when you kill a unit.",
		description2: "Holy-element spells deal triple damage to enemies instead of healing and inflict Burn 3. This blessing is lost when you kill a unit.",
		notes: [
			{ label: "Class", content: "Cleric" },
		],
	},
	{
		name: "Blessing of Spirit",
		icon_path: "/assets/passives/cleric/ABILITY_Blessing_of_Spirit.svg",
		description: "When you end your turn, you and all allies heal 2 HP and gain 2 mana. This blessing is lost when you cast a spell.",
		description2: "When you end your turn, you and all allies heal 3 HP, gain 3 mana and gain +1 to 3 random stats. This blessing is lost when you cast a spell.",
		notes: [
			{ label: "Class", content: "Cleric" },
		],
	},
	{
		name: "Breath of Life",
		icon_path: "/assets/passives/cleric/ABILITY_Breath_of_Life.svg",
		description: "When you heal a downed unit, revive it.",
		description2: "When you heal a downed unit, revive it and heal it for 3 times the number you healed.",
		notes: [
			{ label: "Class", content: "Cleric" },
		],
	},
	{
		name: "Caretaker",
		icon_path: "/assets/passives/cleric/ABILITY_Caretaker.svg",
		description: "When you heal another unit, heal yourself for half that amount.",
		description2: "When you heal another unit, heal yourself for the same amount.",
		notes: [
			{ label: "Class", content: "Cleric" },
		],
	},
	{
		name: "Enchanted Relic",
		icon_path: "/assets/passives/cleric/ABILITY_Enchanted_Relic.svg",
		description: "Your trinket's passive and active effects are doubled.",
		description2: "Your trinket's passive and active effects are tripled.",
		notes: [
			{ label: "Class", content: "Cleric" },
		],
	},
	{
		name: "Eternal",
		icon_path: "/assets/passives/cleric/ABILITY_Eternal.svg",
		description: "When you are downed for the 1st time each battle, take no injuries and revive with half HP.",
		description2: "When you are downed for the 1st time each battle, take no injuries and revive with half HP, All Stats Up 2, and immediately take an extra turn.",
		notes: [
			{ label: "Class", content: "Cleric" },
		],
	},
	{
		name: "Evil Patron",
		icon_path: "/assets/passives/cleric/ABILITY_Evil_Patron.svg",
		description: "Your healing abilities deal damage to enemies. Gain +2 range on tile-targeted healing spells.",
		description2: "Your healing abilities deal damage to enemies. Holy element damage you deal is doubled. Gain +2 range on tile-targeted healing spells.",
		notes: [
			{ label: "Class", content: "Cleric" },
		],
	},
	{
		name: "God Warrior",
		icon_path: "/assets/passives/cleric/ABILITY_God_Warrior.svg",
		description: "When you kill an enemy, gain +1 Holy Shield.",
		description2: "When you kill an enemy, gain +1 Holy Shield and refresh your movement action.",
		notes: [
			{ label: "Class", content: "Cleric" },
		],
	},
	{
		name: "Godspeed",
		icon_path: "/assets/passives/cleric/ABILITY_Godspeed.svg",
		description: "When you heal something, gain +2 Speed.",
		description2: "When you heal something, gain +4 Speed and +1 to a random stat.",
		notes: [
			{ label: "Class", content: "Cleric" },
		],
	},
	{
		name: "Healing Aura",
		icon_path: "/assets/passives/cleric/ABILITY_Healing_Aura.svg",
		description: "+1 Health Regen. Your Health Regen also applies to your allies.",
		description2: "+2 Health Regen. Your Health Regen also applies to your allies. You and your allies have uncapped HP.",
		notes: [
			{ label: "Class", content: "Cleric" },
		],
	},
	{
		name: "Heathens!",
		icon_path: "/assets/passives/cleric/ABILITY_Heathens-.svg",
		description: "At the start of the battle, inflict Weakness 3 on all enemies.",
		description2: "At the start of the battle, inflict Weakness 4 and Magic Weakness 4 on all enemies.",
		notes: [
			{ label: "Class", content: "Cleric" },
		],
	},
	{
		name: "Morale Boost",
		icon_path: "/assets/passives/cleric/ABILITY_Morale_Boost.svg",
		description: "Allies gain All Stats Up whenever you kill something.",
		description2: "Allies gain All Stats Up whenever you kill something. When you kill something, refresh your basic attack.",
		notes: [
			{ label: "Class", content: "Cleric" },
		],
	},
	{
		name: "Natural Healer",
		icon_path: "/assets/passives/cleric/ABILITY_Natural_Healer.svg",
		description: "Your heals heal for 2 extra.",
		description2: "Your heals heal for 4 extra. Start each battle at full HP.",
		notes: [
			{ label: "Class", content: "Cleric" },
		],
	},
	{
		name: "Protect the Weak",
		icon_path: "/assets/passives/cleric/ABILITY_Protect_the_Weak.svg",
		description: "Allies with 5 or fewer HP gain +50% Dodge Chance.",
		description2: "Allies with 10 or fewer HP gain +50% Dodge Chance.",
		notes: [
			{ label: "Class", content: "Cleric" },
		],
	},
	{
		name: "Purifier",
		icon_path: "/assets/passives/cleric/ABILITY_Purifier.svg",
		description: "Your basic attack removes debuffs from allies.",
		description2: "Your basic attack removes debuffs from allies and gives them All Stats Up.",
		notes: [
			{ label: "Class", content: "Cleric" },
		],
	},
	{
		name: "Ranged Medic",
		icon_path: "/assets/passives/cleric/ABILITY_Ranged_Medic.svg",
		description: "+2 Dexterity. Your basic attack is a ranged lobbed attack that heals allies and damages enemies.",
		description2: "+4 Dexterity, +2 Range. Your basic attack is a ranged lobbed attack that heals allies and damages enemies.",
		notes: [
			{ label: "Class", content: "Cleric" },
		],
	},
	{
		name: "Sharing is Caring",
		icon_path: "/assets/passives/cleric/ABILITY_Sharing_is_Caring.svg",
		description: "+2 Speed. When you pick up a non-coin pickup, allies gain the same effects.",
		description2: "+4 Speed. When you pick up a non-coin pickup, allies gain the same effects. Start each battle with pickups nearby.",
		notes: [
			{ label: "Class", content: "Cleric" },
		],
	},
	{
		name: "Thou Shalt Not Covet",
		icon_path: "/assets/passives/cleric/ABILITY_Thou_Shalt_Not_Covet.svg",
		description: "When an enemy takes damage from an ability, it drops a random pickup.",
		description2: "When an enemy takes damage from an ability, it drops 2 random pickups.",
		notes: [
			{ label: "Class", content: "Cleric" },
		],
	},
	{
		name: "Thou Shalt Not Kill",
		icon_path: "/assets/passives/cleric/ABILITY_Thou_Shalt_Not_Kill.svg",
		description: "When an enemy downs another unit, they take 10 holy damage.",
		description2: "When an enemy downs another unit, they take 10 holy damage and become Stunned.",
		notes: [
			{ label: "Class", content: "Cleric" },
		],
	},
	{
		name: "Thou Shalt Obey",
		icon_path: "/assets/passives/cleric/ABILITY_Thou_Shalt_Obey.svg",
		description: "At the end of each round, inflict Charmed on a random adjacent enemy.",
		description2: "At the end of each round, inflict Charmed on the closest enemy.",
		notes: [
			{ label: "Class", content: "Cleric" },
		],
	},
	{
		name: "Top Off",
		icon_path: "/assets/passives/cleric/ABILITY_Top_Off.svg",
		description: "When you heal another unit over their max HP, you both gain +1 Shield.",
		description2: "When you heal another unit over their max HP, you both gain +2 Shield.",
		notes: [
			{ label: "Class", content: "Cleric" },
		],
	},
	{
		name: "Venerated Touch",
		icon_path: "/assets/passives/cleric/ABILITY_Venerated_Touch.svg",
		description: "Your basic attack inflicts Confusion 2 on enemies and gives +2 Shield to allies.",
		description2: "Your basic attack inflicts Confusion 3 on enemies and has a 50% chance to Stun. It also gives +3 Shield to allies and a 50% chance for All Stats Up.",
		notes: [
			{ label: "Class", content: "Cleric" },
		],
	},
];

export default CLERIC_PASSIVE_OBJECTS;
