import logo from './logo.svg';
import './App.css';
import { IconContext } from "react-icons";
import Dashboard from './Dashboard/Dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainPage from './MainPage/MainPage';
import VideoCall from './VideoCall/VideoCall'
import BookAppointment from './BookAppointment/BookAppointment';

function App() {
  return (
    <>
      <Router>
      
       <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
          <Dashboard>
            <Switch>
            <Route path="/book-appointment"><BookAppointment/></Route>
            <Route path="/video"><VideoCall/></Route>
            <Route path="/"><MainPage /></Route>
           
            </Switch>
          </Dashboard>
        </IconContext.Provider>
       
      </Router>
    </>
  );
}

export default App;
