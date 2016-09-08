import React from 'react';
import BioContainer from './BioContainer';
import WorkContainer from './WorkContainer';
import EducationContainer from './EducationContainer';
import Highlight from 'react-highlight';

export default class Editor extends React.Component {
  static propTypes = {
    editorJson: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      bio,
      workExperience,
      education,
    } = this.props.editorJson;

    const {
      lang,
    } = this.props;

    return (
      <div>
        <BioContainer bio={bio}/>
        <p>&#47;&#42; Work Experience &#42;&#47;</p>
        <WorkContainer workExperience={workExperience} lang={lang} />
        <p>&#47;&#42; Education &#42;&#47;</p>
        <EducationContainer education={education} lang={lang}/>
      </div>
    );
  }
}
