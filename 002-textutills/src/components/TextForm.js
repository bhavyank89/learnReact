import react, { useState } from 'react'
import propTypes from 'prop-types'

export default function TextForm(props) {

    const [text, setText] = useState('');

    const handleUpClick = () => {
        console.log("handleUpClick says : " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    return (
        <>
            <div className="container mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control mb-3" value={text} id="textForm" rows="8" onChange={handleOnChange} placeholder='Enter text here'></textarea>
                <button className="btn btn-primary mx-3" onClick={handleUpClick} >Convert to upperCase</button>
                <button className="btn btn-primary mx-3" onClick={handleLoClick} >Convert to lowerCase</button>
            </div>
            <div className="container mb-3">
            <h2>Content Discription</h2>
            <p>Word Count - {text.split(" ").length-1}</p>
            <p>Characters - {text.length}</p>
            <h2>Preview</h2>
            <p>{text}</p>
            </div>
        </>
    )
}
TextForm.propTypes = {
    heading: propTypes.string
}


/*
Hooks let you use different React features from your components. 
You can either use the built-in Hooks or combine them to build your own.

State lets a component “remember” information like user input. 

*/