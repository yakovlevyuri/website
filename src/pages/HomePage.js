import React from 'react';
import Loader from 'react-loader';
import { connect } from 'react-redux';

import {
  fetchJson,
  changeLang,
} from '../components/resume/ResumeActions';

import Header from '../components/header/Header';
import Resume from '../components/resume/Resume';
import Downloads from '../components/downloads/Downloads';
import Footer from '../components/footer/Footer';

export class HomePage extends React.Component {
  static propTypes = {
    editorJson: React.PropTypes.object,
    isLoaded: React.PropTypes.bool,
    isError: React.PropTypes.bool,
    fetchJson: React.PropTypes.func.isRequired,
    changeLang: React.PropTypes.func.isRequired,
    lang: React.PropTypes.string.isRequired,
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
      editorJson: state.getIn(['resume', 'editorJson']),
      isLoaded: state.getIn(['resume', 'isLoaded']),
      isError: state.getIn(['resume', 'isError']),
      lang: state.getIn(['resume', 'lang'])
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
        <Header data={editorJson} />
        <Resume
          data={editorJson}
          changeLang={changeLang}
          lang={lang}
        />
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
