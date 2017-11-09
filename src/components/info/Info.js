import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import avatarUrl from './images/avatar@2x.jpg';

const styles = {
  h1: {
    fontSize: '14px',
    fontWeight: 'normal',
  },
  h2: {
    fontSize: '13px',
    fontWeight: 'normal',
    color: '#A5ACB0',
  },
  img: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    marginBottom: '10px',
    boxShadow: `inset 0 0 0 1px rgba(0, 0, 0, 0.2),
      inset 0 2px 0 rgba(255, 255, 255, 0.1)`,
  },
};

class Info extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { name, position, classes } = this.props;

    return (
      <div className={classes.info}>
        <img className={classes.img} src={avatarUrl} alt="Avatar" />
        <h1 className={classes.h1}>{name}</h1>
        <h2 className={classes.h2}>{position}</h2>
        <p>
          Live in Prague, work at&nbsp;
          <a
            href="https://kiwi.com"
            title="Kiwi.com"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.a}
          >
            Kiwi.com
          </a>
        </p>
        <p>
          Download My Résumé in{' '}
          <a
            href="/cv/yakovlev-yuri.pdf"
            target="_blank"
            className="disabled"
            rel="noopener noreferrer"
          >
            JSON
          </a>{' '}
          format<br />or find me on{' '}
          <a
            href="https://cz.linkedin.com/in/yakovlevyuri"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </div>
    );
  }
}

export default injectSheet(styles)(Info);
