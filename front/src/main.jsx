import React from 'react';
import ReactDOM from 'react-dom';
import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home.jsx';
import Assessments from './assessments/Assessments.jsx';
import Description from './description/Description.jsx';
import Login from './login/login.jsx';
import Register from './register/register.jsx';
import Avaliation from './avaliation/Avaliation.jsx';
import Perfil from './perfil/Perfil.jsx';
import Perfiledit from './perfil/editarperfil.jsx';
import Header from './App.jsx';
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="assessments" element={<Assessments />} />
          <Route path="description/:id" element={<Description />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="avaliation/:id" element={<Avaliation />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/perfiledit" element={<Perfiledit />} />
      </Routes>
    </Router>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
