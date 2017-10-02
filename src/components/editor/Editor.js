import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import TopBar from './topBar/TopBar';
import CodeBox from './codeBox/CodeBox';

const styles = theme => ({
  editor: {
    width: '1270px',
    boxShadow: '0 0 90px 1px rgba(0, 0, 0, 0.3)',

    '@font-face': {
      fontFamily: 'latolight',
      src: `url('../common/assets/fonts/lato/lato-light-webfont.woff2') format('woff2'), 
          url(../common/assets/fonts/lato/lato-light-webfont.woff') format('woff')`,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
  },
});

class Editor extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
    langChange: PropTypes.func.isRequired,
  };

  render() {
    const { data, langChange, classes } = this.props;

    return (
      <div className={classes.editor}>
        <TopBar langChange={langChange} />
        <CodeBox data={data} />
      </div>
    );
  }
}

export default injectSheet(styles)(Editor);
