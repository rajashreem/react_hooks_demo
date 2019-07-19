import React from 'react';

class StateWithClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    return(
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => {this.setState({count : this.state.count + 1})}}>Click me to increase count</button>
        <button onClick={() => {this.setState({count : this.state.count - 1})}}>Click me to decrease count</button>
      </div>
    );
  }

}
  
export default StateWithClass;
