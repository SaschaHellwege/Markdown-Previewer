import './App.css';
import React, { useState, useEffect } from 'react';
import {marked} from 'marked';


function App() {

  const markdownSample = `

  # This is an H1 Heading
  
  ## This is an H2 Subheading
  
  Here is a [link](https://www.example.com) to a website.
  
  
  
  - This is a list item.
  
  > This is a blockquote.
  
  ![we all love FCC!](https://upload.wikimedia.org/wikipedia/commons/3/39/FreeCodeCamp_logo.png)
  
  **This text is bolded.**

  Here is some \u0060 inline code \u0060 .

  \u0060\u0060\u0060   
    This is a code block.
    You can put multiple lines of code here.
  \u0060\u0060\u0060
  
      `;

  const [inputValue, setInputValue] = useState(markdownSample);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">
      <h1>Welcome to my Markdown-Previewer</h1>

      <Inputfield changeHandler={handleChange} inputValue={inputValue}/>
      <br></br>
      <Previewer inputValue={inputValue} />
    </div>
  );
}

function Inputfield({ changeHandler, inputValue }) {
  
  return (
    <div>
      <textarea 
        id="editor" 
        onChange={changeHandler}
        value={inputValue}
        rows="10"
        cols="50"
      />
    </div>
  )
}

function Previewer ({ inputValue }) {
  const getMarkdownText = () => {
    const rawMarkup = marked(inputValue);
    return {__html: rawMarkup};
  }

  return (
    <div>
      <h2>Preview: </h2>
      <div id="preview" dangerouslySetInnerHTML={getMarkdownText()} />
    </div>
  )
}

export default App;

/*
onchangelistener

state for inputfield
state for buttons


make inputfield
make previewfield

Here is some ``inline code``.

````
    This is a code block.
    You can put multiple lines of code here.
````


*/