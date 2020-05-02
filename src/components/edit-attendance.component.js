import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditExercise extends Component {
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
    axios.get('http://localhost:5000/attendance/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          pantherId: response.data.pantherId,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          department: response.data.department,
          level: response.data.level,
          campus: response.data.campus,
          degree: response.data.degree,
          email: response.data.email,
          college: response.data.college,
          year: response.data.year
        })   
      })
      .catch(function (error) {
        console.log(error);
      })

    axios.get('http://localhost:5000/users/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            users: response.data.map(user => user.firstName),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangePantherId(e) {
    this.setState({
      pantherId: e.target.value
    })
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    })
  }
  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    })
  }

  onChangeDepartment(e) {
    this.setState({
      department: e.target.value
    })
  }

  onChangeLevel(e) {
    this.setState({
      level: e.target.value
    })
  }

  onChangeCampus(e) {
    this.setState({
      campus: e.target.value
    })
  }

  onChangeDegree(e) {
    this.setState({
      degree: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onChangeCollege(e) {
    this.setState({
      college: e.target.value
    })
  }
  onChangeYear(e) {
    this.setState({
      year: e.target.value
    })
  }



  onSubmit(e) {
    e.preventDefault();

    const attendance = {
      pantherId: this.state.pantherId,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      department: this.state.department,
      level: this.state.level,
      campus: this.state.campus,
      degree: this.state.degree,
      email: this.state.email,
      college: this.state.college,
      year: this.state.year
    }

    console.log(attendance);

    axios.post('http://localhost:5000/attendance/update/' + this.props.match.params.id, attendance)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Edit Exercise Log</h3>
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
          <label>year: </label>
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
          <input type="submit" value="Edit Exercise Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}