import {Routes, Route} from 'react-router-dom'
import './App.css'
import Info from './assets/Pages/Info/Info';
import Movies from './assets/Pages/Movies/Movies';
import Register from './assets/Pages/Register/Register';
import Showcase from './assets/Pages/Showcase/Showcase';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Register />} />
      <Route path='/register' element={<Register />} />
      <Route path='/info' element={<Info />} />
      <Route path='/movies' element={<Movies />} />
      <Route path='/showcase' element={<Showcase />} />
      <Route path='/*' element={<h1> Page Not Found </h1>} />
    </Routes>
  )
}

export default App
