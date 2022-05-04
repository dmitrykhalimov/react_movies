import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    const {cb} = props;
    super();
    this.state = {
      search: '',
    }

    this.cb = cb;
    this.handleKey = this.handleKey.bind(this);
  }

  // componentDidUpdate() {
  //   console.log('Я апдейтед')
  //   console.log(this.state.search);

  // }

  handleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.cb(this.state.search);
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
            <button className="btn search-btn" onClick={this.handleKey}>Search</button>
        </div>
      </div>
    );
  }
}

export {Search};