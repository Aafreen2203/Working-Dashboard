import { useState, useRef, useMemo } from "react";
import JoditEditor from "jodit-react";
import HTMLReactParser from "html-react-parser";
import "./ChatEditor.css";

function ChatEditor() {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  return (
    <div className="editor-container">
      <h1>Chat Editor</h1>

      <div className="editor">
        <JoditEditor
          ref={editor}
          value={content}
          onChange={(newContent) => setContent(newContent)}
        />
      </div>

      <div className="preview">{HTMLReactParser(content)}</div>
    </div>
  );
}

export default ChatEditor;
