import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
    {/* yahan par NoteState ke andar saare components ko wrap kar arhe hai taaki saare components mein yeh state available hoo jaye context ki help se */}
    <NoteState> 
    <BrowserRouter>
      <Navbar/>
      <div className="container">
      <Routes>
      <Route exact path="/" element={<Home />} />
         <Route exact path="/about" element={<About />} />
        </Routes>
        </div>
        </BrowserRouter>
        </NoteState>
    </>
  );
}

export default App;
