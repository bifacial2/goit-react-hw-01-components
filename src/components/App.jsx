import { User } from './user/Profile';
import userList from './user/user.json';
import { Statistics } from './statistics/Statistics';
import data from './statistics/data.json';
export const App = () => {
  return (
    <>
      <User
        username={userList.username}
        tag={userList.tag}
        lokation={userList.location}
        avatar={userList.avatar}
        followers={userList.stats.followers}
        views={userList.stats.views}
        likes={userList.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
    </>
  );
};
