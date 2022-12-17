import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styles from './User.module.scss';
import avatar from '../../../assets/imgs/member4.png';

const Users = () => {
  return (
    <Row className={styles.users}>
      <Col sm={1} className={styles.avatar}>
        <img src={avatar} alt="" />
      </Col>
      <Col sm={11} className={styles.infoUsers}>
        <div className={styles.detailInfo}>
          <span className={styles.name}>Alexander</span>
          <span className={styles.time}>1 day ago</span>
        </div>
        <p className={styles.contents}>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
        <p style={{ color: '#bebebe' }}>Reply to</p>
      </Col>
    </Row>
  );
};
export default Users;
