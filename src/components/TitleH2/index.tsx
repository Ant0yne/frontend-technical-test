import { PropsWithChildren } from "react";

const TitleH2 = ({ title }: { title: string | undefined }) => {
	return (
		<h2 className="text-center text-xl font-bold my-4 text-slate-900 lg:text-3xl">
			{title}
		</h2>
	);
};

export default TitleH2;
