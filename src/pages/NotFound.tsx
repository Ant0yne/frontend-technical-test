// COMPONENTS
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import ReturnButton from "@/components/ReturnButton";

const NotFound = () => {
	return (
		<>
			<Header />
			<Main>
				<ReturnButton url="/" to="users list" />
				<h2 className="text-3xl text-center mt-10">
					Sorry, this page doesn't exist :(
				</h2>
			</Main>
			<Footer />
		</>
	);
};

export default NotFound;
