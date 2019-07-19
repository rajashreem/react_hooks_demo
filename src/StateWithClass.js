import React from 'react';

class StateWithClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, 
      name: ''
    }
  }

  componentDidMount() {
    document.title = `${this.state.count} times`;
  }

  componentDidUpdate() {
    document.title = `${this.state.count} times`;
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  render() {
    return(
      <div>
        <div>
          <p>You clicked {this.state.count} times</p>
          <button onClick={() => {this.setState({count : this.state.count + 1})}}>Click me to increase count</button>
          <button onClick={() => {this.setState({count : this.state.count - 1})}}>Click me to decrease count</button>
        </div>
        <div className='form'>
          <input value={this.state.name} placeholder="Enter your name here" onChange={this.handleNameChange}></input>
          <p>Welcome {this.state.name} </p>
        </div>
      </div>
    );
  }
}
  
export default StateWithClass;
