import React, { Component } from "react";
import EmployeeService from "../Services/EmployeeService";

class ViewEmployeeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      employee: {},
    };

    this.goBack = this.goBack.bind(this);
  }
  goBack() {
    this.props.history.push("/employees");
  }
  componentDidMount() {
    EmployeeService.getEmployeeById(this.state.id).then((res) => {
      this.setState({ employee: res.data });
    });
  }
  render() {
    return (
      <div>
        <div className="card col-md-6 offset-md-3">
          <h3 className="text-center"> View Employee details</h3>
          <div className="card-body">
            <div className="row">
              <label>Employee First Name : </label>
              <div className="">{this.state.employee.firstName}</div>
            </div>
            <div className="row">
              <label>Employee last Name : </label>
              <div className="">{this.state.employee.lastName}</div>
            </div>
            <div className="row">
              <label>Employee Email Id: </label>
              <div className="">{this.state.employee.mailId}</div>
            </div>
            <div className="row">
              <button
                className="btn btn-info"
                onClick={() => this.goBack()}
                style={{ marginTop: "20px" }}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewEmployeeComponent;
