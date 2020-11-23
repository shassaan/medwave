import logo from './logo.svg';
import './App.css';
import { IconContext } from "react-icons";
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <>
    <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
     <Dashboard/>
     </IconContext.Provider>
    </>
  );
}

export default App;
