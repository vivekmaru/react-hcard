import React, { Component } from 'react';
import HcardForm from './HcardForm';
import Hcard from './Hcard';
import './css/style.css';

class App extends Component {
  constructor() {
    super();
    this._updateUser = this._updateUser.bind(this);
    this.state = {
        givenName: '',
        surname: '',
        email: '',
        phone: '',
        houseName: '',
        street: '',
        suburb: '',
        state:'',
        postcode: '',
        country:'',
        avatarUrl: './userAvatar.png'
    }
  }

  _updateUser(updatedProp, updatedValue) {
    this.setState({ [updatedProp]: updatedValue });
  }

  render() {
    return (
      <div className="container">
        <HcardForm user={this.state} updateHcard={this._updateUser}/>
        <Hcard user={this.state}/>
      </div>
    );
  }
}

export default App;
