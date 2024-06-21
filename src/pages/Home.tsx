import axios from "axios";
import { useEffect, useState } from "react";

import type { TAlbum, Todo, User, UserFinal } from "../lib/type";
import { albumListZod, todoListZod, userListZod } from "@/lib/validations";

// COMPONENTS
import Loading from "../components/Loading";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Column from "@/components/Column";
import Main from "@/components/Main";

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	// list of users' fetched + number of todos and albums for each user
	const [usersList, setUsersList] = useState<UserFinal[] | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// fetch all the users, todos and albums
				// Then check the data are valid to Zod Schema
				const resUsers = await axios.get<User[]>(
					`${import.meta.env.VITE_API}/users`
				);
				const valResUsers = userListZod.safeParse(resUsers.data);
				if (!valResUsers.success) {
					console.error(valResUsers.error);
					setErrorMessage("Wrong data");
					setIsLoading(false);
					return;
				}

				const resTodos = await axios.get<Todo[]>(
					`${import.meta.env.VITE_API}/todos`
				);
				const valResTodos = todoListZod.safeParse(resTodos.data);
				if (!valResTodos.success) {
					console.error(valResTodos.error);
					setErrorMessage("Wrong data");
					setIsLoading(false);
					return;
				}

				const resAlbums = await axios.get<TAlbum[]>(
					`${import.meta.env.VITE_API}/albums`
				);
				const valResAlbums = albumListZod.safeParse(resAlbums.data);
				if (!valResAlbums.success) {
					console.error(valResAlbums.error);
					setErrorMessage("Wrong data");
					setIsLoading(false);
					return;
				}

				// to count the todos and albums for a user
				let todosCount: number = 0;
				let albumsCount: number = 0;
				// to add the counts for each user received and create a new array with them
				const userFinalTemp: UserFinal[] = [];

				for (let user of valResUsers.data) {
					// Count the numbers of todos and albums for the user
					for (let todo of valResTodos.data) {
						user.id === todo.userId && todosCount++;
					}
					for (let album of valResAlbums.data) {
						user.id === album.userId && albumsCount++;
					}
					// modify the user to add those counts to their object's keys
					userFinalTemp.push({
						...user,
						nbtodos: todosCount,
						nbalbums: albumsCount,
					});
					// reset the counts before switching to the next user
					todosCount = 0;
					albumsCount = 0;
				}
				setUsersList(userFinalTemp);

				setIsLoading(false);
			} catch (error: any) {
				if (error?.response) {
					console.error(error.response.data);
				} else {
					console.error(error.message);
				}
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<Header />
			<Main>
				{isLoading ? (
					<Loading />
				) : (
					<div className="flex flex-wrap">
						<Column
							title="username"
							data={usersList}
							errorMessage={errorMessage}
						/>
						<Column
							title="email"
							data={usersList}
							errorMessage={errorMessage}
						/>
						<Column
							title="website"
							data={usersList}
							errorMessage={errorMessage}
						/>
						<Column
							title="nbtodos"
							data={usersList}
							errorMessage={errorMessage}
						/>
						<Column
							title="nbalbums"
							data={usersList}
							errorMessage={errorMessage}
						/>
					</div>
				)}
			</Main>
			<Footer />
		</>
	);
};

export default Home;
