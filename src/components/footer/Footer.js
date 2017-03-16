import React from 'react';
import Instafeed from 'instafeed.js';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this._getCurrentYear = this._getCurrentYear.bind(this);
    this._loadInstragramPhotos = this._loadInstragramPhotos.bind(this);
  }

  componentDidMount() {
    /*this._loadInstragramPhotos();*/
  }

  _getCurrentYear() {
    return new Date().getFullYear();
  }

  _loadInstragramPhotos() {
    const userFeed = new Instafeed({
      get: 'user',
      accessToken: '1632422781.0cf4cd7.a07484a4a5dd4ef3a0f6a0cd004235a5',
      userId: 1632422781,
      resolution: 'low_resolution',
      template: '<a href="{{link}}" rel="nofollow" target="_blank"><img src="{{image}}" /></a>',
      limit: 99
    });

    userFeed.run();
  }

  render() {
    return (
      <div>
        <div id='instafeed'/>
        <footer>
          <div className='wrapper'>
            <p>&copy; {this._getCurrentYear()}. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    );
  }
}
