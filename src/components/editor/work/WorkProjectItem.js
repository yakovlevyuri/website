import React from 'react';
import PropTypes from 'prop-types';

export default class WorkProjectItem extends React.Component {
  static propTypes = {
    project: PropTypes.object.isRequired,
    lang: PropTypes.string.isRequired,
  };

  render() {
    const {
      name,
      website,
      description,
      goal,
      myRole,
    } = this.props.project;

    const {
      lang,
    } = this.props;

    return (
      <div>
        <p>&#123;</p>
        <p>
          <span>name: &#39;</span>
          <a href={website} target="_blank">{name}</a>
          <span>&#39;&#44;</span>
        </p>
        <p>
          <span>description: &#39;</span>
          {description[lang]}
          <span>&#39;&#44;</span>
        </p>
        <p>
          <span>goal: &#39;</span>
          {goal[lang]}
          <span>&#39;&#44;</span>
        </p>
        <p>
          <span>myRole: &#39;</span>
          {myRole}
          <span>&#39;&#44;</span>
        </p>
        <p>&#125;&#44;</p>
      </div>
    );
  }
}
