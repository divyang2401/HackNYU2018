import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  constructor(props){
    super(props);
    
    this.renderEntries = this.renderEntries.bind(this)
  }

  renderEntries() {
    return this.props.entries.map((entry, i) => (
      <li key={entry.title}>
        <Link to={`/entry/${i}`}>
          {entry.title} 
          <span>{new Date(entry.date).toDateString()}</span>
        </Link>
      </li>
    ));
  }

  render() {
    return (
      <div>
        <h1>Echo Journal ;)</h1>
        <Link to="/new">Add</Link>
        {this.renderEntries()}
      </div>
    );
  }
}