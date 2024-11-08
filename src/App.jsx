import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MenuViewer from './components/MenuViewer';
import LegalPage from './components/LegalPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:id?" element={<MenuViewer />} />
        <Route path="/legal/:document" element={<LegalPage />} />
      </Routes>
    </Router>
  );
}

export default App;