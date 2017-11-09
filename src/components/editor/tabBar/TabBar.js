import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

/*function generateImage(nonRetina, retina) {
  return window.devicePixelRatio > 1 ? retina : nonRetina;
}*/

const styles = {
  tabBar: {
    display: 'flex',
    position: 'relative',
    margin: 0,
    height: '3.5em',
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
    lineHeight: '3.5em',
    color: 'rgba(157, 165, 180, 0.6)',
    backgroundColor: '#1F201B',
    boxShadow: 'inherit',
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

  header: {
    display: 'flex',
  },

  icon: {
    display: 'inline-block',
    width: 12,
    height: 12,
    top: '50%',
    transform: 'translateY(-50%)',
    borderRadius: '50%',
    marginLeft: 10,

    '&.close': {
      backgroundColor: '#ED6B60',
    },
    '&.minimize': {
      backgroundColor: '#F6BE4F',
    },
    '&.fullScreen': {
      backgroundColor: '#64C957',
    },
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
      className={`${this.props.classes.tab} ${
        id === this.state.active ? 'active' : ''
      }`}
      title={title}
      onClick={this.onLangChange}
    >
      <div id={id} className={this.props.classes.tabTitle}>
        {title}
      </div>
    </li>
  );

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.header}>
          <span className={`${classes.icon} close`} />
          <span className={`${classes.icon} minimize`} />
          <span className={`${classes.icon} fullScreen`} />
        </div>
        <div>
          <ul className={classes.tabBar}>
            {this.generateTab('english', 'english.json')}
            {this.generateTab('czech', 'czech.json')}
            {this.generateTab('russian', 'russian.json')}
          </ul>
        </div>
      </div>
    );
  }
}

export default injectSheet(styles)(TopBar);
