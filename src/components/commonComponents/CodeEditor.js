import React, { Component } from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import ace from "ace-builds";

ace.config.set('basePath', '/assets/javascripts/ace-builds')
class CodeEditor extends Component {
  render() {
    return (
      <AceEditor
        width='100%'
        height={this.props.height}
        mode="javascript"
        theme="monokai"
        name="blah2"
        // onLoad={this.onLoad}
        // onChange={this.onChange}
        fontSize={22}
        showPrintMargin={false}
        showGutter={true}
        highlightActiveLine={true}
        value={this.props.codeContent}
        readOnly={true}
        className="codeExample"
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