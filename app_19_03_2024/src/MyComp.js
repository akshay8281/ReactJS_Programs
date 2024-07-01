import { Component } from 'react'

export default class MyComp extends Component {
  constructor(props) {
    super(props)
    // this.state = { favoritecolor: 'yellow', age: 26, name: 'Akshay' }
    this.state = {};
    console.log("Called Constructor")
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Called getDerivedStateFromProps")
    return {
      address: props.address
    };
  }



  render() {
    console.log("This is Render")
    return (
      <div>
        <h1>My Favorite Color is {this.state.address}</h1>
        <button onClick={() => { this.setState({ age: 50, name: 'Javal' }) }}>Click Me!</button>
      </div>
    );
  }
  componentDidMount() {
    console.log("This is componentDidMount");
  }
}
