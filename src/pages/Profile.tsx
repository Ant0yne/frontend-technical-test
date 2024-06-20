import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import type { Album, User } from "@/lib/type";

// COMPONENTS
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import Main from "@/components/Main";
import { Button } from "@/components/ui/button";
import ReturnButton from "@/components/ReturnButton";
import TitleH2 from "@/components/TitleH2";

const Profile = () => {
	const [isLoading, setIsLoading] = useState(true);

	// fetched data for a user and all their albums
	const [user, setUser] = useState<User | null>(null);
	const [albums, setAlbums] = useState<Album[] | null>(null);

	const { userId } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				// fetch the user by the params userId and all the albums linked to them
				const resUser = await axios.get<User>(
					`${import.meta.env.VITE_API}/users/${userId}`
				);
				const resAlbums = await axios.get<Album[]>(
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
					<div className="flex justify-between mx-auto max-w-lg">
						<p>Username:</p>
						<p>{user?.username}</p>
					</div>
					<div className="flex justify-between mx-auto max-w-lg">
						<p>Email:</p>
						<p>{user?.email}</p>
					</div>
					<div className="mt-5 mx-auto max-w-lg">
						<h3 className="text-center text-lg border-b-2 border-slate-900">
							Albums
						</h3>
						<ul>
							{albums?.map((album) => (
								<li key={album.id} className="border-b-2">
									<p className="text-center mt-1">{album.title}</p>
									<Link
										to={`/photos/${album.id}`}
										className="flex justify-center mt-3 mb-5">
										<Button className="bg-slate-900 lg:text-xl lg:p-5">
											Go to Album
										</Button>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</Main>
			)}
			<Footer />
		</>
	);
};

export default Profile;
