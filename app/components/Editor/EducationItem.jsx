import React from 'react';

export default class WorkItem extends React.Component {
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
    } = this.props.data;

    return (
      <div className="education__block">
        <p className="education__university">university: {university.english};</p>
        <p className="education__city-country">city-country: {cityCountry.english};</p>
        <p className="education__start-year">start-year: {startYear.english};</p>
        <p className="education__end-year">end-year: {endYear.english};</p>
        <p className="education__field">field: {field.english};</p>
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
