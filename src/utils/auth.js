import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import Login from './components/Login.js';
import Register from '../components/Register.js';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/signup" element={<Register />} />
      {/* <Route path="/signin" element={<Login />} /> */}
      <Route path="*" element={<Navigate to="/signup"/>} />
    </Routes>
  );
};

export default AuthRoutes;