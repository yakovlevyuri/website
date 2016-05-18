import React from 'react';
import BioItem from './BioItem';

export default class BioContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const bioInfo = this.props.data;

    return (
      <div className="news">
        <BioItem data={bioInfo} />
      </div>
    );
  }
}

BioContainer.propTypes = {
  data: React.PropTypes.array.isRequired,
};
