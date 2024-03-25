type LocationType = "living-room" | "kitchen" | "study-room" | "office" | "bedroom" | "outdoor";

export type FurnitureType = {
	id: number;
	name: string;
	price: number;
	img: string;
	tags: string[];
	location: LocationType[];
};

export const furnitures: FurnitureType[] = [
	{
		id: 1,
		name: "HeartWood Modern Recliner",
		price: 8000,
		img: "chair-1.jpg",
		tags: ["single", "recliner", "wood", "blue"],
		location: ["living-room"],
	},
	{
		id: 2,
		name: "HeartWood Classic Back",
		price: 6000,
		img: "chair-2.jpg",
		tags: ["single", "recliner", "wood", "black"],
		location: ["living-room", "office"],
	},
	{
		id: 3,
		name: "HeartWood Armless AL-2",
		price: 4000,
		img: "chair-3.jpg",
		tags: ["single", "basic", "wood", "gray"],
		location: ["living-room"],
	},
	{
		id: 4,
		name: "HeartWood Armless AL-3",
		price: 1000,
		img: "chair-4.jpg",
		tags: ["single", "minimal", "wood", "plastic", "black"],
		location: ["living-room", "kitchen", "office"],
	},
	{
		id: 5,
		name: "HeartWood Armless AL-4",
		price: 1500,
		img: "chair-5.jpg",
		tags: ["single", "minimal", "wood", "plastic", "black"],
		location: ["living-room", "kitchen", "office"],
	},
	{
		id: 6,
		name: "HeartWood Royal A1",
		price: 9500,
		img: "chair-6.jpg",
		tags: ["single", "classic", "wood", "white"],
		location: ["living-room", "study-room"],
	},
	{
		id: 7,
		name: "HeartWood Armless AL-4",
		price: 1500,
		img: "chair-7.jpg",
		tags: ["single", "minimal", "wood", "plastic", "white"],
		location: ["living-room", "kitchen", "office"],
	},
	{
		id: 8,
		name: "HeartWood MAXXIMUS",
		price: 3000,
		img: "chair-8.jpg",
		tags: ["single", "minimal", "wood", "plastic", "white"],
		location: ["living-room", "kitchen", "office", "study-room"],
	},
	{
		id: 9,
		name: "HeartWood Omega G16",
		price: 5000,
		img: "chair-9.jpg",
		tags: ["single", "minimal", "wood", "brown"],
		location: ["living-room", "kitchen", "office", "study-room"],
	},
	{
		id: 10,
		name: "HeartWood Royal W-2",
		price: 5000,
		img: "chair-10.jpg",
		tags: ["single", "classic", "wood", "white"],
		location: ["living-room", "study-room"],
	},
	{
		id: 11,
		name: "HeartWood Basic Stool",
		price: 600,
		img: "chair-11.jpg",
		tags: ["single", "basic", "wood", "white"],
		location: ["living-room", "study-room", "kitchen"],
	},
	{
		id: 12,
		name: "HeartWood Gamma A-3",
		price: 7000,
		img: "chair-12.jpg",
		tags: ["single", "minimal", "wood", "gray"],
		location: ["living-room", "study-room", "office"],
	},
];
