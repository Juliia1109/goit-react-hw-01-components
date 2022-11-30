
import PropTypes from 'prop-types'

import './friends.css'

export default function FriendListItem({ friend: { avatar, name, isOnline}}) {
  
    return (
          <>
          {isOnline === true ? <span className="online"></span> : <span className='offline'></span>}
          <img className="avatar" src={avatar} alt="User avatar" width="48" />
           <p className="name">{name}</p>
           </>
    
            ) 

}

FriendListItem.propTypes = {
    friend: PropTypes.shape(
        {
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline:  PropTypes.bool.isRequired
        }
    ).isRequired
}



// export default function FriendList ( { friends }){
//  
// }

// FriendList.propTypes = {
//     friends: PropTypes.string.isRequired,
//     // name: PropTypes.string.isRequired,
//     // isOnline: PropTypes.string,
// };

