import React from 'react';
import Loader from 'react-loader';
import $ from 'jquery';
import Editor from './Editor';

export default class EditorContainer extends React.Component {
  constructor(props) {
    super(props);
    this._loadBioFromServer = this._loadBioFromServer.bind(this);
    this.state = {
      loaded: false,
      data: [],
    };
  }

  componentDidMount() {
    this._loadBioFromServer();
  }

  _loadBioFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({
          data: data,
          loaded: true,
        });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString()); // eslint-disable-line no-console
      }.bind(this),
    });
  }

  render() {
    return (
      <div className="app">
        <Loader loaded={this.state.loaded}>
          <Editor data={this.state.data}/>
        </Loader>
      </div>
    );
  }
}