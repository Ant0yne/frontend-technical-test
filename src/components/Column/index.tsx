import type { Column, UserFinal } from "@/lib/type";

const Column = ({
	title,
	data,
}: {
	title: Column;
	data: UserFinal[] | null;
}) => {
	return (
		<div className="border-2 border-black">
			<h2 className=" text-white text-center bg-slate-900">{title}</h2>
			<ul>
				{data?.map((user) => (
					<li key={user.id}>
						<div className="border-2 border-slate-500">
							<p className="mx-2">{user[title]}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Column;
