import dayjs from 'dayjs';
import dayjsRandom from 'dayjs-random';
dayjs.extend(dayjsRandom);

const randomDate = () => {
  return dayjs.between('2021-01-01', '2022-12-02').format('MMM DD, YYYY');
};

export { randomDate };
