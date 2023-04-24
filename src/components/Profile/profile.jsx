import PropTypes from 'prop-types'; 
	import css from './profile.module.css';
	    
	    export  const Profile = ({username, tag, location, avatar, stats}) => {
	    return (  
	        <div className={css.profile}>    
	      <div className={css.description}>
	        <img className={css.img} src = {avatar} alt={username} width={250}/>
	        <p className= {css.name}>{username}</p>
	        <p className={css.tag}>@{tag}</p>
	        <p className={css.location}>{location}</p>
	      </div>
	      <ul className={css.stats}>
	    <li className={css.statsLi}>
	      <span className={css.label}>Followers</span>
	      <span className={css.quantity}>{stats.followers}</span>
	    </li>
	    <li className={css.statsLi}>
	      <span className={css.label}>Views</span>
	      <span className={css.quantity}>{stats.views}</span>
	    </li>
	    <li className={css.statsLi}>
	      <span className={css.label}>Likes</span>
	      <span className={css.quantity}>{stats.likes}</span>
	    </li>
	  </ul>
	</div>
	    )}
	

	

	

	    Profile.propTypes = {
	        stats: PropTypes.object,
	   username: PropTypes.string,
	   tag: PropTypes.string,
	   location: PropTypes.string,
	    avatar: PropTypes.string,
	   followers: PropTypes.number,
	   views: PropTypes.number,
	   likes: PropTypes.number,
	    }
	 

