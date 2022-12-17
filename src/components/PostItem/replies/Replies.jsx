import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import classNames from 'classnames';
import styles from './Replies.module.scss';
import avt from '../../../assets/imgs/avt.png';

const Replies = ({ replies }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div
        className={classNames(styles.btnReply, 'pb-2')}
        aria-controls="collapse-text"
        aria-expanded={isOpen}
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        {replies.length} replies{' '}
      </div>
      <Collapse in={isOpen}>
        <div className="pt-3">
          {replies.map((item) => {
            return (
              <div className={classNames(styles.replyItem, 'd-flex pb-5')}>
                <div className={styles.replyAvt}>
                  <img src={avt} alt="" />
                </div>
                <div className={classNames('ps-2')}>
                  <div>
                    <span className={classNames(styles.name, 'text-black-50')}>
                      {item.name}
                    </span>
                    <span className={classNames(styles.time, 'ps-3')}>
                      a day ago
                    </span>
                  </div>
                  <div className="pt-1">{item.body}</div>
                  <div className="pt-1">
                    <a href="#" className="text-decoration-none text-black-50">
                      Reply to
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Collapse>
    </div>
  );
};
export default Replies;
