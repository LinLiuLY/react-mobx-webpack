import React from 'react';
import {observer} from 'mobx-react';
import UserItem from './UserItem';

function UsersItem({store}) {
  const users = store.users;

  return (
    <tbody>
      {users.map(user => <UserItem key={user.id} user={user} store={store} />)}
    </tbody>
  );
}

export default observer(UsersItem);
