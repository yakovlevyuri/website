import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Hightlight from 'react-syntax-highlighter';
import ErrorBoundary from '../../ErrorBoundary';

import { monokaiSublime } from 'react-syntax-highlighter/dist/styles';

class CodeBox extends Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      allBios: PropTypes.array,
      allWorks: PropTypes.array,
    }),
  };

  renderBioPart = () => {
    const { firstName, lastName, dateOfBirth } = this.props.data.allBios[0];

    return {
      firstName,
      lastName,
      dateOfBirth,
    };
  };

  renderWorkPart = () => {
    const { allWorks } = this.props.data;

    return allWorks.map(item => {
      const {
        companyLocation,
        companyName,
        companyWebsite,
        startYear,
        endYear,
        position,
        responsibilities,
        workProjects,
      } = item;

      const allWorkProjects = workProjects.map(project => {
        const { name, website, description, goal, myRole } = project;

        return { name, website, description, goal, myRole };
      });

      return {
        companyName,
        companyWebsite,
        companyLocation,
        position,
        startYear,
        endYear,
        responsibilities,
        workProjects: allWorkProjects,
      };
    });
  };

  createCodeString = () => {
    return {
      bio: this.renderBioPart(),
      workExperience: this.renderWorkPart(),
    };
  };

  render() {
    return (
      <div className="code-box">
        <ErrorBoundary>
          <Hightlight
            language="json"
            style={monokaiSublime}
            showLineNumbers
            wrapLines
            lineNumberContainerStyle={{
              float: 'left',
              width: '30px',
              padding: '0px 1em 0px .5em',
              opacity: '0.6',
              textAlign: 'right',
              fontSize: '13px',
              lineHeight: '18px',
              display: 'block',
              fontFamily: 'inherit',
            }}
            lineStyle={{
              fontSize: '13px',
              lineHeight: '18px',
              display: 'block',
              fontFamily: 'inherit',
            }}
          >
            {this.props.data.loading
              ? 'Loading'
              : JSON.stringify(this.createCodeString(), null, 2)}
          </Hightlight>
        </ErrorBoundary>
      </div>
    );
  }
}

export default CodeBox;
