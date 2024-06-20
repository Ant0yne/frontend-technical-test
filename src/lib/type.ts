// Name for the table's columns
export type Column = "username" | "email" | "website" | "nbtodos" | "nbalbums";

// User sent by the API
export type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
};

// User with their number of todos and albums
export type UserFinal = User & {
	nbtodos: number;
	nbalbums: number;
};

// Todo sent by the API
export type Todo = {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
};

// Album sent by the API
export type TAlbum = {
	userId: number;
	id: number;
	title: string;
};

// Photo sent by the API
export type TPhotos = {
	albumId: number;
	id: number;
	title: string;
	url: string;
	thumbnailUrl: string;
};
