import React from 'react';
import {observer, inject} from 'mobx-react';

@inject('userStore')
@observer
class App extends React.Component {

  handleInputChange = (event) => {
    const {userStore} = this.props;
    userStore.updateName(event.target.value);
  }

  handleClick = () => {
    const {userStore} = this.props;
    userStore.createUser();
  }

  render() {
    const {userStore} = this.props;

    return (
      <div>
        <input value={userStore.name} onChange={this.handleInputChange}/>
        <button onClick={this.handleClick}/>
      </div>
    );
  }
};

export default App;
