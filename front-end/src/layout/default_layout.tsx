import { ReactNode } from "react";

type ComponentProps = {
	children: ReactNode;
};

export const DefaultLayout = ({ children }: ComponentProps) => {
	return <div className="py-14 px-40 min-h-[100vh]">{children}</div>;
};
