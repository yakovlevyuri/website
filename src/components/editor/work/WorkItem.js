import React from 'react';
import PropTypes from 'prop-types';

import WorkProjectItem from './WorkProjectItem';

export default class WorkItem extends React.Component {
  static propTypes = {
    workExperience: PropTypes.shape({
      workPlaceName: PropTypes.string.isRequired,
      workPlaceLink: PropTypes.string.isRequired,
      position: PropTypes.object.isRequired,
      cityCountry: PropTypes.object.isRequired,
      startYear: PropTypes.string.isRequired,
      endYear: PropTypes.string.isRequired,
      responsibilities: PropTypes.object.isRequired,
    }),
    lang: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this._renderResponsibilities = this._renderResponsibilities.bind(this);
    this._renderEndYear = this._renderEndYear.bind(this);
    this._renderProjects = this._renderProjects.bind(this);
  }

  _renderEndYear() {
    const {
      endYear,
    } = this.props.workExperience;

    return (
      <p className='work_experience__end-year'>
        <span className='editor-attr'>endYear: </span>
        {
          Number(endYear) ? endYear : `'${endYear}'`
        }
        <span>&#44;</span>
      </p>
    )
  }

  _renderResponsibilities() {
    const {
      responsibilities,
    } = this.props.workExperience;

    const {
      lang,
    } = this.props;

    return (
      <div className='work_experience__responsibilities'>
        <span>responsibilities: [</span>
        {
          responsibilities[lang].map((item, key) => {
            return (
              <p key={key}>
                <span>&#39;</span>
                {item}
                <span>&#39;&#44;</span>
              </p>
            );
          })
        }
        <span>]&#44;</span>
      </div>
    );
  }

  _renderProjects() {
    const {
      lang,
    } = this.props;

    const {
      projects
    } = this.props.workExperience;

    if (projects) {
      return (
        <div className='work_experience__responsibilities'>
          <span>projects: [</span>
          {
            projects.map((project, index) => {
              return <WorkProjectItem project={project} key={index} lang={lang}/>
            })
          }
          <span>]&#44;</span>
        </div>
      );
    }
  }

  render() {
    const {
      workPlaceName,
      workPlaceLink,
      position,
      cityCountry,
      startYear,
    } = this.props.workExperience;

    const {
      lang,
    } = this.props;

    return (
      <div className='work_experience__block'>
        <p>&#123;</p>
        <p className='work_experience__workplace'>
          <span className='editor-attr'>workPlace: &#39;</span>
          <a href={workPlaceLink} target="_blank">{workPlaceName}</a>
          <span>&#39;&#44;</span>
        </p>
        <p className='work_experience__position'>
          <span className='editor-attr'>position: &#39;</span>
          {position[lang]}
          <span>&#39;&#44;</span>
        </p>
        <p className='work_experience__city-country'>
          <span className='editor-attr'>location: &#39;</span>
          {cityCountry[lang]}
          <span>&#39;&#44;</span>
        </p>
        <p className='work_experience__start-year'>
          <span className='editor-attr'>startYear: </span>
          {startYear}
          <span>&#44;</span>
        </p>
        {this._renderEndYear()}
        {this._renderResponsibilities()}
        {this._renderProjects()}
        <p>&#125;&#44;</p>
      </div>
    );
  }
}
