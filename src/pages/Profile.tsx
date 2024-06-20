import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import type { TAlbum, User } from "@/lib/type";

// COMPONENTS
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import Main from "@/components/Main";
import ReturnButton from "@/components/ReturnButton";
import TitleH2 from "@/components/TitleH2";
import Album from "@/components/Album";

const Profile = () => {
	const [isLoading, setIsLoading] = useState(true);

	// fetched data for a user and all their albums
	const [user, setUser] = useState<User | null>(null);
	const [albums, setAlbums] = useState<TAlbum[] | null>(null);

	const { userId } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				// fetch the user by the params userId and all the albums linked to them
				const resUser = await axios.get<User>(
					`${import.meta.env.VITE_API}/users/${userId}`
				);
				const resAlbums = await axios.get<TAlbum[]>(
					`${import.meta.env.VITE_API}/users/${userId}/albums`
				);

				setUser(resUser.data);
				setAlbums(resAlbums.data);
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
					<ReturnButton url="/" to="users list" />
					<TitleH2 title={user?.name.toUpperCase()} />
					<div className="mt-5 mx-auto max-w-lg">
						<div className="flex justify-between ">
							<p>Username:</p>
							<p>{user?.username}</p>
						</div>
						<div className="flex justify-between ">
							<p>Email:</p>
							<p>{user?.email}</p>
						</div>
						<h3 className="text-center text-lg lg:text-2xl my-5">
							{albums?.length} Albums:
						</h3>
					</div>
					<div className="flex flex-wrap justify-around">
						{albums?.map((album) => (
							<Album key={album.id} title={album.title} id={album.id} />
						))}
					</div>
				</Main>
			)}
			<Footer />
		</>
	);
};

export default Profile;
