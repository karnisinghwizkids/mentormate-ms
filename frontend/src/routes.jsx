import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import StudentList from './pages/StudentList'; // ✅ Add this

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/students/:gurukulaId" element={<StudentList />} />  {/* ✅ Add this */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
