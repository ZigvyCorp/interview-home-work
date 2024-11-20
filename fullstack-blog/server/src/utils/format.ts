export function normalizedTitle(title: string) {
	return title.toLowerCase();
}

export function formatFirstWord(title: string) {
	return title.charAt(0).toUpperCase() + title.slice(1);
}
