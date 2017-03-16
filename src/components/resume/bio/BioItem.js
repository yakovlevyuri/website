import React from 'react';

export default class BioItem extends React.Component {
  static propTypes = {
    bio: React.PropTypes.shape({
      firstName: React.PropTypes.string.isRequired,
      lastName: React.PropTypes.string.isRequired,
      dateOfBirth: React.PropTypes.string.isRequired,
      address: React.PropTypes.object.isRequired,
    }),
  };

  render() {
    const {
      firstName,
      lastName,
      dateOfBirth,
      address,
    } = this.props.bio;

    return (
      <div className="contact_info__block">
        <p className="bio__firstName">First name: {firstName}</p>
        <p className="bio__lastName">Last name: {lastName}</p>
        <p className="bio__dateOfBirth">Date of birth: {dateOfBirth}</p>
        <p className="bio__address">Address: <a href={address.gmapsLink} target="_blank">{address.streetName}</a></p>
      </div>
    );
  }
}
