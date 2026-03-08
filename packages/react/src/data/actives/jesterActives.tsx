import type { GameObject } from "../../types";

const JESTER_ACTIVE_OBJECTS: GameObject[] = [
	{
		name: "Bump",
		icon_path: "assets/actives/jester/ABILITY_Bump.svg",
		description: "Displace a target unit to a random location.",
		description2: "Displace a target unit to a random location. If it's an enemy, deal 1 damage to it.",
    unlock: "Complete The Caves with the Jester",
		notes: [
			{ label: "Class", content: "Jester" },
			{ label: "Cost", content: "1 MP" }
		]
	},
	{
		name: "Power Up",
		icon_path: "assets/actives/jester/ABILITY_Power_Up_-Jester-.svg",
		description: "Spend all of your mana and gain that many random buffs.",
		description2: "Spend all of your mana and give that many random buffs to yourself or another unit.",
    unlock: "Complete The Caves with the Jester",
		notes: [
			{ label: "Class", content: "Jester" },
			{ label: "Cost", content: "All MP" }
		]
	},
	{
		name: "RNG Cannon",
		icon_path: "assets/actives/jester/ABILITY_RNG_Cannon.svg",
		description: "Deals a random amount of damage. Requires line of sight.",
		description2: "Deals a random amount of damage and inflicts random debuffs. Requires line of sight.",
    unlock: "Complete The Caves with the Jester",
		notes: [
			{ label: "Class", content: "Jester" },
			{ label: "Cost", content: "10 MP" }
		]
	},
	{
		name: "Smart Metronome",
		icon_path: "assets/actives/jester/ABILITY_Smart_Metronome.svg",
		description: "Cast any random spell. The spell is usually good.",
		description2: "Cast any random upgraded spell. The spell is usually good.",
    unlock: "Complete The Caves with the Jester",
		notes: [
			{ label: "Class", content: "Jester" },
			{ label: "Cost", content: "5 MP" }
		]
	}
];

export default JESTER_ACTIVE_OBJECTS;
