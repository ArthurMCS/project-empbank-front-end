import React from 'react';
import { BrowserRouter as Router, Routes as ReactRoutes, Route } from 'react-router-dom'
import ContextProvider from '../context';
import Dashboard from '../pages/dashboard';
import { Home } from '../pages/home'
import Login from '../pages/login'

export default function Routes() {
  return (
    <Router>
      <ContextProvider>
          <ReactRoutes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
          </ReactRoutes>
      </ContextProvider>
  </Router>
  )
}
