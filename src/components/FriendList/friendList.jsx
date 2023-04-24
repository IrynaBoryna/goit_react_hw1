import PropTypes from 'prop-types'; 
	import css from '././friendList.module.css';
	

	export const FriendList = ({friends}) => {
	  return (
	<ul className={css.friendsList}>
	    {friends.map(friends => (
	  <FriendListItem   key = {friends.id}
	  isOnline ={friends.isOnline} 
	   avatar = {friends.avatar} 
	    name = {friends.name}
	  />
	    ))}
	   </ul> 
	  )
	}
	

	 const FriendListItem = ({isOnline, avatar, name}) => {
	    return (    
	    <li>
	      <div className={css.itemFriend}>
	      <span   className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>    
	  <img className={css.avatar} src={avatar} alt={name} width="48" />
	  <p className="name">{name}</p>
	  </div>
	</li>
	    )
	}
	

	

	

	FriendListItem.propTypes = {
	  isOnline: PropTypes.bool,
	    avatar: PropTypes.string,
	    name: PropTypes.string,
	    id: PropTypes.number,
	}
	

	FriendList.propTypes = {
	    friends: PropTypes.array,
	    isOnline: PropTypes.bool,
	    avatar: PropTypes.string,
	    name: PropTypes.string,
	    id: PropTypes.number,
	

	}
