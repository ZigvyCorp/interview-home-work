import avatar1 from '../images/dog.png';
import avatar2 from '../images/melon.jpg';
import avatar3 from '../images/penguin.jpg';

export const formatDate = (date) => {
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  });
};

export const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const getRandomDaysAgo = (maxDays = 30) => {
  const daysAgo = Math.floor(Math.random() * maxDays) + 1;
  return `${daysAgo} day${daysAgo > 1 ? 's' : ''} ago`;
};

const avatars = [avatar1, avatar2, avatar3];

export const getRandomAvatar = () => {
  return avatars[Math.floor(Math.random() * avatars.length)];
};
