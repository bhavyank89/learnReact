import { Component } from 'react';
import './App.css';
import Counter1 from './components/Counter1';
import Counter2 from './components/Counter2';
import Hide from './components/Hide';

/*
  Lifecycle Phases
  -Mounting
  -Updating
  -Unmounting
*/

class App extends Component {
  //Mounting Phase
  /*Mounting Methods - constructor(),static getDerivedStateFromProps(), render() and componentDidMount() */
  /*Updating Methods - static getDerivedStateFromProps(),shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), and componentDidUpdate().  */

  constructor(props) {
    // Constructor run before rendering
    // Used to initialise state and binding event handlers
    console.log("inside constructor...");
    super(props);
    // Defining state
    this.state = { fname: "", lname: "", product: {}, count1: 0, count2: 0, show: true };

    // Binding event handlers
    this.handleCount1 = this.handleCount1.bind(this);
    this.handleCount2 = this.handleCount2.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    // Used to sync state as and when value of props changes
    // Ensures state are in sync with props
    // We return an object which automatically update our state
    // If we does not want to update our state we return null

    // Here are state gets update without using setState
    // This method is rarely used
    console.log("inside getDerivedStateFromProps...");
    if (props.name === "Garima" && state.fname !== "Garima") {
      return { fname: props.name, lname: "Deo", age: 12 };
    }
    return { fname: "John", lname: "Deo", age: 12 }

    // This method also run when state changes or update after rendering
  }
  handleCount1() {
    this.setState({ count1: this.state.count1 + 1 });
  }
  handleCount2() {
    this.setState({ count2: this.state.count2 + 1 });
  }
  handleToggle() {
    if (this.state.show) { this.setState({ show: false }) }
    else { this.setState({ show: true }) }
  }

  render() {
    // Called after static getDerivedFromProps() method is called
    // This method runs at the start and the re-runs when ever a state is updated
    console.log("inside render...");
    return (
      <div className="App">
        <h1>Learn lifeCycle Methods</h1>
        <p>Hey, I am <b>{this.state.fname} {this.state.lname} - {this.state.age} </b></p>
        <p>Best Example on shouldComponentUpdate() method - </p>
        <Counter1 count1={this.state.count1} handleCount1={this.handleCount1} />
        <Counter2 count2={this.state.count2} handleCount2={this.handleCount2} />
        {this.state.show ? <Hide /> : null}
        <button onClick={this.handleToggle}>Toggle</button>
      </div>
    );
  }

  componentDidMount() {
    // Called after render method
    // Only called once after initial render
    // Used to call APIs, async calls, setTimeout, adding eventListeners and many more...
    console.log("inside componentDidMount...");

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => this.setState({ product: json }));
  }
  shouldComponentUpdate(nextProps, nextState) {
    // This method prevents unnecessary rendering when new props are send
    // Example if new props is same as our previous props why would we re-render
    // If we want to render than return true else return false
    // Rarely used
    console.log("inside shouldComponentUpdate...");

    // Compare the current props with the next props
    if (this.props.value !== nextProps.value) {
      return true; // Re-render if the value prop has changed
    }

    // Compare the current state with the next state
    if (this.state.count1 !== nextState.count1 || this.state.count2 !== nextState.count2) {
      return true; // Re-render if either count1 or count2 has changed
    }

    if (this.state.fname !== nextState.fname || this.state.lname !== nextState.lname) {
      return true; // Re-render if either fname or lname has changed
    }

    if (this.state.show !== nextState.show) {
      return true; // Re-render if either count1 or count2 has changed
    }

    // Return false if no relevant state or props have changed
    return false;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Give you the value of the props and state before they are updated
    // Soon after this method run componentDidUpdate() method
    console.log("inside getSnapshotBeforeUpdate...");
    console.log("prevProps : ", prevProps);
    console.log("prevState : ", prevState);
    return prevProps;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    // Since componetDidMount() method is called only once while mounting
    // componentDidUpdate() is similar to componentDidMount(), and is used to 
    // perform API calls, async task nad many more...

    // We have access to the snapshot returned from the getSnapshotBeforeUpdate() method
    console.log("inside componentDidUpdate...");
    console.log("snapshot : ", snapshot);
  }
  componentWillUnmount() {
    // Called just before a component is unmounted from the webpage
    // Here we can remove EventListeners, clear timeouts and many more
    // we should not use setState in this method because it is of no use as our component is unmounted and ther is no use to render that component again
    console.log("inside componentWillUnmount...");
  }
}

export default App;