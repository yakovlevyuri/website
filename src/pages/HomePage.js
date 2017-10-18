import React, { Component } from 'react';

/*import Header from '../components/header/Header';*/
import EditorContainer from '../components/editor/EditorContainer';
import Downloads from '../components/downloads/Downloads';
import Footer from '../components/footer/Footer';

class HomePage extends Component {
  state = { lang: 'english' };

  langChange = lang => {
    return this.setState(() => {
      return { lang };
    });
  };

  render() {
    const { lang } = this.state;

    return (
      <div className="homepage">
        <EditorContainer lang={lang} langChange={this.langChange} />
        <Downloads />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
