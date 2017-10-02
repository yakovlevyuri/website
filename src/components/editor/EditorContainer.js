import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import { FEED_QUERY } from './EditorQueries';

import Editor from './Editor';

class EditorContainer extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  render() {
    const { data, langChange } = this.props;

    return <Editor data={data} langChange={langChange} />;
  }
}

export default graphql(FEED_QUERY, {
  options: props => ({
    variables: {
      lang: props.lang,
    },
  }),
})(EditorContainer);
