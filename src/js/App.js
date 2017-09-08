import React, {Component} from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: 'default name'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
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
};

export default App;
