import React from 'react';
import BioContainer from './bio/BioContainer';
import WorkContainer from './work/WorkContainer';
import EducationContainer from './education/EducationContainer';

import '../common/assets/styles/modules/editor.css';

export default class Editor extends React.Component {
  static propTypes = {
    data: React.PropTypes.object,
    lang: React.PropTypes.string.isRequired,
    changeLang: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this._changeLang = this._changeLang.bind(this);
  }

  _changeLang(button) {
    const {
      changeLang,
    } = this.props;

    changeLang(button.target.id);
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
      <div className='resume'>
        <ul className='tabs-panel'>
          <li>
            <a id='english' className='switcher' onClick={this._changeLang} title='in english'>english.css</a>
          </li>
          <li>
            <a id='russian' className='switcher' onClick={this._changeLang} title='по-русски'>russian.css</a>
          </li>
          <li>
            <a id='czech' className='switcher' onClick={this._changeLang} title='v češtině'>czech.css</a>
          </li>
        </ul>

        <h3>General Info</h3>
        <BioContainer bio={bio} />
        <h3>Work Experience</h3>
        <WorkContainer workExperience={workExperience} lang={lang} />
        <h3>Education</h3>
        <EducationContainer education={education} lang={lang}/>
      </div>
    );
  }
}
