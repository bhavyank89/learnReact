import './App.css';
// import { useState, useEffect, useRef, useContext, useReducer, useCallback, useMemo, useLayoutEffect, useDebugValue } from 'react';
import { useState, useEffect, useRef, useMemo, useCallback, useReducer, useLayoutEffect } from 'react';
import Navbar from './components/Navbar';

/*
- Hooks are functions that let you “hook into” React state and lifecycle features from function components. 
- Before React version 16.8, developers could handle state and other React features only using class components. 
- But with version 16.8, React introduced a new pattern called Hooks.
- With React Hooks, we can use state, and other React features, in a functional component.

- react Hooks - useState, useEffect, useRef, useContext, useReducer, useCallback, useMemo, useLayoutEffect and useDebugValue.
- we can even create or own custom hooks.
*/

function App() {
  // Creating State
  // useState hook - To manage states. Returns a stateful value and an updater function to update it.
  const [count, setCount] = useState(0);
  const handleCount = async () => {
    // Handling State
    await setCount(count + 1);
    updateAdjective();
  }

  // UseEffect hook - To manage side-effects like API calls, subscriptions, timers, mutations, and more.
  // Run whenever re-rendering occurs
  const [name, setName] = useState("John");
  const handleName = () => {
    (name === "John") ? setName("Ram") : setName("John");
  }
  useEffect(() => {
    console.log("component mounted...");
    // Runs at first mounting phase
    // and then run only when the data state is set.
  }, [name]);

  // useRef hook - To manipulate DOM without re-rendering
  const [myNum, setMyNum] = useState(0);
  const inputOne = useRef();
  const inputTwo = useRef();

  const handleInputOne = () => {
    console.log("Inside handleInputOne...");
    console.log(inputOne.current);
    inputOne.current.style.width = "400px";
  }
  const handleInputTwo = () => {
    console.log("Inside handleInputTwo...");
    console.log(inputTwo.current);
  }

  // Use Memo hook - used to memoize expensive operation and prevent re-rendering the expensive operation unnecessary
  // Returns the memoize value of the operation
  const [checkNumber, setCheckNumber] = useState(29_00_000);
  const [numsSize, setnumSize] = useState(30_00_000);
  const nums = new Array(numsSize).fill(0).map((_, i) => {
    return {
      index: i,
      isMagical: i === checkNumber
    };
  });
  const [number, setNumber] = useState(nums);

  const handleNumber = () => {
    const newNumsSize = numsSize === 30_00_000 ? 10_00_000 : 30_00_000;
    const newCheckNumber = checkNumber === 29_00_000 ? 9_00_000 : 29_00_000;

    setnumSize(newNumsSize);
    setCheckNumber(newCheckNumber);
    setNumber(new Array(newNumsSize).fill(0).map((_, i) => {
      return {
        index: i,
        isMagical: i === newCheckNumber
      };
    }));
  };

  // const magical = number.find(item=>item.isMagical===true);// Expensive computation
  const magical = useMemo(() => {
    return number.find(num => num.isMagical === true);
  }, [number]);

  // useCallback Hook
  // useCallback memoizes callback functions received as props, so they're not recreated on every re-render.
  const [adjective, setAdjective] = useState("good " + count);

  const updateAdjective = useCallback(() => {
    const num = count + 1;
    setAdjective("good " + num);
  }, [count]);

  // useReducer hook - used for complex state management
  const reducer = (reducerCount, action) => {
    // returns a newState
    switch (action) {
      case "Increment": return reducerCount + 1;
      case "Decrement": return reducerCount - 1;
      default: return reducerCount;
    }
  }

  const [reducerCount, dispatch] = useReducer(reducer, 0);

  const handleIncrement = () => { dispatch("Increment") };
  const handleDecrement = () => { dispatch("Decrement") };

  // Learning useEffect hook
  /*
    - It is same as useEffect hook in syntax
    - only difference is that useEffect hook is asyncronous(runs after DOM is rendered) while useLayout hook is syncronous(runs before DOM is rendered)
  */
  const [styleSpan, setStyleSpan] = useState({ marginRight: "100px", display: "none", marginTop: "20px" });
  const handleToggle = () => {
    styleSpan.display === "inline" ? setStyleSpan({ marginRight: "100px", display: "none" }) : setStyleSpan({ marginRight: "100px", display: "inline" })
  }
  useLayoutEffect(() => {
    const span2 = document.getElementById("span2");
    if (span2.style.display === "inline") {
      console.log("inside if of useLayoutEffect")
      setStyleSpan(styleSpan.marginTop = "200px");
    }
  }, [styleSpan]);

  useEffect(() => {
    const span1 = document.getElementById("span1");
    if (span1.style.display === "inline") {
      console.log("inside if of useEffect")
      setStyleSpan(styleSpan.marginTop = "200px");
    }
  }, [styleSpan]);

  return (
    <div className="App">
      {/* useState and useEffect */}
      <h1>Learning useState and useEffect</h1>
      <p>Count : {count}, Name : {name}</p>
      <button onClick={handleCount}>Count : {count}</button>{" "}
      <button onClick={handleName}>updateName</button><br />

      {/* Learning useMemo */}
      <h1>Learning useMemo</h1>
      <p>magical : {magical ? magical.index : "None"}</p>
      <button onClick={handleNumber}>numsSize : {numsSize}</button>

      {/* Learning useRef */}
      <h1>Learning useRef</h1>
      <input ref={inputOne} value={myNum} type="number" onChange={(e) => setMyNum(e.target.value)} /><br />
      <input ref={inputTwo} value={myNum} type="text" onChange={e => { }} /><br />
      <button onClick={handleInputOne}>inputOne</button>{" "}
      <button onClick={handleInputTwo}>inputTwo</button><br />

      {/* Learn useCallback */}
      <Navbar adjective={adjective} />

      {/* Learning useReducer hook */}
      <h1>Learning useReducer</h1>
      <button onClick={handleDecrement}>Decrement</button>{" "}
      <span>{reducerCount}</span>{" "}
      <button onClick={handleIncrement}>Increment</button>

      {/* Learning useLayoutEffect */}
      <h1>Learning useLayoutEffect</h1>
      <button onClick={handleToggle}>Click Me</button><br /><br />
      <span id="span1" style={styleSpan}>useEffect Hook</span>
      <span id="span2" style={styleSpan}>useLayoutEffect</span><br /><br /><br /><br />
    </div>
  );
}

export default App;