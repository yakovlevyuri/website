import React from 'react';
import PropTypes from 'prop-types';
/*import { Scrollbars } from 'react-custom-scrollbars';*/

/*import BioContainer from './bio/BioContainer';*/
import WorkContainer from './work/WorkContainer';
/*import EducationContainer from './education/EducationContainer';*/

import '../../components/common/assets/styles/modules/editor.css';

export default class Editor extends React.Component {
  static propTypes = {
    data: PropTypes.object,
  };

  render() {
    const {
      /*bio,*/
      workExperience,
      /*education,*/
    } = this.props.data;

    const {
      lang,
    } = this.props;

    return (
      <div>
        {/*<Scrollbars
          autoHide={true}
          style={{ width: 700, height: 400 }}
        >*/}
            {/*<BioContainer bio={bio} />*/}

            <WorkContainer workExperience={workExperience} lang={lang} />
            {/*<p>&#47;&#42; Education &#42;&#47;</p>
            <EducationContainer education={education} lang={lang}/>*/}
        {/*</Scrollbars>*/}
      </div>
    );
  }
}
