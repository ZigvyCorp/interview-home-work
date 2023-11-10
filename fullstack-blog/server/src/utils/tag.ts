const tags: string[] = [
	"programming",
	"web development",
	"machine learning",
	"cybersecurity",
	"mobile development",
	"adventure",
	"culture",
	"solo travel",
	"road trip",
	"hiking",
	"fitness",
	"mental health",
	"nutrition",
	"yoga",
	"self-care",
	"cooking",
	"vegetarian",
	"food photography",
	"street food",
	"desserts",
	"physics",
	"astronomy",
	"biology",
	"neuroscience",
	"space exploration",
];

export function generateRandomTags(): string[] {
	const numberOfTags = Math.max(Math.floor(Math.random() * 16) + 5, 5);
	const randomTags: string[] = Array.from({ length: numberOfTags }, () => getRandomTag());
	return randomTags;
}

function getRandomTag(): string {
	const randomIndex = Math.floor(Math.random() * tags.length);
	return tags[randomIndex];
}
