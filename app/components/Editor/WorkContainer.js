import React from 'react';
import WorkItem from './WorkItem';

export default class WorkContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      data,
      lang,
    } = this.props;

    let workTemplate;

    if (data) {
      workTemplate = data.map(function (item, index) {
        return (
          <WorkItem data={item} key={index} lang={lang}/>
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

WorkContainer.propTypes = {
  data: React.PropTypes.array.isRequired,
};
