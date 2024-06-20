import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const ReturnButton = ({ url, to }: { url: string; to: string }) => {
	return (
		<Link to={url}>
			<Button variant="secondary" className="lg:p-5">
				<FontAwesomeIcon icon="angles-left" />
				<p className="ml-2">Return to {to}</p>
			</Button>
		</Link>
	);
};

export default ReturnButton;
