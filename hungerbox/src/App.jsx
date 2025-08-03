import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Restaurants from './pages/Restaurants';

function App() {
  

  return (
    <Routes>
      <Route path="/"  element={ <Home/>} />
      <Route path="/restaurant/:id"  element={ <Restaurants/>} />

    </Routes>
  )
}

export default App


