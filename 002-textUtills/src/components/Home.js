import React, { useState } from "react";

export default function Home(props) {
    document.title = "TextUtills -Home"

    const [text, setText] = useState("");
    const textAreaStyle = props.webMode === "light" ? { background: "white", color: "black" } : { background: "#212429", color: "white" };
    const headingTextStyle = props.webMode === "light" ? { color: "black" } : { color: "#57A6A1" };

    const ConvertUpCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case", "success");
    }
    const ConvertLpCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case", "success");
    }
    const copyClip = () => {
        var newText = document.getElementById("myBox");
        newText.select();
        navigator.clipboard.writeText(newText.value);
        props.showAlert("Copied to Clipboard", "success");
    }
    const clearText = () => {
        setText("");
        props.showAlert("cleared text", "success");
    }
    const clearExtraSpace = () => {

        let splitWordArray = text.split(" ");
        let unspacedWordArray = splitWordArray.filter(element => element !== "");
        let textString = "";

        unspacedWordArray.forEach((element) => {
            textString = textString + element + " ";
        })

        setText(textString);
        props.showAlert("cleared extra space", "success");
    }
    const wordCount = () => {
        let splitWordArray = text.split(" ");
        let unspacedWordArray = splitWordArray.filter(element => element !== "");

        return unspacedWordArray.length;
    }
    const characterCount = () => {
        return text.length;
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
        <>
            <div className="container">
                <div className="form-group">
                    <h1 style={headingTextStyle} className="my-3">Enter Text Here :</h1>
                    <textarea style={textAreaStyle} className="form-control" value={text} onChange={handleOnChange} placeholder="Enter text here" rows="8" id="myBox"></textarea>
                    <button className="btn btn-primary my-3 mx-3" onClick={ConvertUpCase}>ConvertUpCase</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={ConvertLpCase}>ConvertLpCase</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={copyClip}>copyClip</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={clearText}>clearText</button>
                    <button className="btn btn-primary my-3 mx-3" onClick={clearExtraSpace}>clearExtraSpace</button>
                    <h4 style={headingTextStyle}>Content Details : </h4>
                    <p>Word Count - {wordCount()} Character Count - {characterCount()}</p>
                    <h4 style={headingTextStyle}>Preview Text : </h4>
                    <p>{text.length === 0 ? "Enter Some thing to preview :)" : text}</p>
                </div>
            </div>
        </>
    )
}
