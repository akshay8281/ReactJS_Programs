import { Component } from "react"
import "./LifeCycle.css"


export default class LifeCycle extends Component {

  /// Phase 1

  constructor(props) {
    super(props)
    this.state = {}
    console.log("This is Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("This is getDerivedStateFromProps");
    return { address: props.address, name: state.name }
  }

  render() {
    console.log("This is Render");
    return (
      <div>
        {/* <h1>My favColor is {this.state.favColor}</h1>
        <h1>My favColor is {this.state.age}</h1>
        <h1>My favColor is {this.state.name}</h1> */}
        <h1>My favColor is {this.state.address}</h1>
        <button onClick={() => { this.setState({ favColor: "Blue", age: 20, name: "Pitroda" }) }} >Click Me!</button>
      </div>
    )
  }

  componentDidMount = () => {
    console.log("This is componentDidMount");
  }


  /// Phase 2

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log("shouldComponentUpdate")
    return true
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("getSnapshotBeforeUpdate : " + prevProps, prevState);
    return prevProps
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log("componentDidUpdate");
  }


  componentWillUnmount = () => {
    console.log("componentWillUnmount will be Calle   d");
  }




}


