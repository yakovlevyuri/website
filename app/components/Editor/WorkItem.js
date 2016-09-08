import React from 'react';

export default class WorkItem extends React.Component {
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

WorkItem.propTypes = {
  data: React.PropTypes.shape({
    firstName: React.PropTypes.string.isRequired,
    lastName: React.PropTypes.string.isRequired,
    dateOfBirth: React.PropTypes.string.isRequired,
  }),
};