import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// COMPONENTS
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";

const NotFound = () => {
	return (
		<>
			<Header />
			<Main>
				<h2>Sorry, this page doesn't exist :(</h2>
				<Link
					to="/"
					className="underline underline-offset-2  flex items-center">
					<FontAwesomeIcon icon="angles-left" />
					<p>Return to the Home Page</p>
				</Link>
			</Main>
			<Footer />
		</>
	);
};

export default NotFound;
