import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';

import { FEED_QUERY } from './EditorQueries';

import Editor from './Editor';

class EditorContainer extends Component {
  static propTypes = {
    allPostsQuery: PropTypes.object.isRequired,
  };

  render() {
    console.log(this.props);
    const { allPostsQuery, langChange } = this.props;

    return <Editor data={allPostsQuery} langChange={langChange} />;
  }
}

export default graphql(FEED_QUERY, {
  name: 'allPostsQuery',
  options: props => ({
    fetchPolicy: 'network-only',
    variables: {
      lang: props.lang,
    },
  }),
})(EditorContainer);
