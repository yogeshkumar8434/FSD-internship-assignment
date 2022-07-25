
import './App.css';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {

  return (
    < div className="wrapper">
      <Router>
        <Routes>
        <Route path="/" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
