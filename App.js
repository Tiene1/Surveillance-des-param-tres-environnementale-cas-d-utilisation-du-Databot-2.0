import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardSoutenance from './pages/dashboardSoutenance';
import DashboardSalleDevWeb from './pages/dashboardSalleDevWeb';
import { NavBarProvider } from './NavBarContext';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarProvider>
          <Routes>
            <Route path="/" element={<DashboardSoutenance />} />
            <Route path="/dashboardSalleDevWeb" element={<DashboardSalleDevWeb />} />
          </Routes>
        </NavBarProvider>
      </Router>
    </div>
  );
}

export default App;
