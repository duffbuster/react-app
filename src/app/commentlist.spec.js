/* eslint-env jasmine */
const React = require('react');
const TestUtils = require('react/lib/ReactTestUtils');
const CommentList = require('./commentlist');

describe('commentlist component', () => {
  it('should render hello world', () => {
    const commentlist = TestUtils.renderIntoDocument(<CommentList/>);
    const div = TestUtils.findRenderedDOMComponentWithTag(hello, 'div');
    expect(div.textContent).toEqual('Hello, world! I am a CommentList.');
  });
});
