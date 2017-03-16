import React from 'react';

export default class WorkItem extends React.Component {
  static propTypes = {
    workExperience: React.PropTypes.shape({
      workPlace: React.PropTypes.string.isRequired,
      workPlaceLink: React.PropTypes.string.isRequired,
      position: React.PropTypes.object.isRequired,
      cityCountry: React.PropTypes.object.isRequired,
      startYear: React.PropTypes.string.isRequired,
      endYear: React.PropTypes.string.isRequired,
      responsibilities: React.PropTypes.object.isRequired,
    }),
    lang: React.PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      workPlace,
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

    const classArray = {
      0: "first-child",
      1: "nth-child(2)",
    };

    return (

      <div className="work_experience__block" id="work-q">
        <p>.work-experience:first-child &#123;</p>
        <p className="work_experience__workplace">workPlace: {workPlace};</p>
        <p className="work_experience__position">position: {position[lang]};</p>
        <p className="work_experience__city-country">city-country: {cityCountry[lang]};</p>
        <p className="work_experience__start-year">start-year: {startYear};</p>
        <p className="work_experience__end-year">end-year: {endYear};</p>
        <div className="work_experience__responsibilities">
          responsibilities:
          {
            responsibilities[lang].map((item, key, obj) => {
              if (key === 0) {
                return <span key={key}>&#32;{item},</span>;
              } else if (key > 0 && key < obj.length - 1) {
                return <p key={key}>{item},</p>;
              }
              return <p key={key}>{item};</p>;
            })
          }
        </div>
        <p>&#125;</p>
      </div>
    );
  }
}
