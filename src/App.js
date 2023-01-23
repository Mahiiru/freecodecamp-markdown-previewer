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
      <div class="form-outline">
        <textarea class="form-control" id="editor" rows="4" onChange={handlerText}>{text}</textarea>
      </div>
      <div id="preview-div">
        <div id="preview" dangerouslySetInnerHTML={{ __html: markdownText }} />
      </div>
    </div>
  );
}

export default App;
