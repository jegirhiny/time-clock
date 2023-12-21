import './App.css';
import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";
import Login from './components/login/login.component';
import EmployeeCard from './components/employee-card/employee-card.component';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<EmployeeCard />} />
        <Route exact path="/login/:name" element={<Login />} />
        <Route path='*' element={<Navigate to={"/"} />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
