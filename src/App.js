import './App.css';
import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";
import EmployeeDashboard from './components/employee-dashboard/employee-dashboard.component';
import AdminDashboard from './components/admin-dashboard/admin-dashboard.component';
import EmployeeHome from './components/employee-home/employee-home.component';
import Login from './components/login/login.component';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<EmployeeDashboard />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/employee" element={<EmployeeHome />} />
        <Route exact path="/admin" element={<AdminDashboard />} />
        <Route path='*' element={<Navigate to={"/"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
