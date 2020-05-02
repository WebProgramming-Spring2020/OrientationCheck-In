import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import AttendancesList from "./components/attendances-list.component";
import EditAttendance from "./components/edit-attendance.component";
import CreateAttendance from "./components/create-attendance.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={AttendancesList} />
      <Route path="/edit/:id" component={EditAttendance} />
      <Route path="/create" component={CreateAttendance} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
