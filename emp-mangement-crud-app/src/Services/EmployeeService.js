import axios  from "axios"

const base_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService {
    getEmployees() {
        return axios.get(base_URL)
    }
}

export default new EmployeeService()