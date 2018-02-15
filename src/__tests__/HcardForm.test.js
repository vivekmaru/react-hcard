import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16'
import HcardForm from '../components/HcardForm';

describe('HcardForm', () => {
  Enzyme.configure({ adapter: new Adapter() });

  const props = {
    user: {
      givenName: 'Vivek',
        surname: 'Maru',
        email: 'hi@vivekmaru.com',
        phone: '0434779090',
        houseName: '126',
        street: 'James Ruse Drive',
        suburb: 'Rosehill',
        state: 'NSW',
        postcode: '2142',
        country: 'Australia',
        avatarUrl: './userAvatar.png'
    },
    updateHcard: sinon.spy()
  }
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HcardForm {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('allows us to set props', () => {
    const form = mount(<HcardForm {...props} />);
    expect(form.props().user.surname).toEqual('Maru');
  });

  it('simulates change events', () => {
    const onInutChange = sinon.spy();
    const form = mount(<HcardForm user={props.user} updateHcard={onInutChange} />);
    form.find('input[name="givenName"]').simulate('change', {target: {value: 'Jon'}});
    expect(onInutChange.calledOnce).toEqual(true);
  });

})