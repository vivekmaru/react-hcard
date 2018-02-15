import React from 'react';
import ReactDOM from 'react-dom';
import Hcard from '../components/Hcard';

describe('Hcard', () => {
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
    }
  }
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hcard {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})