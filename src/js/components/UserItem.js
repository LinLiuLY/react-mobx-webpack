import React from 'react';
import { observer } from 'mobx-react';

const UserItem = observer(({ store, user }) => {
  const onChange = event => {
    store.update(user.id, event.target.value);
  };

  return (
    <tr>
      <td>
        <input value={user.name} onChange={onChange} />
      </td>
    </tr>
  );
});

export default UserItem;
