import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17'
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = () => shallow(<App />)
const findByTestAttribute = (wrapper, val) => wrapper.find(`[data-test='${val}']`);
test('renders without error', () => {
  //
  const wrapper = setup()
  const appComponent = findByTestAttribute(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);

});
test('renders increment button', () => {
  //
  const wrapper = setup()
  const button = findByTestAttribute(wrapper, 'increment-btn');
  expect(button.length).toBe(1);
})
test('renders counter display', () => {
  const wrapper = setup()
  const display = findByTestAttribute(wrapper, 'counter-display');
  expect(display.length).toBe(1);
})
test('inits counter at 0', () => {

})
test('clicking btn increments counter display', () => {

})