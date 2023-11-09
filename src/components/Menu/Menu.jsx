import { Link } from 'react-router-dom';
import { useClassName } from '../../hooks';
import styles from './Menu.module.css';

const Menu = () => {
    // Utilize the useClassNames hook to manage CSS classes
    const cx = useClassName(styles);

    return (
        <div className={cx('menu')}>
            <div className={cx('inner')}>
                <div className={cx('container')}>
                    <Link to={'/'} className={cx('heading')}>
                        <h2>Blogs</h2>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Menu;
