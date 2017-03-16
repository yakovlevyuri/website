import React from 'react';

export default class WorkItem extends React.Component {
  static propTypes = {
    workExperience: React.PropTypes.shape({
      workPlaceName: React.PropTypes.string.isRequired,
      workPlaceLink: React.PropTypes.string.isRequired,
      position: React.PropTypes.object.isRequired,
      cityCountry: React.PropTypes.object.isRequired,
      startYear: React.PropTypes.string.isRequired,
      endYear: React.PropTypes.string.isRequired,
      responsibilities: React.PropTypes.object.isRequired,
    }),
    lang: React.PropTypes.string.isRequired,
  };

  render() {
    const {
      workPlaceName,
      workPlaceLink,
      position,
      cityCountry,
      startYear,
      endYear,
      responsibilities,
    } = this.props.workExperience;

    const {
      lang,
    } = this.props;

    return (

      <div className="work_experience__block" id="work-q">
        <p className="work_experience__workplace">
          <b>{position[lang]} | <a href={workPlaceLink}>{workPlaceName}</a> ({startYear} - {endYear})</b>
        </p>
        <p className="work_experience__city-country">Country/City: {cityCountry[lang]}</p>
        <ul className="work_experience__responsibilities">
          {
            responsibilities[lang].map((item, key) => {
              return <li key={key}>{item}</li>
            })
          }
        </ul>
      </div>
    );
  }
}
