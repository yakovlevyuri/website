import React from 'react';
import BioContainer from './bio/BioContainer';
import WorkContainer from './work/WorkContainer';
import EducationContainer from './education/EducationContainer';

import '../assets/styles/modules/editor.scss';

export default class Editor extends React.Component {
  static propTypes = {
    editorJson: React.PropTypes.object,
  };

  constructor(props) {
    super(props);
    this._init = this._init.bind(this);
  }

  componentDidMount() {
    this._init();
  }

  _init() {

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
      <div id="code-box">
        <BioContainer bio={bio}/>
        <p>&#47;&#42; Work Experience &#42;&#47;</p>
        <WorkContainer workExperience={workExperience} lang={lang} />
        <p>&#47;&#42; Education &#42;&#47;</p>
        <EducationContainer education={education} lang={lang}/>
      </div>
    );
  }
}
