import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Info from '../components/info/Info';

const styles = {
  home: {
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '-60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    maxWidth: '70%',
    alignSelf: 'center',
    textAlign: 'center',
  },
};

class HomePage extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.home}>
        <div className={classes.wrapper}>
          <Info
            name="Yuri Yakovlev"
            position="Full Stack Javascript Developer"
          />
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(HomePage);
