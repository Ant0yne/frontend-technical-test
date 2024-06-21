import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Album = ({ title, id }: { title: string; id: number }) => {
	return (
		<Link to={`/photos/${id}`}>
			<nav className="w-[150px] h-[150px] m-3 bg-slate-400 rounded-md relative hover:opacity-75 hover:border-2 border-slate-200">
				<div className="h-[105px] lg:h-[100px] overflow-hidden">
					<p className="text-center italic pt-3 ">{title}</p>
				</div>
				<Button className="bg-slate-900 lg:text-xl lg:py-5 absolute bottom-0 w-full">
					Go to Album
				</Button>
			</nav>
		</Link>
	);
};

export default Album;
