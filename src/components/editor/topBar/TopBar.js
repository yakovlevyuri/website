import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import titleBar from './images/title-bar.png';
import titleBar2x from './images/title-bar@2x.png';

function generateImage(nonRetina, retina) {
  return window.devicePixelRatio > 1 ? retina : nonRetina;
}

const styles = {
  titleBar: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  tabBar: {
    display: 'flex',
    position: 'relative',
    margin: 0,
    height: '2.5em',
    boxShadow: 'inset 0 -1px 0 #171814',
    background: '#1F201B',
    overflowX: 'auto',
    overflowY: 'hidden',
    borderRadius: 0,
    paddingLeft: 0,
    listStyle: 'none',
    fontSize: '13px',
  },
  tab: {
    flex: '1 1 0',
    maxWidth: '22em',
    minWidth: '7em',
    position: 'relative',
    top: 0,
    padding: 0,
    margin: 0,
    height: 'inherit',
    fontSize: 'inherit',
    lineHeight: '2.5em',
    color: 'rgba(157, 165, 180, 0.6)',
    backgroundColor: '#1F201B',
    boxShadow: 'inherit',
    borderLeft: '1px solid #171814',
    cursor: 'pointer',

    '&.active': {
      color: '#d7dae0',
      backgroundColor: '#242420',
    },
  },
  tabTitle: {
    textAlign: 'center',
    margin: '0 0.66em',
  },
};

class TopBar extends Component {
  static propTypes = {
    langChange: PropTypes.func.isRequired,
  };

  state = { active: 'english' };

  onLangChange = element => {
    const { id } = element.target;

    this.setState({ active: id });
    this.props.langChange(id);
  };

  generateTab = (id, title) => (
    <li
      className={`${this.props.classes.tab} ${id === this.state.active
        ? 'active'
        : ''}`}
      title={title}
      onClick={this.onLangChange}
    >
      <div id={id} className={this.props.classes.tabTitle}>
        {title}
      </div>
      <div className="close-icon" />
    </li>
  );

  render() {
    const { classes } = this.props;

    return (
      <div>
        <img
          src={generateImage(titleBar, titleBar2x)}
          className={classes.titleBar}
          draggable="false"
          alt="Title Bar"
        />

        <ul className={classes.tabBar}>
          {this.generateTab('english', 'english.json')}
          {this.generateTab('czech', 'czech.json')}
          {this.generateTab('russian', 'russian.json')}
        </ul>
      </div>
    );
  }
}

export default injectSheet(styles)(TopBar);
