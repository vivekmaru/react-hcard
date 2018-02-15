import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import App from '../components/App';
import HcardForm from '../components/HcardForm';
import Hcard from '../components/Hcard';

describe('App', () => {
  Enzyme.configure({ adapter: new Adapter() });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('allows to set state', () => {
    const app = mount(<App />);
    app.setState({ givenName: 'Vivek' });
    expect(app.state().givenName).toEqual('Vivek');
  });

  // it('form change updates state', () => {
  //   const app = mount(<App />);
  //   const form = mount(<HcardForm user={app.state()} updateHcard={app.instance()._updateUser}/>);
  //   // form.find('input[name="givenName"]').simulate('change', {target: {value: 'Jon'}});
  //   const hcard = render(<Hcard user={app.state()}/>);
  //   // expect(form.find('input').get(0).props.value).toEqual('Vivek');
  //   console.log(form.find('input[name="givenName"]').node.value);
  //   // console.log(form.find('input[name="givenName"]').value);
  // });

});
