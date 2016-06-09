var React = require('react');
var ReactDOM = require('react-dom');

var CommentBox = require('./app/commentbox');

// var Hello = require('./app/hello');

require('./index.less');

// ReactDOM.render(
//   <Hello/>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);