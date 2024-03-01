import { faker } from "@faker-js/faker";

export function getRandomColorTag() {
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

  return colors[Math.floor(Math.random() * colors.length)];
}

export const generateRandomTags = () => {
  const numberOfTags = faker.number.int({ min: 1, max: 10 });
  const tags = [];
  for (let i = 0; i < numberOfTags; i++) {
    tags.push(faker.lorem.word());
  }
  return tags.map((tag) => ({ tag, color: getRandomColorTag() }));
};
