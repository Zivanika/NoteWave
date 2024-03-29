import './App.css';
import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route exact path="/about" element={<About/>}/>
      {/* <Route exact path="/users">
        <Users/>
      </Route> */}
      <Route exact path="/" element={<Home/>}/>
    </Routes>
    </Router>
    

      <h1>This is Notewave</h1>
    </>
  );
}

export default App;
