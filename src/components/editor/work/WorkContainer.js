import React from 'react';
import PropTypes from 'prop-types';

import WorkItem from './WorkItem';

export default class WorkContainer extends React.Component {
  static propTypes = {
    workExperience: PropTypes.array.isRequired,
    lang: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this._renderBlock = this._renderBlock.bind(this);
  }

  _renderBlock() {
    const {
      workExperience,
      lang,
    } = this.props;

    console.log(workExperience);

    if (workExperience) {
      return (
        workExperience.map((item, index) => {
        return <WorkItem workExperience={item} key={index} lang={lang}/>
      }));
    }

    return <p>There is no information about work experience</p>;
  }

  render() {
    return (
      <div className='news'>
        <p>
          <span>&#47;&#42;</span> Work Experience <span>&#42;&#47;</span>
        </p>
        <p>let workExperience = [</p>
          {this._renderBlock()}
        <p>&#125;,</p>
      </div>
    );
  }
}
