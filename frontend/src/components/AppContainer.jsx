export const AppContainer = (props) => {
	const { children, className, containerProps } = props;

	return (
		<div
			className={`container mx-auto xl:max-w-6xl h-full ${containerProps?.className}`}>
			<div className={`h-full ${className}`}>{children}</div>
		</div>
	);
};
