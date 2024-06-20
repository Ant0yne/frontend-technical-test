import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Album, User } from "@/lib/type";

// COMPONENTS
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loading from "@/components/Loading";

const Profile = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [user, setUser] = useState<User | null>(null);
	const [albums, setAlbums] = useState<Album[] | null>(null);

	const { userId } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const resUser = await axios.get<User>(
				`${import.meta.env.VITE_API}/users/${userId}`
			);

			const resAlbums = await axios.get<Album[]>(
				`${import.meta.env.VITE_API}/users/${userId}/albums`
			);

			setUser(resUser.data);
			setAlbums(resAlbums.data);
			setIsLoading(false);
		};

		fetchData();
	}, []);

	return (
		<>
			<Header />
			{isLoading ? (
				<main>
					<Loading />
				</main>
			) : (
				<main>
					<h2 className="text-center text-xl">{user?.name}</h2>
					<div>
						<p>Username: {user?.username}</p>
						<p>Email: {user?.email}</p>
					</div>
					<div>
						<ul>
							{albums?.map((album) => (
								<li key={album.id}>
									<Link
										to={`/photos/${album.id}`}
										className=" text-blue-700 underline hover:cursor-pointer">
										{album.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</main>
			)}
			<Footer />
		</>
	);
};

export default Profile;
