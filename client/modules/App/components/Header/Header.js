import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap'
import { Input } from 'antd';
const { Search } = Input;

// Import Style
import styles from './Header.css';

export function Header(props, context) {
  const { onSearch } = props
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles['site-title']}>
          <Link to="/" >Blogs</Link>
        </h1>

        <Search
          className={styles['search-bar']}
          placeholder="search by title"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
        
        {
          context.router.isActive('/', true)
            ? <Button variant="light" className={styles['add-post-button']} onClick={props.toggleAddPost}>Add Post</Button>
            : null
        }
      </div>
    </div>
  );
}

Header.contextTypes = {
  router: PropTypes.object,
};

Header.propTypes = {
  toggleAddPost: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
};

Header.defaultProps = {
  onSearch: ()=> {}
}

export default Header;
