import React from 'react';

export default class WorkItem extends React.Component {
  static propTypes = {
    bio: React.PropTypes.shape({
      university: React.PropTypes.object.isRequired,
      cityCountry: React.PropTypes.object.isRequired,
      startYear: React.PropTypes.object.isRequired,
      endYear: React.PropTypes.object.isRequired,
      field: React.PropTypes.object.isRequired,
    }),
    lang: React.PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
  }

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
