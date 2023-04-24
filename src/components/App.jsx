import { Profile } from "./Profile/profile";
	import user from "user.json"
	

	import { Statistics, StatisticsTitle } from "./Statistics/statistics";
	import data from "data.json";
	

	import {FriendList} from "./FriendList/friendList";
	import friends  from "friends.json";
	

	import {TransactionHistory} from "./Transactions/transactions";
	import transactions from "transactions.json";
	 
	export const App = () => {
	  return (
	    <div   style={divStyles} >
	 
	    <Profile 
	          username={user.username}
	          tag={user.tag}
	           location={user.location}
	          avatar={user.avatar}
	          stats={user.stats}
	     />
	   
	   <section   style = {sectionStyles} >
	    
	   <StatisticsTitle  title="Upload stats" stats={data} />
	

	   <Statistics stats={data} />
	    
	    </section>  
	  
	   <FriendList friends = {friends} />
	

	   <TransactionHistory items={transactions} />
	

	    </div>
	

	  )
	};
	

	

	const divStyles = {
	  height: '100vh',
	  display: 'flex',
	  justifyContent: 'start',
	  alignItems: 'center',
	  fontSize: 40,
	  color: '#010101',
	 flexDirection: 'column'
	}
	

	 const sectionStyles = {
	  display: 'block',
	   width: '1200',
	  textAlign: 'center',
	  border: '5px solid rgb(113, 113, 129, 0.2)'
	}

