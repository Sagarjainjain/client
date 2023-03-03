import './App.css';
import AdminInput from './components/adminPanel/admininput/adminInput';
import AdminPanel from './components/adminPanel/adminpanel';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminSignup from './components/adminPanel/adminsignup.jsx/admin-signup';
import HomePage from './components/homePage';



function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/admin-panel/add" exact element={<AdminInput />} />
          <Route path="/admin-panel" exact element={<AdminPanel />} />
          <Route path="/admin" exact element={<AdminSignup />} />
          <Route path="/" exact element={<HomePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
