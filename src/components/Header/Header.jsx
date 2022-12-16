import classNames from 'classnames';
import styles from './Header.module.scss';
import logo from '../../assets/imgs/zigvy-logo.svg';
import avt from '../../assets/imgs/avt.png';
import Menu from '../Menu';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={classNames(styles.header, 'fixed-top')}>
      <div className="container">
        <div className="row p-2">
          <div className="col-4">
            <div className={styles.logo}>
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
          </div>
          <div className="col-6 d-flex align-items-center">
            <Menu />
          </div>
          <div className="col-2">
            <div className="d-flex align-items-center">
              <div className={styles.avt}>
                <img src={avt} alt="" />
              </div>
              <div className="ps-2">Adam Levine</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
