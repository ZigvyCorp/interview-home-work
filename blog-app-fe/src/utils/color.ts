const colors = [
	"magenta",
	"red",
	"volcano",
	"orange",
	"gold",
	"lime",
	"green",
	"cyan",
	"blue",
	"geekblue",
	"purple",
];

export const randomColor = () => {
	const numsColor = colors.length;

	const index = Math.round(Math.random() * (numsColor + 1));

	return colors[index];
};
