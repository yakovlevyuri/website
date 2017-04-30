import React from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader';
import { connect } from 'react-redux';
/*import Hightlight from 'react-highlight';*/

import {
  fetchJson,
  changeLang,
} from '../components/editor/EditorActions';

import Header from '../components/header/Header';
/*import Editor from '../components/editor/Editor';*/
import Downloads from '../components/downloads/Downloads';
import Footer from '../components/footer/Footer';

export class HomePage extends React.Component {
  static propTypes = {
    editorJson: PropTypes.object,
    isLoaded: PropTypes.bool,
    isError: PropTypes.bool,
    fetchJson: PropTypes.func.isRequired,
    changeLang: PropTypes.func.isRequired,
    lang: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this._init = this._init.bind(this);
  }

  componentDidMount() {
    this._init();
  }

  static mapStateToProps(state) {
    return {
      editorJson: state.getIn(['editor', 'editorJson']),
      isLoaded: state.getIn(['editor', 'isLoaded']),
      isError: state.getIn(['editor', 'isError']),
      lang: state.getIn(['editor', 'lang'])
    };
  }

  static mapDispatchToProps(dispatch) {
    return {
      fetchJson: () => dispatch(fetchJson()),
      changeLang: (lang) => dispatch(changeLang(lang)),
    };
  }

  _init() {
    this.props.fetchJson();
  }


  render() {
    const {
      isLoaded,
      editorJson,
      changeLang,
      lang,
    } = this.props;

    return (
      <Loader loaded={isLoaded}>
        <Header
          data={editorJson}
          lang={lang}
          changeLang={changeLang}
        />
        {/*<Hightlight className='javascript'>
          <Editor
            data={editorJson}
            changeLang={changeLang}
            lang={lang}
          />
        </Hightlight>*/}
        <Downloads />
        <Footer />
      </Loader>
    );
  }
}

export default connect(
  HomePage.mapStateToProps,
  HomePage.mapDispatchToProps,
)(HomePage);
