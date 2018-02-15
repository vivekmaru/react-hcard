import React from 'react';

const Hcard = ({ user }) => {
  return(
    <div className="hcardPreviewContainer">
      <div className="hcardPreview">
        <h3>HCARD PREVIEW</h3>
        <header>
          <h2>{user.givenName} {user.surname}</h2>
          <img src={user.avatarUrl} alt='user'/>
        </header>
        <div className="hcardDetails">
          <p><span className="detailHeading">EMAIL</span><span>{user.email}</span></p>
          <p><span className="detailHeading">PHONE</span><span>{user.phone}</span></p>
          <p><span className="detailHeading">ADDRESS</span><span>{user.houseName} {user.street}</span></p>
          <p><span className="detailHeading empty"></span><span className="suburb">{user.suburb}</span><span className="comma"></span> <span>{user.state}</span></p>
          <p className="displayInline"><span className="detailHeading">POSTCODE</span><span>{user.postcode}</span></p>
          <p className="displayInline"><span className="detailHeading">COUNTRY</span><span>{user.country}</span></p>
        </div>
      </div>
    </div>
  )
}

export default Hcard;