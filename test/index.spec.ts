import {expect} from 'chai';
const ReactTestUtils = require('react-dom/test-utils');
import TestComp from '../src/heyoo'


describe('Testing the test comp', () => {
  it('should render', () => {
    debugger
    const component = ReactTestUtils.renderIntoDocument(TestComp);
    const actualComp = ReactTestUtils.findRenderedDOMComponentWithTag('h1');
    expect(actualComp.textContent).to.be('Hey cool person');
  });
});
