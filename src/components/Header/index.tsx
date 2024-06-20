import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
	return (
		<header>
			<Link to="/">
				<nav className="flex items-center">
					<FontAwesomeIcon icon="users-rectangle" className="text-3xl m-1" />
					<h1>User's DatabAse</h1>
				</nav>
			</Link>
		</header>
	);
};

export default Header;
