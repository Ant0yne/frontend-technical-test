import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import type { TAlbum, User } from "@/lib/type";
import { albumListZod, userZod } from "@/lib/validations";

// COMPONENTS
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import Main from "@/components/Main";
import ReturnButton from "@/components/ReturnButton";
import UserDetails from "@/components/UserDetails";

const Profile = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	// fetched data for a user and all their albums
	const [user, setUser] = useState<User | null>(null);
	const [albums, setAlbums] = useState<TAlbum[] | null>(null);

	const { userId } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				// fetch the user by the params userId and all the albums linked to them
				// Then check the data are valid to Zod Schema
				const resUser = await axios.get<User>(
					`${import.meta.env.VITE_API}/users/${userId}`
				);
				const valResUser = userZod.safeParse(resUser.data);
				if (!valResUser.success) {
					console.error(valResUser.error);
					setErrorMessage("Wrong data");
					setIsLoading(false);
					return;
				}

				const resAlbums = await axios.get<TAlbum[]>(
					`${import.meta.env.VITE_API}/users/${userId}/albums`
				);
				const valResAlbums = albumListZod.safeParse(resAlbums.data);

				if (!valResAlbums.success) {
					console.error(valResAlbums.error);
					setErrorMessage("Wrong data");
					setIsLoading(false);
					return;
				}

				setUser(valResUser.data);
				setAlbums(valResAlbums.data);
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
					<>
						<ReturnButton url="/" to="users list" />
						<UserDetails
							user={user}
							albums={albums}
							errorMessage={errorMessage}
						/>
					</>
				)}
			</Main>
			<Footer />
		</>
	);
};

export default Profile;
