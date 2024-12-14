
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<h1>Product List</h1>} />
          <Route path='/add' element={<h1>Add product</h1>} />
          <Route path='/update' element={<h1>Update product</h1>} />
          <Route path='/logout' element={<h1>Logout</h1>} />
          <Route path='/profile' element={<h1>Profile</h1>} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
