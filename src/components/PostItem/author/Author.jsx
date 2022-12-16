import React from 'react';
import styles from '../../../App.module.scss';
import { Row, Col } from 'react-bootstrap';
import { randomDate } from '../../utils/dateTime';

const Author = ({ user }) => {
  return (
    <Row className={styles.spacePart} sm={6}>
      <Col sm={6}>
        <div>
          <span>Author: </span>
          <span>{user.name}</span>
        </div>
        <div>
          <span>Created at: {randomDate()}</span>
        </div>
      </Col>
    </Row>
  );
};
export default Author;
