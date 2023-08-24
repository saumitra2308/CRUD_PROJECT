import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import LandingPage from './pages/landingPage';
import AddUser from './pages/addUser';
import GetUsers from './pages/getUsers';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    </div>
    <Routes>
        <Route path="/" element={<AddUser />} /> {/* 👈 Renders at /app/ */}
        <Route path="/addUser" element={<AddUser />} /> {/* 👈 Renders at /app/ */}
        <Route path="/getUsers" element={<GetUsers />} /> {/* 👈 Renders at /app/ */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
