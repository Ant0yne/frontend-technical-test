import { useNavigate } from "react-router-dom";

import type { Column, UserFinal } from "@/lib/type";

const Column = ({
	title,
	data,
}: {
	title: Column;
	data: UserFinal[] | null;
}) => {
	const navigate = useNavigate();

	/**
	 *
	 * @param link
	 *
	 * When clicking on an username in the table -> redirect to the username profile
	 * When clicking on a website link in the table -> open a new tab to the user's website
	 */
	const handleNav = (link: string | number) => {
		if (title === "username") {
			navigate("/profile");
		} else if (title === "website") {
			window.open(`https://${link}`, "_blank", "noopener,noreferrer");
		}
	};

	return (
		<div className="border-2 border-black">
			<h2 className=" text-white text-center bg-slate-900">{title}</h2>
			<ul>
				{data?.map((user) => (
					<li key={user.id}>
						<div className="border-2">
							{title === "username" || title === "website" ? (
								<p
									onClick={() => handleNav(user[title])}
									className="mx-2 text-slate-900 underline hover:cursor-pointer">
									{user[title]}
								</p>
							) : (
								<p className="mx-2">{user[title]}</p>
							)}
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Column;
