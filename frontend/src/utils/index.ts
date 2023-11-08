const colors = [
  'pink-inverse',
  'green-inverse',
  'blue-inverse',
  'purple-inverse',
  'gold-inverse',
  'orange-inverse',
  'red-inverse',
  'cyan-inverse',
  'magenta-inverse',
  'geekblue-inverse',
  'lime-inverse',
];
export const generateRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};