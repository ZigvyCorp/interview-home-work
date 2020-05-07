import React from 'react';
import { Link } from 'react-router-dom';
import newIcon from '../../images/new_icon.png';

const FloatingButton = () => {
  return (
    <Link to="/new-post" className="btn btn-primary" style={{ borderRadius: '50%',
      width: 54, height: 54, position: 'fixed', bottom: 18, right: 18, zIndex: 1
    }}>
      <img src={newIcon} alt="" width={54} height={54}
        style={{ position: 'fixed', bottom: 19, right: 16 }}
      />
    </Link>
  )
}

export default FloatingButton