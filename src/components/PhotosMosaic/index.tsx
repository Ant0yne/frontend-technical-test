import { TAlbum, TPhotos } from "@/lib/type";

// COMPONENTS
import TitleH2 from "../TitleH2";

const PhotosMosaic = ({
	album,
	photos,
	errorMessage,
}: {
	album: TAlbum | null;
	photos: TPhotos[] | null;
	errorMessage: string;
}) => {
	return (
		<div>
			{errorMessage ? (
				<p className="mx-2 my-1 text-red-600 font-semibold text-center mt-10">
					Wrong data
				</p>
			) : (
				<>
					<TitleH2 title={album?.title.toUpperCase()} />
					<p className="text-center italic mb-2">{photos?.length} photos</p>
					<div className="flex flex-wrap justify-around">
						{photos?.map((photo) => (
							<img
								key={photo.id}
								src={photo.thumbnailUrl}
								alt={photo.title}
								width={150}
								height={150}
								className="m-3 rounded-md hover:opacity-75 hover:border-2 border-slate-200"
							/>
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default PhotosMosaic;
