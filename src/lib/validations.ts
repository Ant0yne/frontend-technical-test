import { z } from "zod";

// User sent by the API
export const userZod = z.object({
	id: z.number(),
	name: z.string(),
	username: z.string(),
	email: z.string(),
	address: z.object({
		street: z.string(),
		suite: z.string(),
		city: z.string(),
		zipcode: z.string(),
		geo: z.object({
			lat: z.string(),
			lng: z.string(),
		}),
	}),
	phone: z.string(),
	website: z.string(),
	company: z.object({
		name: z.string(),
		catchPhrase: z.string(),
		bs: z.string(),
	}),
	XXXXXXXXXXXXXXXXXXXXXXXXXX: z.string(),
});

export const userListZod = z.array(userZod);

// Todo sent by the API
export const todoZod = z.object({
	userId: z.number(),
	id: z.number(),
	title: z.string(),
	completed: z.boolean(),
	XXXXXXXXXXXXXXXXXXXXXXXXXX: z.string(),
});

export const todoListZod = z.array(todoZod);

// Album sent by the API
export const albumZod = z.object({
	userId: z.number(),
	id: z.number(),
	title: z.string(),
	XXXXXXXXXXXXXXXXXXXXXXXXXX: z.string(),
});

export const albumListZod = z.array(albumZod);

// Photo sent by the API
export const photosZod = z.object({
	albumId: z.number(),
	id: z.number(),
	title: z.string(),
	url: z.string(),
	thumbnailUrl: z.string(),
	XXXXXXXXXXXXXXXXXXXXXXXXXX: z.string(),
});

export const photosListZod = z.array(photosZod);
