import React, { useState } from "react";

export default function TextForm(props) {
    const [text, setText] = useState("");
    let textArea = document.getElementById('mybox');
    let selection;
    const handleOnChange = (event) =>{
        setText(event.target.value);
        let words = text.split(' ');
        
    }
    const handleUpClick = () =>{
        // let newText = text.toUpperCase();
        if(window.selection){
            selection = window.getSelection().toString();
            let upper = selection.toUpperCase();
            setText(text.replace(selection, upper));
        }
        else{
            let upper = text.toUpperCase();
            setText(upper);
        }
    }
    const handleleClick = () =>{
        if(window.selection){
            selection = window.getSelection().toString();
            let lower = selection.toLowerCase();
            setText(text.replace(selection, lower));
        }
        else{
            let lower = text.toLowerCase();
            setText(lower);
        }
    }
    const handleClClick = () =>{
        setText('');
    }

    return (
        <>
        <div className='container' style={{color: props.mode==='light'?'#1a1a1a':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#1a1a1a':'white',border: '1px solid #3c3c3c', color: props.mode==='light'?'#1a1a1a':'white'}} onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleleClick}>LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClClick}>Clear</button>
        </div>
        <div className="container my-2" style={{color: props.mode==='light'?'#1a1a1a':'white'}}>
            <h1>Your text summary</h1>
            <p>{text.split(' ').length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').length} Minutes read</p>
            <p></p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : 'Enter something in text box above to preview'}</p>
        </div>
        </>
    );
}
