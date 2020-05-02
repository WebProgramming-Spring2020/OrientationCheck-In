import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserfirstName = this.onChangeUserfirstName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstName: ''
    }
  }

  onChangeUserfirstName(e) {
    this.setState({
      firstName: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      firstName: this.state.firstName
    }

    console.log(user);

    axios.post('http://localhost:5000/users/add', user)
      .then(res => console.log(res.data));

    this.setState({
      firstName: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.firstName}
                onChange={this.onChangeUserfirstName}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}



