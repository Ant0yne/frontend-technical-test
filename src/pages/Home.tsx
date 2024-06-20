import axios from "axios";
import { useEffect, useState } from "react";

import type { Album, Todo, User, UserFinal } from "../lib/type";

// COMPONENTS
import Loading from "../components/Loading";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Column from "@/components/Column";
import Main from "@/components/Main";

const Home = () => {
	const [isLoading, setIsLoading] = useState(true);

	// list of users' fetched + number of todos and albums for each user
	const [usersList, setUsersList] = useState<UserFinal[] | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// fetch all the users, todos and albums
				const resUsers = await axios.get<User[]>(
					`${import.meta.env.VITE_API}/users`
				);
				const resTodos = await axios.get<Todo[]>(
					`${import.meta.env.VITE_API}/todos`
				);
				const resAlbums = await axios.get<Album[]>(
					`${import.meta.env.VITE_API}/albums`
				);

				// to count the todos and albums for a user
				let todosCount: number = 0;
				let albumsCount: number = 0;
				// to add the counts for each user received and create a new array with them
				const userFinalTemp: UserFinal[] = [];

				for (let user of resUsers.data) {
					// Count the numbers of todos and albums for the user
					for (let todo of resTodos.data) {
						user.id === todo.userId && todosCount++;
					}
					for (let album of resAlbums.data) {
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
			{isLoading ? (
				<Main>
					<Loading />
				</Main>
			) : (
				<Main>
					<div className="flex flex-wrap">
						<Column title="username" data={usersList} />
						<Column title="email" data={usersList} />
						<Column title="website" data={usersList} />
						<Column title="nbtodos" data={usersList} />
						<Column title="nbalbums" data={usersList} />
					</div>
				</Main>
			)}
			<Footer />
		</>
	);
};

export default Home;
