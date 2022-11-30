import PropTypes from 'prop-types'
import FriendListItem from './FriendListItem'
import './friends.css'

export default function FriendList({ friends }) {
  return (
    <>
    <ul className="friend-list">
  {friends.map((friend)=>
  (<li key = {friend.id}>
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


