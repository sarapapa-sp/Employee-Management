
import './App.css';
import FooterComponent from './Components/FooterComponent';
import HeaderComponent from './Components/HeaderComponent';
import ListOfEmployees from './Components/ListOfEmployees';
import {BrowserRouter as Router , Route , Switch} from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        
          <HeaderComponent />
          <div className="container">
            <Switch>
              <Route path="/" component={ListOfEmployees}></Route>
              <Route path="/employees" component={ListOfEmployees}></Route>
              <ListOfEmployees />
            </Switch>
          </div>
          <FooterComponent />
        
      </Router>
    </div>
  );
}

export default App;
