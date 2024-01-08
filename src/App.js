import './App.css';
import AddHotels from './components/AddHotels';
import Home from './components/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<AddHotels/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
