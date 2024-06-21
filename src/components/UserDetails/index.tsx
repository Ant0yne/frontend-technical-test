import type { TAlbum, User } from "@/lib/type";

// COMPONENTS
import Album from "../Album";
import TitleH2 from "../TitleH2";

const UserDetails = ({
	user,
	albums,
	errorMessage,
}: {
	user: User | null;
	albums: TAlbum[] | null;
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
						<div className="flex justify-between ">
							<p>Website:</p>
							<p
								onClick={() =>
									window.open(
										`https://${user?.website}`,
										"_blank",
										"noopener,noreferrer"
									)
								}
								className="mx-2 my-1 text-blue-700 underline hover:cursor-pointer">
								{user?.website}
							</p>
						</div>
						<h3 className="text-center text-lg lg:text-2xl my-5 underline">
							{albums?.length} Albums
						</h3>
					</div>
					<div className="flex flex-wrap justify-around">
						{albums?.map((album) => (
							<Album key={album.id} title={album.title} id={album.id} />
						))}
					</div>
				</>
			)}
		</div>
	);
};

export default UserDetails;
