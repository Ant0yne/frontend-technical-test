import { PropsWithChildren } from "react";

const Main = ({ children }: PropsWithChildren) => {
	return (
		<main>
			<div className="container mx-auto mb-20">{children}</div>
		</main>
	);
};

export default Main;
