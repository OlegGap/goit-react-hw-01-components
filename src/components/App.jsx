import React from 'react';
import Profile from './Profile/Profile';
import Stats from './Stats/Stats';
import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json';
import user from './db/user.json';
import stats from './db/stats.json';
import './styles.css';

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Stats title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
