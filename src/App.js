import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <Router>
      <div className="App" >
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/dashboard" element={<DashBoard />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
