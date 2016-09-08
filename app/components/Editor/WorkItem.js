import React from 'react';

export default class WorkItem extends React.Component {
  static propTypes = {
    data: React.PropTypes.shape({
      workPlace: React.PropTypes.object.isRequired,
      workPlaceLink: React.PropTypes.string.isRequired,
      position: React.PropTypes.object.isRequired,
      cityCountry: React.PropTypes.object.isRequired,
      startYear: React.PropTypes.object.isRequired,
      endYear: React.PropTypes.object.isRequired,
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
    } = this.props.data;

    const {
      lang,
    } = this.props;

    return (
      <div className="work_experience__block">
        <p>.work-experience:first-child &#123;</p>
        <p className="work_experience__workplace">
          work-place: <a href={workPlaceLink} target="_blank">{workPlace[lang]}</a>;
        </p>
        <p className="work_experience__position">position: {position[lang]};</p>
        <p className="work_experience__city-country">city-country: {cityCountry[lang]};</p>
        <p className="work_experience__start-year">start-year: {startYear[lang]};</p>
        <p className="work_experience__end-year">end-year: {endYear[lang]};</p>
        <p className="work_experience__responsibilities">
          responsibilities:
          {
            responsibilities[lang].map((item) => {
              return (
                item
              );
            })
          };
        </p>
        <p>&#125;</p>
      </div>
    );
  }
}
