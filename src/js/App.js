import React, {Component} from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: 'default name'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.getUserName().then((result) =>
      this.setState({
        userName: result
      })
    );
  }

  fetchUser() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("fetchName"), 2000);
    });
  }

  async getUserName() {
    return await this.fetchUser();
  }

  handleInputChange(e) {
    this.setState({
      userName: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form>
          <input name="userName" value={this.state.userName} onChange={this.handleInputChange}/>
        </form>
      </div>
    );
  }
}

export default App;
