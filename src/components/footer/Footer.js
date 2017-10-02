import React, { Component } from 'react';

export default class Footer extends Component {
  getCurrentYear = () => {
    return new Date().getFullYear();
  };

  /*_loadInstragramPhotos() {
    const userFeed = new Instafeed({
      get: 'user',
      accessToken: '1632422781.0cf4cd7.a07484a4a5dd4ef3a0f6a0cd004235a5',
      userId: 1632422781,
      resolution: 'low_resolution',
      template:
        '<a href="{{link}}" rel="nofollow" target="_blank"><img src="{{image}}" /></a>',
      limit: 99,
    });

    userFeed.run();
  }*/

  render() {
    return (
      <div>
        <div id="instafeed" />
        <footer>
          <div className="wrapper">
            <p>&copy; {this.getCurrentYear()}. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    );
  }
}
