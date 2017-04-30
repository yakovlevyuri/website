import React from 'react';
import PropTypes from 'prop-types';

export default class BioItem extends React.Component {
  static propTypes = {
    bio: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      dateOfBirth: PropTypes.string.isRequired,
      address: PropTypes.object.isRequired,
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
        <p>.contact-info &#123;</p>
        <p className="bio__firstName">first-name: {firstName};</p>
        <p className="bio__lastName">last-name: {lastName};</p>
        <p className="bio__dateOfBirth">date-of-birth: {dateOfBirth};</p>
        <p className="bio__dateOfBirth">
          address: url("<a href={address.gmapsLink} target="_blank">{address.streetName}</a>");
        </p>
        <p>&#125;</p>
      </div>
    );
  }
}
