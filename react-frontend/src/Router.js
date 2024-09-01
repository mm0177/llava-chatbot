// src/router.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Homepage/Home';
import Login from './usercomponents/login';
import Register from './usercomponents/register';
import Chatbot from './Chatbot/chatbot';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/chatbot" element={<Chatbot />} />
    </Routes>
  );
};

export default AppRoutes;
