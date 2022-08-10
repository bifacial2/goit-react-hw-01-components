import PropTypes from 'prop-types';
export const FriendList = ({ lists }) => {
  return (
    <ul className="friend-list">
      {lists.map(list => (
        <li className="item" key={list.id}>
          {list.isOnline ? (
            <span className="status"></span>
          ) : (
            <span className="status"></span>
          )}
          <img
            className="avatar"
            src={list.avatar}
            alt={list.name}
            width="48"
          />
          <p className="name">{list.name}</p>
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
