import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    const {cb} = props;
    super();
    this.state = {
      type: '',
      search: '',
    }

    this.cb = cb;
    this.handleKey = this.handleKey.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value}, () => {
      this.props.cb(this.state.search, this.state.type);
    });
  }

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.cb(this.state.search, this.state.type);
    }
  }

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input 
            type="search" 
            placeholder="Search"
            id="email_inline"
            className="validate"
            value={this.state.search}
            onChange={(e) => { this.setState({ search: e.target.value})}}
            onKeyDown={this.handleKey}
            />
            <button className="btn search-btn" onClick={() => this.props.cb(this.state.search, this.state.type)}>Search</button>
        </div>
        
        <div className="row">
          <label>
            <input class="with-gap" name="type" type="radio" value='' checked={this.state.type === ''} onChange={this.handleChange}/>
            <span>All</span>
          </label>
          <label>
            <input class="with-gap" name="type" type="radio" value='movie' checked={this.state.type === 'movie'} onChange={this.handleChange}/>
            <span>Movie</span>
          </label>
          <label>
            <input class="with-gap" name="type" type="radio" value='series' checked={this.state.type === 'series'} onChange={this.handleChange}/>
            <span>Series</span>
          </label>
        </div>
        
      </div>
    );
  }
}

export {Search};