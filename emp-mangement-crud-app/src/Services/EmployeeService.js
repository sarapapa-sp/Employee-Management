import axios  from "axios"

const base_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
    //Get all the employees from the server
    getEmployees() {
        return axios.get(base_URL)
    }
    // add the employee to the database
    createEmployee(employee) {
        return axios.post(base_URL,employee)
    }
    // get the employee from the database
    getEmployeeById(employeeid) {
        return axios.get(base_URL+"/"+employeeid)
    }
    // update the employee from the database 
    updateEmployee(employee, employeeid) {
        return axios.put(base_URL + "/" + employeeid,employee);
    }
    // delete the employee from the database
    deleteEmployee(employeeid) {
        return axios.delete(base_URL+"/"+employeeid)
    }
}

export default new EmployeeService()