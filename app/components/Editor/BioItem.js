import React from 'react';

export default class BioItem extends React.Component {
  static propTypes = {
    data: React.PropTypes.shape({
      firstName: React.PropTypes.string.isRequired,
      lastName: React.PropTypes.string.isRequired,
      dateOfBirth: React.PropTypes.string.isRequired,
      address: React.PropTypes.object.isRequired,
    }),
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      firstName,
      lastName,
      dateOfBirth,
      address,
    } = this.props.data;

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
