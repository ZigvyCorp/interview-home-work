const monthNames: string[] = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

function getMonthName(month: number): string {
	return monthNames[month];
}

export function getDayMonthYear(date: string): string {
	const d = new Date(date);
	const day = d.getDate();
	const month = getMonthName(d.getMonth());
	const year = d.getFullYear();
	return `${day} ${month} ${year}`;
}
