import { z } from "zod";
import { albumZod, photosZod, todoZod, userZod } from "./validations";

// Name for the table's columns
export type Column = "username" | "email" | "website" | "nbtodos" | "nbalbums";

// User sent by the API
export type User = z.infer<typeof userZod>;

// User with their number of todos and albums
export type UserFinal = User & {
	nbtodos: number;
	nbalbums: number;
};

// Todo sent by the API
export type Todo = z.infer<typeof todoZod>;

// Album sent by the API
export type TAlbum = z.infer<typeof albumZod>;

// Photo sent by the API
export type TPhotos = z.infer<typeof photosZod>;
