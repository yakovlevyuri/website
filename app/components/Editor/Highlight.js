import React from 'react';
import ReactDOM from 'react-dom';
import prismjs from 'prismjs';

export default class Highlight extends React.Component {
  constructor(props) {
    super(props);
    this._highlightCode = this._highlightCode.bind(this);
  }

  componentDidMount() {
    this._highlightCode();
    console.log(prismjs)
  }

  componentDidUpdate() {
    this._highlightCode();
  }

  _highlightCode() {
    var domNode = ReactDOM.findDOMNode(this);
    var nodes = domNode.querySelectorAll('pre code');
    if (nodes.length) {
      for (var i = 0; i < nodes.length; i=i+1) {
        prismjs.highlightElement(nodes[i]);
      }
    }
  }

  render() {
    return(
      <pre>
        <code>
          {this.props.children}
        </code>
      </pre>
    );
  }
}