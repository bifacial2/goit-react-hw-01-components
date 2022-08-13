import PropTypes from 'prop-types';
import css from './FriendList.module.css';
export const FriendList = ({ lists }) => {
  return (
    <ul className={css.friend_list}>
      {lists.map(list => (
        <li className={css.item} key={list.id}>
          {list.isOnline ? (
            <span className={css.status} style={{ background: 'green' }}></span>
          ) : (
            <span className={css.status} style={{ background: 'red' }}></span>
          )}
          <img
            className={css.avatar}
            src={list.avatar}
            alt={list.name}
            width="48"
          />
          <p className={css.name}>{list.name}</p>
        </li>
      ))}
    </ul>
  );
};
FriendList.propTypes = {
  id: PropTypes.number,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
};
