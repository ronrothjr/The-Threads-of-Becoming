import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './styles/globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PersistentVideo from './components/PersistentVideo';
import Home from './pages/Home';
import Blog from './pages/Blog';
import HoldingTension from './pages/HoldingTension';
import Practice from './pages/Practice';
import Collapse from './pages/Collapse';
import FiveMoves from './pages/FiveMoves';
import YourTurn from './pages/YourTurn';
import DeepDive from './pages/DeepDive';
import ExploreThreads from './pages/ExploreThreads';
import Threadwork from './pages/Threadwork';
import Navigate from './pages/Navigate';
import Training from './pages/Training';
import Mission from './pages/Mission';
import Organizations from './pages/Organizations';
import Communities from './pages/Communities';
import Resources from './pages/Resources';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/holding-tension" element={<HoldingTension />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/collapse" element={<Collapse />} />
        <Route path="/five-moves" element={<FiveMoves />} />
        <Route path="/deep-dive" element={<DeepDive />} />
        <Route path="/your-turn" element={<YourTurn />} />
        <Route path="/explore" element={<ExploreThreads />} />
        <Route path="/threadwork" element={<Threadwork />} />
        <Route path="/navigate" element={<Navigate />} />
        <Route path="/training" element={<Training />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
      <Footer />
      <PersistentVideo isHomePage={isHomePage} />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
