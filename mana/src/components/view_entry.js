import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Emotion from './emotion';

export default class ViewEntry extends Component {

  render() {
    const { id } = this.props.match.params;    
    const entry = this.props.entries[id];
    return (
      <div>
        <Link to="/">Home</Link>
        <h1>{entry.title}</h1>
        <h2>Log</h2>
        <span>{new Date(entry.date).toDateString()}</span>
        <p>{entry.log}</p>
        <h2>Transcription</h2>
        <p>{entry.phrase}</p>
        <Emotion emotion={entry.emotion}></Emotion>
      </div>
    );
  }
}