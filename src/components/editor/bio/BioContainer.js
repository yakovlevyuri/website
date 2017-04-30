import React from 'react';
import PropTypes from 'prop-types';

import BioItem from './BioItem';

export default class BioContainer extends React.Component {
  static propTypes = {
    bio: PropTypes.object.isRequired,
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
