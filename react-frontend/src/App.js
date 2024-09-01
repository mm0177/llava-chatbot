import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Homepage/Home';
import Chatbot from './Chatbot/chatbot';
import Login from './usercomponents/login';
import Register from './usercomponents/register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;