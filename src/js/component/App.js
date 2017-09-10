import React from 'react';
import {observer, inject} from 'mobx-react';

@inject('userStore')
@observer
class App extends React.Component {

  handleInputChange(e) {
    const {userStore} = this.props;
    userStore.updateName(e.target.value);
  }

  handleClick() {
    const {userStore} = this.props;
    userStore.createUser();
  }

  render() {
    const {userStore} = this.props;

    return (
      <div>
        <input value={userStore.name} onChange={this.handleInputChange.bind(this)}/>
        <button onClick={this.handleClick.bind(this)}/>
      </div>
    );
  }
};

export default App;
