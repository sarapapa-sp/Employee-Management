import axios  from "axios"

const base_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
    getEmployees() {
        return axios.get(base_URL)
    }
    createEmployee(employee) {
        return axios.post(base_URL,employee)
    }
    getEmployeeById(employeeid) {
        return axios.get(base_URL+"/"+employeeid)
    }
    updateEmployee(employee, employeeid) {
        return axios.put(base_URL + "/" + employeeid,employee);
    }
}

export default new EmployeeService()