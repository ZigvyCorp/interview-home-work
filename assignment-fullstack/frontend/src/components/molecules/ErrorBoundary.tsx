import { ReactNode, FC } from "react";
const ErrorBoundary: FC<{ children?: ReactNode }> = (props) => {
	return <>{props.children}</>;
};

export default ErrorBoundary;
