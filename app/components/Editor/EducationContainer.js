import React from 'react';
import EducationItem from './EducationItem';

export default class WorkContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      data,
      lang,
    } = this.props;

    let educationTemplate;

    if (data.length > 0) {
      educationTemplate = data.map(function (item, index) {
        return (
          <EducationItem data={item} key={index} lang={lang}/>
        );
      });
    } else {
      educationTemplate = <p>К сожалению Bio нет</p>;
    }

    return (
      <div className="news">
           {educationTemplate}
      </div>
    );
  }
}

WorkContainer.propTypes = {
  data: React.PropTypes.array.isRequired,
};
