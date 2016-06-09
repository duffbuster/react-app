/* eslint-env jasmine */
const React = require('react');
const TestUtils = require('react/lib/ReactTestUtils');
const Hello = require('./hello');

describe('hello component', () => {
  it('should render hello world', () => {
    const hello = TestUtils.renderIntoDocument(<Hello/>);
    const h1 = TestUtils.findRenderedDOMComponentWithTag(hello, 'h1');
    expect(h1.textContent).toEqual('Hello world!');
  });
});