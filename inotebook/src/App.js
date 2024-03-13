import './App.css';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Navbar from './components/Navbar'
// import {Home} from './components/Home'
// import {About} from './components/About'
import Abouts from './components/Abouts';
import Homes from './components/Homes';
function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/about">
       < Abouts/>
      </Route>
      {/* <Route exact path="/users">
        <Users/>
      </Route> */}
      <Route exact path="/">
        <Homes/>
        </Route> 
    </Routes>
    </Router>
    

      <h1>This is Notewave</h1>
    </>
  );
}

export default App;
