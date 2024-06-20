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
import ReturnButton from "@/components/ReturnButton";

const Photos = () => {
	const [isLoading, setIsLoading] = useState(true);

	// fetched data for an album and all their photos
	const [album, setAlbum] = useState<Album | null>(null);
	const [photos, setPhotos] = useState<TPhotos[] | null>(null);

	const { albumId } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				// fetch the album by the params albumId and all the photos for this album
				const resPhotos = await axios.get<TPhotos[]>(
					`${import.meta.env.VITE_API}/photos?albumId=${albumId}`
				);
				const resAlbum = await axios.get<Album>(
					`${import.meta.env.VITE_API}/albums/${albumId}`
				);

				setPhotos(resPhotos.data);
				setAlbum(resAlbum.data);
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
					<ReturnButton url={`/profile/${album?.userId}`} to="user's profile" />

					<h2 className="text-center text-xl">{album?.title.toUpperCase()}</h2>
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
