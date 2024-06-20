import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { User } from "@/lib/type";

// COMPONENTS
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loading from "@/components/Loading";

const Profile = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [user, setUser] = useState<User | null>(null);

	const { userId } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const res = await axios.get<User>(
				`${import.meta.env.VITE_API}/users/${userId}`
			);

			setUser(res.data);
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
					<h2>{user?.name}</h2>
				</main>
			)}
			<Footer />
		</>
	);
};

export default Profile;
