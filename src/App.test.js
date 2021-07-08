import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })
test('renders without error', () => {
  //

});
test('renders increment button', () => {

})
test('renders counter display', () => {

})
test('inits counter at 0', () => {

})
test('clicking btn increments counter display', () => {

})