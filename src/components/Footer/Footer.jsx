import { useMemo } from 'react';
import dayjs from 'dayjs';

const Footer = () => {
  const year = useMemo(() => dayjs().format('YYYY'), []);
  return (
    <div className="container pt-5 pb-2 text-center">
      Copyright &copy; {year} by Phan Thị Thanh Nguyên (
      <a href="mailto: nguyenptt.1692@gmail.com">nguyenptt.1692@gmail.com</a> )
    </div>
  );
};

export default Footer;
