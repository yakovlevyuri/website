import React from 'react';
import PropTypes from 'prop-types';

export default class WorkItem extends React.Component {
  static propTypes = {
    bio: PropTypes.shape({
      university: PropTypes.object.isRequired,
      cityCountry: PropTypes.object.isRequired,
      startYear: PropTypes.object.isRequired,
      endYear: PropTypes.object.isRequired,
      field: PropTypes.object.isRequired,
    }),
    lang: PropTypes.string.isRequired,
  };

  render() {
    const {
      university,
      cityCountry,
      startYear,
      endYear,
      field,
    } = this.props.education;

    const {
      lang,
    } = this.props;

    return (
      <div className="education__block">
        <p>.education:first-child &#123;</p>
        <p className="education__university">university: {university[lang]};</p>
        <p className="education__city-country">city-country: {cityCountry[lang]};</p>
        <p className="education__start-year">start-year: {startYear[lang]};</p>
        <p className="education__end-year">end-year: {endYear[lang]};</p>
        <p className="education__field">field: {field[lang]};</p>
        <p>&#125;</p>
      </div>
    );
  }
}
