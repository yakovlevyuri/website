import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import TabBar from './tabBar/TabBar';
import CodeBox from './codeBox/CodeBox';

const styles = {
  editor: {
    width: '1100px',
    /*boxShadow: '0 0 90px 1px rgba(0, 0, 0, 0.3)',*/
    borderRadius: 5,
    border: '1px solid #333',
    boxShadow: '1px 2px 5px 0 rgba(0, 0, 0, 0.1)',
    backgroundColor: '#242420',
  },
};

class Editor extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    langChange: PropTypes.func.isRequired,
  };

  render() {
    const { data, langChange, classes } = this.props;

    return (
      <div className={classes.editor}>
        <TabBar langChange={langChange} />
        <CodeBox data={data} />
      </div>
    );
  }
}

export default injectSheet(styles)(Editor);
