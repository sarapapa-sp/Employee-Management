
import './App.css';
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import ListOfEmployees from './Components/ListOfEmployees';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom"
import CreateNewEmployee from './Components/CreateNewEmployee';
import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListOfEmployees}></Route>
            <Route path="/employees" component={ListOfEmployees}></Route>
            <Route path="/addEmployee" component={CreateNewEmployee}></Route>
            <Route path="/updateEmployee/:id" component={UpdateEmployeeComponent}></Route>
          </Switch>
        </div>
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
