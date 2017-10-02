import React from 'react';
import PropTypes from 'prop-types';

import LangPanel from './langPanel/LangPanel';

import '../common/assets/styles/modules/header.css';

export default class Header extends React.Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    lang: PropTypes.string.isRequired,
    changeLang: PropTypes.func.isRequired,
  };

  render() {
    const { bio, workExperience } = this.props.data;

    const { lang, changeLang } = this.props;

    return (
      <header className="header">
        <LangPanel lang={lang} changeLang={changeLang} />

        <span className="avatar" />
        <h1>
          Hi, I'm {bio.firstName} {bio.lastName}
        </h1>
        <h2>
          <em>{workExperience[0].position[lang]}</em>
        </h2>
        <p>
          Live in Prague, work at&nbsp;
          <a
            href={workExperience[0].workPlaceLink}
            title={workExperience[0].workPlaceName}
            target="_blank"
          >
            {workExperience[0].workPlaceName}
          </a>,&nbsp; last time was seen at&nbsp;
          <a
            id="foursquare"
            target="_blank"
            rel="nofollow"
            href="https://foursquare.com/user/18827111/checkin/5745f32138fabe2bf2d2eb7b"
            title="Havlíčkovy sady (Grébovka)"
          >
            Havlíčkovy sady (Grébovka)
          </a>.
        </p>
      </header>
    );
  }
}
