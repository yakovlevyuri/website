import React from 'react';
import BioItem from './BioItem';

export default class BioContainer extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this._renderBlock = this._renderBlock.bind(this);
  }

  _renderBlock() {
    const {
      data,
    } = this.props;

    if (data) {
      return <BioItem data={data} />;
    }

    return <p>There is no bio information</p>;
  }

  render() {
    return (
      <div className="news">
        {this._renderBlock()}
      </div>
    );
  }
}
