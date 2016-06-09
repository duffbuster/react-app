var React = require('react');
var ReactDOM = require('react-dom');
var Hello = require('./app/hello');

require('./index.less');

ReactDOM.render(
  <Hello/>,
  document.getElementById('root')
);
