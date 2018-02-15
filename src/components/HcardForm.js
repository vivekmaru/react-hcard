import React, { Component } from 'react';
class HcardForm extends Component {
  constructor(props) {
    super(props);
    this._handleChange = this._handleChange.bind(this);
    this._handleImageUpload = this._handleImageUpload.bind(this);
  }

  _handleChange(e) {
    this.props.updateHcard(e.target.name, e.target.value);
  }

  _handleImageUpload(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    const updateField = e.target.name;
    if(file && file.type.match('image.*')) {
      reader.readAsDataURL(file);
      reader.addEventListener('loadend', () => this.props.updateHcard(updateField, reader.result));
    }
  }

  render() {
    const { user } = this.props;
    return (
    <div className="hcardBuilder">
      <h1 className="hcardBuilder_mainHeading">hCard Builder</h1>
      <form action="">
        <section className="userDetails">
          <h3 className="hcardBuilder_formHeading">PERSONAL DETAILS</h3>
          <p>
            <label htmlFor="givenName">
              Given Name
              <input type="text" id="givenName" name="givenName" value={user.givenName} onChange={this._handleChange} />
            </label>
            <label htmlFor="surname">
              SURNAME
              <input type="text" id="surname" name="surname" value={user.surname} onChange={this._handleChange} />
            </label>
          </p>
          <p>
            <label htmlFor="email">
              EMAIL
              <input type="text" id="email" name="email" value={user.email} onChange={this._handleChange} />
            </label>
            <label htmlFor="phone">
              PHONE
              <input type="text" id="phone" name="phone" value={user.phone} onChange={this._handleChange} />
            </label>
          </p>
        </section>
        <section className="userAddr">
          <h3 className="hcardBuilder_formHeading">ADDRESS</h3>
          <p>
            <label htmlFor="houseName">
              HOUSE NAME OR #
              <input type="text" id="houseName" name="houseName" value={user.houseName} onChange={this._handleChange} />
            </label>
            <label htmlFor="street">
              STREET
              <input type="text" id="street" name="street" value={user.street} onChange={this._handleChange} />
            </label>
          </p>
          <p>
            <label htmlFor="suburb">
              SUBURB
              <input type="text" id="suburb" name="suburb" value={user.suburb} onChange={this._handleChange} />
            </label>
            <label htmlFor="state">
              STATE
              <input type="text" id="state" name="state" value={user.state} onChange={this._handleChange} />
            </label>
          </p>
          <p>
            <label htmlFor="postcode">
              POSTCODE:
              <input type="text" id="postcode" name="postcode" value={user.postcode} onChange={this._handleChange} />
            </label>
            <label htmlFor="country">
              COUNTRY
              <input type="text" id="country" name="country" value={user.country} onChange={this._handleChange} />
            </label>
          </p>
        </section>
        <section className="buttonContainer">
            <label htmlFor="fileUpload">
              Upload Avatar
              <input type="file" id="fileUpload" name="avatarUrl" accept="image/*" onChange={this._handleImageUpload} />
            </label>
            <label htmlFor="">
                Create hCard
                <input type="button" />
              </label>
        </section>
      </form>
    </div>
    )
  }
}

export default HcardForm;