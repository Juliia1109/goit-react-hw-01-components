import PropTypes from 'prop-types'
import css from './Friends.module.css'

export default function FriendListItem({ friend: { avatar, name, isOnline}}) {
  
    return (
          <>
            <span className={[css.status, isOnline ? css.online : css.offline,].join(' ')}></span>
          <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
           <p className={css.name}>{name}</p>
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
