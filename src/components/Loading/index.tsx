import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// COMPONENTS
import TitleH2 from "../TitleH2";

const Loading = () => {
	return (
		<div className="mx-auto mt-10 flex justify-center gap-5 items-center">
			<FontAwesomeIcon
				icon="spinner"
				className="animate-spin h-5 w-5 lg:h-8 lg:w-8"
			/>
			<TitleH2 title={"Loading..."} />
		</div>
	);
};

export default Loading;
