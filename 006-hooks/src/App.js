import './App.css';
// import { useState, useEffect, useRef, useContext, useReducer, useCallback, useMemo, useLayoutEffect, useDebugValue } from 'react';
import { useState, useEffect, useRef } from 'react';

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
  const [name, setName] = useState("John");
  const [myNum, setMyNum] = useState(0);
  const handleCount = () => {
    // Handling State
    setCount(count + 1);
    console.log("Count : ", count);
  }
  const handleName = () => {
    (name === "John") ? setName("Ram") : setName("John");
  }

  // UseEffect hook - To manage side-effects like API calls, subscriptions, timers, mutations, and more.
  // Run whenever re-rendering occurs
  useEffect(() => {
    console.log("component mounted...");
    // Runs at first mounting phase
    // and then run only when the data state is set.
  }, [name]);

  // useRef hook - To manipulate DOM without re-rendering
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
  return (
    <div className="App">
      <h1>Learning useState and useEffect</h1>
      <p>Count : {count}, Name : {name}</p>
      <button onClick={handleCount}>Increment</button>
      <button onClick={handleName}>updateName</button>
      <h1>Learning useRef</h1>
      <input ref={inputOne} value={myNum} type="number" onChange={(e) => setMyNum(e.target.value)} />
      <input ref={inputTwo} value={myNum} type="text" onChange={e => { }} />
      <button onClick={handleInputOne}>inputOne</button>
      <button onClick={handleInputTwo}>inputTwo</button>
    </div>
  );
}

export default App;