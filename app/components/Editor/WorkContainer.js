import React from 'react';
import WorkItem from './WorkItem';

export default class WorkContainer extends React.Component {
  static propTypes = {
    workExperience: React.PropTypes.array.isRequired,
    lang: React.PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this._renderBlock = this._renderBlock.bind(this);
  }

  _renderBlock() {
    const {
      workExperience,
      lang,
    } = this.props;

    if (workExperience) {
      return (
        workExperience.map((item, index) => {
        return <WorkItem workExperience={item} key={index} lang={lang}/>
      }));
    }

    return <p>There is no information about work experience</p>;
  }

  render() {
    return (
      <div className="news">
        {this._renderBlock()}
      </div>
    );
  }
}
