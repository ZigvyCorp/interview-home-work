import { compose, hoc } from '../../../@';
import { useCallback, useEffect, useState } from 'react';

const container = compose(
  hoc((props) => {
    const [showButtonScollTop, setShowButtonScollTop] = useState(false);

    const handleScollTop = useCallback(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
      window.addEventListener('scroll', (e) => {
        if (window.pageYOffset <= 500) {
          setShowButtonScollTop(false);
        } else {
          setShowButtonScollTop(true);
        }
      });
    }, []);

    return {
      ...props,
      handleScollTop,
      showButtonScollTop,
    };
  })
);

export default container;
