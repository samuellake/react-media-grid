import React, { Component } from 'react';

class Youtube extends Component {
  render() {

    const {id} = this.props;
    const url = `https://www.youtube.com/embed/${id}`;

    return (
      <div className="react-media-grid-item-youtube">
        <iframe width="560" height="315" src={url} frameborder="0" allowfullscreen></iframe>
      </div>
    );
  }
}

export default Youtube;
