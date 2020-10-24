import { compose, hoc } from '../../../@';

const container = compose(
  hoc((props) => {
    return {
      ...props,
    };
  })
);

export default container;
