import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.scss';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => {
        const { avatar, name, isOnline, id } = friend;
        let statusClsss = [styles.status];
        if (isOnline) {
          statusClsss = styles.statusActive;
        }
        return (
          <li className={styles.item} key={id}>
            <span className={statusClsss} />
            <img className={styles.avatar} src={avatar} alt="" width="48" />
            <p className={styles.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default FriendList;
