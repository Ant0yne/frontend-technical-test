import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { Album, TPhotos } from "@/lib/type";

// COMPONENTS
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import Main from "@/components/Main";

const Photos = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [photos, setPhotos] = useState<TPhotos[] | null>(null);
	const [album, setAlbum] = useState<Album | null>(null);

	const { albumId } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const resPhotos = await axios.get<TPhotos[]>(
				`${import.meta.env.VITE_API}/photos?albumId=${albumId}`
			);
			const resAlbum = await axios.get<Album>(
				`${import.meta.env.VITE_API}/albums/${albumId}`
			);
			setPhotos(resPhotos.data);
			setAlbum(resAlbum.data);
			setIsLoading(false);
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
					<Link
						to={`/profile/${album?.userId}`}
						className="underline underline-offset-2  flex items-center">
						<FontAwesomeIcon icon="angles-left" />
						<p>Return to user's profile</p>
					</Link>
					<h2 className="text-center text-xl">{album?.title}</h2>
					<div className="flex flex-wrap">
						{photos?.map((photo) => (
							<img key={photo.id} src={photo.thumbnailUrl} alt={photo.title} />
						))}
					</div>
				</Main>
			)}
			<Footer />
		</>
	);
};

export default Photos;
