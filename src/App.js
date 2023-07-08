import './App.css';
import Signin from './components/Signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard';
import PaginationSite from './components/PaginationSite';

function App() {
  const [user, setUser] = React.useState(null);

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Signin setUser={setUser}/>}></Route>
      <Route
      path="dashboard"
      element={
        <ProtectedRoute user={user}>
          <Dashboard />
        </ProtectedRoute>
      }
      />
      <Route 
      path="paginationPage"
      element={<PaginationSite/>}
      />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
