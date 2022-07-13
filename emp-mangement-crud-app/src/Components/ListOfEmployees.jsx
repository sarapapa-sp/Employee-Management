import React, { Component } from "react";
import EmployeeService from "../Services/EmployeeService";

export default class ListOfEmployees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
    this.addEmployee = this.addEmployee.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }
  updateEmployee(id) {
    this.props.history.push(`/updateEmployee/${id}`);
  }
  deleteEmployee(id) {
    EmployeeService.deleteEmployee(id).then((res) => {
      // this.setState({employees: this .state.employees.filter(employee => employee.id !== id)})
      EmployeeService.getEmployees().then((res) => {
        this.setState({ employees: res.data });
      });
    })
  }
  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }
  addEmployee() {
    this.props.history.push("/addEmployee");
  }
  render() {
    return (
      <div>
        <h2 className="text-center">Employee List</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addEmployee}>
            Add Employee
          </button>
        </div>
        <div className="row">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee MailId</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.mailId}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => this.updateEmployee(employee.id)}
                    >
                      Update
                    </button>
                    <button
                      style={{marginLeft:"20px"}}
                      className="btn btn-danger ml-5"
                      onClick={() => this.deleteEmployee(employee.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
