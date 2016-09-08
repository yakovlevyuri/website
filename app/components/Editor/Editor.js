import React from 'react';
import BioContainer from './BioContainer';
import WorkContainer from './WorkContainer';
import EducationContainer from './EducationContainer';
import Highlight from 'react-highlight';

export default class Editor extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      bio,
      workExperience,
      education,
    } = this.props.data;

    const {
      lang,
    } = this.props;

    return (
      <div>
        <BioContainer data={bio}/>
        <p>&#47;&#42; Work Experience &#42;&#47;</p>
        <WorkContainer data={workExperience} lang={lang} />
        <p>&#47;&#42; Education &#42;&#47;</p>
        <EducationContainer data={education} lang={lang}/>
      </div>
    );
  }
}
