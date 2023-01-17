import './App.css';
import { marked } from 'marked';
import { useState } from 'react';
import { initialMarkedParse } from './components/initialMarkedParse';

function App() {

  const [text, setText] = useState(initialMarkedParse);
  const [markdownText, setMarkdownText] = useState(marked.parse(text));

  const handlerText = (event) => {
    setText(event.target.value);
    setMarkdownText(marked.parse(event.target.value))
  }


  return (
    <div className="App">
      <div>
        <textarea id="editor" type="text" onChange={handlerText}>{text}</textarea>
      </div>
      <div id="preview" dangerouslySetInnerHTML={{__html: markdownText}} />
    </div>
  );
}

export default App;
