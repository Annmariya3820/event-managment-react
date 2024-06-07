import logo from './logo.svg';
import './App.css';
import DeleteEvent from './component/DeleteEvent';
import AddEvent from './component/AddEvent';
import SearchEvent from './component/SearchEvent';
import ViewEvent from './component/ViewEvent';
import Navbar from './component/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
  
<BrowserRouter>
<Routes>
  <Route path='/' element={<AddEvent/>} />
  <Route path='/search' element={<SearchEvent/>} />
  <Route path='/delete' element={<DeleteEvent/>} />
  <Route path='/view' element={<ViewEvent/>} />

  </Routes>
  </BrowserRouter>

  );
}

export default App;
