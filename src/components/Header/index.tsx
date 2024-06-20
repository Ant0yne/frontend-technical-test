import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
	return (
		<header className="my-4 pb-2 border-b-2 border-slate-900">
			<Link to="/">
				<nav className="flex items-center justify-center gap-2">
					<FontAwesomeIcon
						icon="users-rectangle"
						className="text-3xl m-1  text-slate-900"
					/>
					<h1 className="text-3xl font-bold font-mono text-slate-900">
						User's DataBase
					</h1>
				</nav>
			</Link>
		</header>
	);
};

export default Header;
