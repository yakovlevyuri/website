import React from 'react';
import WorkItem from './WorkItem';

export default class WorkContainer extends React.Component {
  static propTypes = {
    data: React.PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this._renderBlock = this._renderBlock.bind(this);
  }

  _renderBlock() {
    const {
      data,
      lang,
    } = this.props;

    if (data) {
      return (
        data.map((item, index) => {
        return <WorkItem data={item} key={index} lang={lang}/>
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
