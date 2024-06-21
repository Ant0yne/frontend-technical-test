import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import type { TAlbum, TPhotos } from "@/lib/type";
import { albumZod, photosListZod } from "@/lib/validations";

// COMPONENTS
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import Main from "@/components/Main";
import ReturnButton from "@/components/ReturnButton";
import PhotosMosaic from "@/components/PhotosMosaic";

const Photos = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [errorMessage, setErrorMessage] = useState("");

	// fetched data for an album and all their photos
	const [album, setAlbum] = useState<TAlbum | null>(null);
	const [photos, setPhotos] = useState<TPhotos[] | null>(null);

	const { albumId } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			try {
				// fetch the album by the params albumId and all the photos for this album
				// Then check the data are valid to Zod Schema
				const resPhotos = await axios.get<TPhotos[]>(
					`${import.meta.env.VITE_API}/photos?albumId=${albumId}`
				);
				const valResPhotos = photosListZod.safeParse(resPhotos.data);
				if (!valResPhotos.success) {
					console.error(valResPhotos.error);
					setErrorMessage("Wrong data");
					setIsLoading(false);
					return;
				}

				const resAlbum = await axios.get<TAlbum>(
					`${import.meta.env.VITE_API}/albums/${albumId}`
				);
				const valResAlbum = albumZod.safeParse(resAlbum.data);
				if (!valResAlbum.success) {
					console.error(valResAlbum.error);
					setErrorMessage("Wrong data");
					setIsLoading(false);
					return;
				}

				setPhotos(valResPhotos.data);
				setAlbum(valResAlbum.data);
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
						<ReturnButton
							url={album?.userId ? `/profile/${album.userId}` : "/"}
							to={album?.userId ? "user's profile" : "users list"}
						/>
						<PhotosMosaic
							album={album}
							photos={photos}
							errorMessage={errorMessage}
						/>
					</>
				)}
			</Main>
			<Footer />
		</>
	);
};

export default Photos;
