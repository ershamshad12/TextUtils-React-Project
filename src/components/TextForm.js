import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const onChangeHandler = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={onChangeHandler}
            id="myBox"
            rows="8"
          ></textarea>
          <br />
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>
            Convert to UpperCase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLowClick}>
            Convert to LowerCase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>
            Copy Text
          </button>
          <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} character
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h1>Preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
