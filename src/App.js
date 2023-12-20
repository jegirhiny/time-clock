import './App.css';
// import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom";
import Login from './components/login/login.component';

function App() {
  return (
    <Login></Login>

    // <BrowserRouter>
    //   <Routes>
    //     <Route exact path="/login/:name" element={<Login />} />
    //     <Route path='*' element={<Navigate to={"/"} />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
