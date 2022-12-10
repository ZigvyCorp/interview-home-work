import { NavLink } from 'react-router-dom';
import scss from './TabLink.module.scss';
function TabLink({ href }) {
  return (
    <NavLink
      className={scss.link}
      activeClassName={scss['link--active']}
      to={href}>
      Blogs
    </NavLink>
  );
}

export default TabLink;
