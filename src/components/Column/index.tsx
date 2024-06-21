import { useNavigate } from "react-router-dom";

import type { Column, UserFinal } from "@/lib/type";

const Column = ({
	title,
	data,
	errorMessage,
}: {
	title: Column;
	data: UserFinal[] | null;
	errorMessage: string;
}) => {
	const navigate = useNavigate();

	const handleNav = (user: UserFinal) => {
		// When clicking on an username in the table -> redirect to the username profile
		if (title === "username") {
			navigate(`/profile/${user.id}`);
			//When clicking on a website link in the table -> open a new tab to the user's website
		} else if (title === "website") {
			window.open(`https://${user.website}`, "_blank", "noopener,noreferrer");
		}
	};

	return (
		<div className="border-2 border-slate-900 flex-1">
			<h2 className=" text-white text-center bg-slate-900 py-2">
				{title.toUpperCase()}
			</h2>
			<ul>
				{errorMessage ? (
					<li className="mx-2 my-1 text-red-600 font-semibold">Wrong data</li>
				) : (
					data?.map((user) => (
						<li key={user.id}>
							<div className="border-b-2">
								{title === "username" || title === "website" ? (
									<p
										onClick={() => handleNav(user)}
										className="mx-2 my-1 text-blue-700 underline hover:cursor-pointer">
										{user[title]}
									</p>
								) : (
									<p className="mx-2 my-1">{user[title]}</p>
								)}
							</div>
						</li>
					))
				)}
			</ul>
		</div>
	);
};

export default Column;
