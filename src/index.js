var React = require('react');
var ReactDOM = require('react-dom');

var CommentBox = require('./app/commentbox');

// var Hello = require('./app/hello');

require('./index.less');

// ReactDOM.render(
//   <Hello/>,
//   document.getElementById('root')
// );

var data = [
  {id: 1, author: "Pete Hunt", text: "This is some comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

ReactDOM.render(
  <CommentBox url="http://localhost:3001/api/comments" pollInterval={2000} />,
  document.getElementById('content')
);