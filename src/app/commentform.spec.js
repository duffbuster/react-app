/* eslint-env jasmine */
const React = require('react');
const TestUtils = require('react/lib/ReactTestUtils');
const CommentForm = require('./commentform');

describe('commentform component', () => {
  it('should render hello world', () => {
    const commentform = TestUtils.renderIntoDocument(<CommentForm/>);
    const div = TestUtils.findRenderedDOMComponentWithTag(hello, 'div');
    expect(div.textContent).toEqual('Hello, world! I am a CommentForm.');
  });
});
