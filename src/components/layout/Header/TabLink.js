import { NavLink } from 'react-router-dom';
import scss from './TabLink.module.scss';
function TabLink({ href, title }) {
  return (
    <NavLink
      className={scss.link}
      activeClassName={scss['link--active']}
      to={href}>
      {title}
    </NavLink>
  );
}

export default TabLink;
