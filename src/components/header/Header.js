import React from 'react';
import '../common/assets/styles/modules/header.css';

export default class Header extends React.Component {
  render() {
    const {
      data,
    } = this.props;

    console.log(data);

    return (
      <header className='header'>
        <span className='avatar' />
        <h1>Hi, I'm {data.bio.firstName} {data.bio.lastName}</h1>
        <h2><em>{data.workExperience[0].position.english}</em></h2>
        <p>Live in Prague, work at&nbsp;
          <a href={data.workExperience[0].workPlaceLink}
             title={data.workExperience[0].workPlaceName}
             target='_blank'>{data.workExperience[0].workPlaceName}
          </a>,&nbsp;
          last time was seen at&nbsp;
          <a id='foursquare'
             target='_blank'
             rel='nofollow'
             href='https://foursquare.com/user/18827111/checkin/5745f32138fabe2bf2d2eb7b'
             title='Havlíčkovy sady (Grébovka)'>
            Havlíčkovy sady (Grébovka)
          </a>.
        </p>
      </header>
    );
  }
}
