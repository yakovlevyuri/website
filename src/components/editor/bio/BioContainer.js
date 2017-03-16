import React from 'react';
import BioItem from './BioItem';

export default class BioContainer extends React.Component {
  static propTypes = {
    bio: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this._renderBlock = this._renderBlock.bind(this);
  }

  _renderBlock() {
    const {
      bio,
    } = this.props;

    if (bio) {
      return <BioItem bio={bio} />;
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
