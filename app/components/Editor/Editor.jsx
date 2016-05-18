import React from 'react';
import BioContainer from './BioContainer';
import WorkContainer from './WorkContainer';
import EducationContainer from './EducationContainer';


export default class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      bio,
      workExperience,
      education,
    } = this.props.data;

    return (
      <div>
        <h3>Bio</h3>
        <BioContainer data={bio}/>

        <h3>workExperience</h3>
        <WorkContainer data={workExperience}/>

        <h3>Education</h3>
        <EducationContainer data={education}/>
      </div>
    );
  }
}