import logo from './logo.svg';
import './App.css';
import Signin from './components/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Signin/>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
