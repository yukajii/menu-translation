import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MenuViewer from './components/MenuViewer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Change the route to handle the id parameter */}
        <Route path="/:id?" element={<MenuViewer />} />
      </Routes>
    </Router>
  );
}

export default App;