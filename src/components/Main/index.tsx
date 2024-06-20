import { PropsWithChildren } from "react";

const Main = ({ children }: PropsWithChildren) => {
	return (
		<main className="min-h-screen">
			<div className="container mx-auto">{children}</div>
		</main>
	);
};

export default Main;
