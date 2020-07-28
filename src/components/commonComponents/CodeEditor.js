import React, { Component } from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
class CodeEditor extends Component {
  render() {
    return (
      <AceEditor
        placeholder="Placeholder Text"
        mode="javascript"
        theme="monokai"
        name="blah2"
        // onLoad={this.onLoad}
        // onChange={this.onChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={this.props.codeContent}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}/>
    );
  }
}

export default CodeEditor;