import PropTypes from 'prop-types'
import FriendListItem from './FriendListItem'
import css from './Friends.module.css'

export default function FriendList({ friends }) {
  return (
    <>
    <ul className={css.friendList}>
  {friends.map((friend)=>
  (<li key = {friend.id} className={css.item}>
    <FriendListItem friend={friend} />
  </li>
  ))}
  </ul>
  </>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired
  ).isRequired,
}


