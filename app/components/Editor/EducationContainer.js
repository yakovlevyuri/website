import React from 'react';
import EducationItem from './EducationItem';

export default class WorkContainer extends React.Component {
  static propTypes = {
    education: React.PropTypes.array.isRequired,
    lang: React.PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this._renderBlock = this._renderBlock.bind(this);
  }

  _renderBlock() {
    const {
      education,
      lang,
    } = this.props;

    if (education) {
      return (
        education.map((item, index) => {
          return <EducationItem education={item} key={index} lang={lang}/>
        }));
    }

    return <p>There is no information about education</p>;
  }

  render() {
    return (
      <div className="news">
           {this._renderBlock()}
      </div>
    );
  }
}
