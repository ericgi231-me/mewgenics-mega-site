import type { GameObject } from "../../types";

const DRUID_PASSIVE_OBJECTS: GameObject[] = [
   {
	   name: "Animalistic",
	   icon_path: "assets/passives/druid/ABILITY_Animalistic.svg",
		description: "Familiars you spawn gain +2 Damage. When you shapeshift, gain +1 Damage.",
		description2: "Familiars you spawn gain +2 Damage and a Bonus Attack. When you shapeshift, gain +1 Damage and refresh your basic attack.",
		notes: [
			{ label: "Class", content: "Druid" },
		],
	},
	   {
		   name: "Bark Skin",
		   icon_path: "assets/passives/druid/ABILITY_Bark_Skin.svg",
		description: "+1 Brace. When you take damage, you get +1 temporary Brace until the start of your next turn.",
		description2: "+1 Brace. When you take damage, gain +2 temporary Brace and +2 temporary Thorns until the start of your next turn.",
		notes: [
			{ label: "Class", content: "Druid" },
		],
	},
	   {
		   name: "Bouquet",
		   icon_path: "assets/passives/druid/ABILITY_Bouquet.svg",
		description: "Spawn a tall flower tile under you at the end of your turn.",
		description2: "Spawn tall flower tiles under and around you at the end of your turn.",
		notes: [
			{ label: "Class", content: "Druid" },
		],
	},
	   {
		   name: "Buddy System",
		   icon_path: "assets/passives/druid/ABILITY_Buddy_System.svg",
		description: "+1 Holy Shield. When you lose Holy Shield, your crow gains +1 Holy Shield. When your crow loses Holy Shield, gain +1 Holy Shield.",
		description2: "+1 Holy Shield. When you lose Holy Shield, all your familiars gain +1 Holy Shield. When your crow loses Holy Shield, gain +1 Holy Shield.",
		notes: [
			{ label: "Class", content: "Druid" },
		],
	},
	   {
		   name: "Empty Vessels",
		   icon_path: "assets/passives/druid/ABILITY_Empty_Vessels.svg",
		description: "Familiars you spawn have +3 Health Regeneration and +10 max health.",
		description2: "Familiars you spawn have +3 Health Regeneration and uncapped HP.",
		notes: [
			{ label: "Class", content: "Druid" },
		],
	},
	   {
		   name: "Encore",
		   icon_path: "assets/passives/druid/ABILITY_Encore.svg",
		description: "When you use a musical ability, refresh your basic action.",
		description2: "+2 Charisma. Your musical spells cost 1 less mana. When you use a musical ability, refresh your basic action.",
		notes: [
			{ label: "Class", content: "Druid" },
		],
	},
	   {
		   name: "Feral",
		   icon_path: "assets/passives/druid/ABILITY_Feral.svg",
		description: "+3 Strength, +1 Constitution. Your bonus ability is Feral Attack.",
		description2: "+4 Strength, +2 Constitution, +2 Speed. Your bonus ability is Feral Attack.",
		notes: [
			{ label: "Class", content: "Druid" },
		],
	},
	   {
		   name: "Flower Power",
		   icon_path: "assets/passives/druid/ABILITY_Flower_Power.svg",
		description: "Units on flower tiles have +2 Strength and +2 Brace. When you move, plant flowers on the tile you moved from.",
		description2: "Units on flower tiles have +2 Strength and +2 Brace. When you move, plant flowers on all tiles you move through.",
		notes: [
			{ label: "Class", content: "Druid" },
		],
	},
	   {
		   name: "Good Vibrations",
		   icon_path: "assets/passives/druid/ABILITY_Good_Vibrations.svg",
		description: "Allies have +1 Health Regeneration and +1 Mana Regeneration.",
		description2: "Allies have +2 Health Regeneration and +2 Mana Regeneration.",
		notes: [
			{ label: "Class", content: "Druid" },
		],
	},
	   {
		   name: "Like a Fish",
		   icon_path: "assets/passives/druid/ABILITY_Like_a_Fish.svg",
		description: "Water tiles don't Slow you down. Gain +1 Holy Shield at the end of the turn if you're Wet and have no Holy Shield. Familiars you spawn also have this passive.",
		description2: "Water tiles don't Slow you down. Gain +1 Holy Shield at the end of the turn if you're Wet and have no Holy Shield. Gain +1 Health Regeneration. Familiars you spawn also have this passive.",
		notes: [
			{ label: "Class", content: "Druid" },
		],
	},
	   {
		   name: "Love Song",
		   icon_path: "assets/passives/druid/ABILITY_Love_Song.svg",
		description: "Your basic action has +2 area, and heals 1 additional HP.",
		description2: "Your basic action has +2 area, and heals 2 additional HP. The Damage your basic action grants lasts until the end of the battle.",
		notes: [
			{ label: "Class", content: "Druid" },
		],
	},
	   {
		   name: "Maestro",
		   icon_path: "assets/passives/druid/ABILITY_Maestro.svg",
		description: "Your musical spells cost 50% less mana.",
		description2: "Your musical spells cost 50% less mana. When you use a musical spell, heal 1 HP and gain +1 to a random stat.",
		notes: [
			{ label: "Class", content: "Druid" },
		],
	},
	   {
		   name: "Mega Minions",
		   icon_path: "assets/passives/druid/ABILITY_Mega_Minions.svg",
		description: "Every 3rd familiar you spawn is upgraded into a Champion.",
		description2: "The 1st and every 3rd familiar you spawn are upgraded into a Champion. (The first familiar you spawn is likely your Crow.)",
		notes: [
			{ label: "Class", content: "Druid" },
		],
	},
	   {
		   name: "Nature's Guidance",
		   icon_path: "assets/passives/druid/ABILITY_Nature-s_Guidance.svg",
		description: "Allied familiars are immune to damage from tiles, knockback, Thorns, and Trample.",
		description2: "Allied familiars are immune to damage from tiles, knockback, Thorns, and Trample. Familiars you spawn gain +1 Holy Shield.",
		notes: [
			{ label: "Class", content: "Druid" },
		],
	},
	   {
		   name: "Pathfinder",
		   icon_path: "assets/passives/druid/ABILITY_Pathfinder.svg",
		description: "Grass tiles are free to move through for you and familiars you spawn. Plant grass as you walk.",
		description2: "Grass tiles are free to move through for you and familiars you spawn. Gain +1 HP when moving through grass tiles. Plant grass as you walk.",
		notes: [
			{ label: "Class", content: "Druid" },
		],
	},
	   {
		   name: "Poison Ivy",
		   icon_path: "assets/passives/druid/ABILITY_Poison_Ivy.svg",
		description: "You and familiar you spawn are Poisonous.",
		description2: "+2 Constitution. You and familiar you spawn have Poisonous 2.",
		notes: [
			{ label: "Class", content: "Druid" },
		],
	},
	   {
		   name: "Rap God",
		   icon_path: "assets/passives/druid/ABILITY_Rap_God.svg",
		description: "Your basic action also gives temporary +4 Speed.",
		description2: "Your basic action also gives temporary +4 Speed, enemies gain Confusion 2 instead.",
		notes: [
			{ label: "Class", content: "Druid" },
		],
	},
	   {
		   name: "Sneak Attack",
		   icon_path: "assets/passives/druid/ABILITY_Sneak_Attack.svg",
		description: "Your spells that spawn familiars cost -3 mana. Familiars spawned by your spells gain +2 Damage and +2 Movement, but die after their first turn.",
		description2: "Your spells that spawn familiars cost -3 mana. Familiars spawned by your spells gain +4 Damage and +4 Movement, but die after their first turn.",
		notes: [
			{ label: "Class", content: "Druid" },
		],
	},
	   {
		   name: "Suicide Squad",
		   icon_path: "assets/passives/druid/ABILITY_Suicide_Squad.svg",
		description: "Your controllable familiars gain Self Destruct as their bonus ability.",
		description2: "Your controllable familiars gain Self Destruct+ as their bonus ability.",
		notes: [
			{ label: "Class", content: "Druid" },
		],
	},
	   {
		   name: "Super Crow!",
		   icon_path: "assets/passives/druid/ABILITY_Super_Crow-.svg",
		description: "Your crow has its abilities upgraded.",
		description2: "Your crow has its abilities upgraded… Twice!",
		notes: [
			{ label: "Class", content: "Druid" },
		],
	},
	   {
		   name: "Super Friends",
		   icon_path: "assets/passives/druid/ABILITY_Super_Friends.svg",
		description: "Familiars spawned by spells gain All Stats Up 2, but that spell gets disabled until the spawned familiars die.",
		description2: "Familiars spawned by spells gain All Stats Up 2, but that spell gets disabled until the spawned familiars die. Your spawning spells cost 50% less mana.",
		notes: [
			{ label: "Class", content: "Druid" },
		],
	},
	   {
		   name: "Teamwork",
		   icon_path: "assets/passives/druid/ABILITY_Teamwork.svg",
		description: "When one of your familiars kills something, all allies get +1 Damage.",
		description2: "When one of your familiars kills something, all allies get +1 Damage and heal 5 health.",
		notes: [
			{ label: "Class", content: "Druid" },
		],
	},
	   {
		   name: "Versatile Vocalist",
		   icon_path: "assets/passives/druid/ABILITY_Versatile_Vocalist.svg",
		description: "Your basic action deals 1 damage to enemies, and inflicts temporary -1 Damage. Your basic attack wont apply debuffs to allies or buffs to enemies.",
		description2: "Your basic action has +1 area, deals 1 damage to enemies, and inflicts temporary -1 Damage. Your basic attack wont apply debuffs to allies or buffs to enemies.",
		notes: [
			{ label: "Class", content: "Druid" },
		],
	},
	   {
		   name: "Wild Animals",
		   icon_path: "assets/passives/druid/ABILITY_Wild_Animals.svg",
		description: "Familiars you spawn attack a random enemy within their range when they are spawned.",
		description2: "Familiars you spawn attack a random enemy within their range when they're spawned, then they take an extra turn.",
		notes: [
			{ label: "Class", content: "Druid" },
		],
	},
	   {
		   name: "Wild Style",
		   icon_path: "assets/passives/druid/ABILITY_Wild_Style.svg",
		description: "The first time you shapeshift each turn, gain an extra turn.",
		description2: "The first time you shapeshift each turn, gain All Stats Up and an extra turn.",
		notes: [
			{ label: "Class", content: "Druid" },
		],
	},
];

export default DRUID_PASSIVE_OBJECTS;
