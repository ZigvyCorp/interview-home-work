import loading from '../../assets/imgs/loading.svg';
import classNames from 'classnames';
import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div
      className={classNames(
        'd-flex justify-content-center container pt-5',
        styles.loading
      )}
    >
      <img src={loading} />
    </div>
  );
};

export default Loading;
