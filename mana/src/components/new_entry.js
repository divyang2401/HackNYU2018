import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NewEntry extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      date: new Date(),
      phrase: 'Hello',
      log: 'enter text',
    }
  }

  handleChange = e => {
    const key = e.target.id;
    const value = e.target.value;
    const newState = {};
    newState[key] = value;
    this.setState(newState); 
  }

  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <input id="title" type="text" placeholder="title" 
          value={this.state.title}
          onChange={ this.handleChange } 
        />
        <h2>Phrase</h2>
        <input id="phrase" type="text" placeholder="phrase" 
          value={this.state.phrase}
          onChange={ this.handleChange }        
        />
        <input id="file" type="file"/>
        <button>Upload</button>
        <br/>
        <h2>Log</h2>        
        <input id="date" type="date"
          value={this.state.date}
          onChange={ this.handleChange }        
        />
        <br/>
        <textarea id="log" name="log" id="log" cols="30" rows="10" 
          value={this.state.log}
          onChange={ this.handleChange }
        />
        <button onClick={() => this.props.createEntry(this.state)} >Submit</button>
      </div>
    );
  }
}