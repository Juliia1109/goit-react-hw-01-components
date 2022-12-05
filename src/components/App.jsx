import Profile from './Profile';
import user from 'helpers/user.json';
import Statistics from "./Statistics";
import data from 'helpers/data.json';
import FriendList from "./FriendList";
import friends from 'helpers/friends.json';
import TransactionHistory from "./Transactions";
import transactions from 'helpers/transactions.json';


export const App = () => {
  return (
    <>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
<Statistics 
 title="Upload stats" stats={data}
  />
  <FriendList 
  friends={friends} 
 />
 <TransactionHistory 
 items={transactions} 
 />;
     </>
  );
};
