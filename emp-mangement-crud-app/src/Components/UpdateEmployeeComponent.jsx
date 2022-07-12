import React, { Component } from "react";
import EmployeeService from "../Services/EmployeeService";

class UpdateEmployeeComponent extends Component {
  constructor(props) {
      super(props);
    //   console.log(this.props.match.params.id);

      this.state = {
        id:this.props.match.params.id,
      firstName: "",
      lastName: "",
      mailId: "",
    };
    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeMailId = this.changeMailId.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
    }
    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data
            this.setState({
                firstName: employee.firstName,
                lastName: employee.lastName,
                mailId:employee.mailId
            })
        })
    }
  updateEmployee = (event) => {
    event.preventDefault();
    let employee = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      mailId: this.state.mailId,
    };

      console.log(JSON.stringify(employee))
    
      EmployeeService.updateEmployee(employee, this.state.id).then((res) => {
          this.props.history.push("/employees")
      })
  };
  changeFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };
  changeLastName = (event) => {
    this.setState({ lastName: event.target.value });
  };
  changeMailId = (event) => {
    this.setState({ mailId: event.target.value });
  };
  cancel() {
    this.props.history.push("/employees");
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3">
              <h3 className="text-center">Update Employee</h3>
              <div className="card-body">
                <form>
                  {/* First Name */}
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      placeholder="firstName"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstName}
                    />
                  </div>
                  {/* last Name */}
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      placeholder="lastName"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastName}
                    />
                  </div>
                  {/* Mail Address */}
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      placeholder="mail Address"
                      type="email"
                      name="mailId"
                      className="form-control"
                      value={this.state.mailId}
                      onChange={this.changeMailId}
                    />
                  </div>
                  {/* Buttons */}
                  <button
                    className="btn btn-success"
                    onClick={this.updateEmployee}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: "10px" }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default UpdateEmployeeComponent;
