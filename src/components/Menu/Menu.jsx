import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';
import classNames from 'classnames';

const Menu = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link
          className={classNames(
            styles.menuItem,
            styles.menuItemActive,
            'text-decoration-none'
          )}
          to="/"
        >
          Blogs
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
