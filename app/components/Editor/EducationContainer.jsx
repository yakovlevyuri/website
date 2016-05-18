import React from 'react';
import EducationItem from './EducationItem';

export default class EducationContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const workExperience = this.props.data;
    let workTemplate;

    if (workExperience.length > 0) {
      workTemplate = workExperience.map(function (item, index) {
        return (
          <EducationItem data={item} key={index}/>
        );
      });
    } else {
      workTemplate = <p>К сожалению Bio нет</p>;
    }

    return (
      <div className="news">
        {workTemplate}
      </div>
    );
  }
}

EducationItem.propTypes = {
  data: React.PropTypes.array.isRequired,
};
