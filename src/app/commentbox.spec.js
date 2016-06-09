/* eslint-env jasmine */
const React = require('react');
const TestUtils = require('react/lib/ReactTestUtils');
const CommentBox = require('./commentbox');

describe('commentbox component', () => {
  it('should render comments', () => {
    const commentbox = TestUtils.renderIntoDocument(<CommentBox/>);
    const h1 = TestUtils.findRenderedDOMComponentWithTag(comments, 'h1');
    expect(h1.textContent).toEqual('Comments');
  });
});
