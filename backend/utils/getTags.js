const TAGS = [
    "consult", "it", "hala", "gov", "legal", "political", "breathtaking", "landscape", "vietnam"
];

const getTags = (numOfTags) => {
    let tags = [];

    do {
        const randomIndex = Math.floor(Math.random() * TAGS.length);
        if (!tags.includes(TAGS[randomIndex])) {
            tags.push(TAGS[randomIndex]);
        }
    } while (tags.length < numOfTags);

    return tags;
};

module.exports = getTags;