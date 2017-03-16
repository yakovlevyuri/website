import React from 'react';
import BioContainer from './bio/BioContainer';
import WorkContainer from './work/WorkContainer';
import EducationContainer from './education/EducationContainer';
import Highlight from 'react-highlight';

/*import '../components/common/assets/styles/modules/editor.css';*/

export default class Editor extends React.Component {
  static propTypes = {
    data: React.PropTypes.object,
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
      <div>
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

        <Highlight className='css'>
          <BioContainer bio={bio} />
          <p>&#47;&#42; Work Experience &#42;&#47;</p>
          <WorkContainer workExperience={workExperience} lang={lang} />
          <p>&#47;&#42; Education &#42;&#47;</p>
          <EducationContainer education={education} lang={lang}/>
        </Highlight>
      </div>
    );
  }
}
