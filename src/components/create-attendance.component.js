import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateAttendance extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserfirstName = this.onChangeUserfirstName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      pantherId: 0,
      firstName: '',
      lastName: '',
      department: '',
      level: '',
      campus: '',
      degree: '',
      email: '',
      college: '',
      year: 0,
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.firstName),
            firstName: response.data[0].firstName
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeUserfirstName(e) {
    this.setState({
      firstName: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      department: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      year: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const attendance = {
      firstName: this.state.firstName,
      department: this.state.department,
      year: this.state.year,
      date: this.state.date
    }

    console.log(attendance);

    axios.post('http://localhost:5000/attendances/add', attendance)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Create New Attendance Log</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Name: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.firstName}
              onChange={this.onChangeUserfirstName}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div>
        <div className="form-group"> 
          <label>department: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.department}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>year (in minutes): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.year}
              onChange={this.onChangeDuration}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create Attendance Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}