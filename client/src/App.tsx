import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './styles/globals.css';
import { AuthProvider } from './context/AuthContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PersistentVideo from './components/PersistentVideo';
import Home from './pages/Home';
import Blog from './pages/Blog';
import HoldingTension from './pages/HoldingTension';
import Practice from './pages/Practice';
import Collapse from './pages/Collapse';
import CollapseAnatomy from './pages/CollapseAnatomy';
import FiveMoves from './pages/FiveMoves';
import YourTurn from './pages/YourTurn';
import DeepDive from './pages/DeepDive';
import ExploreThreads from './pages/ExploreThreads';
import Threadwork from './pages/Threadwork';
import Navigate from './pages/Navigate';
import Training from './pages/Training';
import Tier1 from './pages/Tier1';
import Tier2 from './pages/Tier2';
import Tier3 from './pages/Tier3';
import Mission from './pages/Mission';
import Organizations from './pages/Organizations';
import Communities from './pages/Communities';
import Chapters from './pages/Chapters';
import Educators from './pages/Educators';
import Safe from './pages/Safe';
import BullyingIsPlay from './pages/BullyingIsPlay';
import WhenBullyingIsntPlay from './pages/WhenBullyingIsntPlay';
import AntiBullyingTrap from './pages/AntiBullyingTrap';
import BehavioralEmotionalLandscape from './pages/BehavioralEmotionalLandscape';
import Hold from './pages/Hold';
import Reckon from './pages/Reckon';
import ProtectedStatus from './pages/ProtectedStatus';
import ParentEducation from './pages/ParentEducation';
import SchoolWideSafe from './pages/SchoolWideSafe';
import PublicMeasurement from './pages/PublicMeasurement';
import CrisisProtocol from './pages/CrisisProtocol';
import AllLearners from './pages/AllLearners';
import StompOutComparison from './pages/StompOutComparison';
import Resources from './pages/Resources';
import ModalityCompatibility from './pages/ModalityCompatibility';
import ThreadDiscovery from './pages/ThreadDiscovery';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import Apply from './pages/Apply';
import Signup from './pages/Signup';
import Login from './pages/Login';
import VerifyEmail from './pages/VerifyEmail';
import Dashboard from './pages/Dashboard';
import QuickProfile from './pages/QuickProfile';
import PersonalJourneyMap from './pages/PersonalJourneyMap';
import AssessmentResults from './pages/AssessmentResults';
import PersonalJourneyMapResults from './pages/PersonalJourneyMapResults';
import Journal from './pages/Journal';
import PracticeTool from './pages/PracticeTool';
import TrainingSetup from './pages/TrainingSetup';
import TrainingDashboard from './pages/TrainingDashboard';
import TrainingSession from './pages/TrainingSession';
import TrainingProgress from './pages/TrainingProgress';
import PracticeAssignments from './pages/PracticeAssignments';
import TrainingAdmin from './pages/TrainingAdmin';
import TrainingModuleEditor from './pages/TrainingModuleEditor';

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isAssessmentPage = location.pathname.startsWith('/assessment/');
  const isTrainingSession = location.pathname.startsWith('/training/session') || location.pathname.startsWith('/training/module/');

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle hash navigation for "Back to Top" links
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#top') {
        const topElement = document.getElementById('top');
        if (topElement) {
          topElement.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    // Handle initial hash and hash changes
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      {!isTrainingSession && <Navigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/holding-tension" element={<HoldingTension />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/collapse" element={<Collapse />} />
        <Route path="/collapse-anatomy" element={<CollapseAnatomy />} />
        <Route path="/five-moves" element={<FiveMoves />} />
        <Route path="/deep-dive" element={<DeepDive />} />
        <Route path="/your-turn" element={<YourTurn />} />
        <Route path="/explore" element={<ExploreThreads />} />
        <Route path="/threadwork" element={<Threadwork />} />
        <Route path="/navigate" element={<Navigate />} />
        <Route path="/training" element={<Training />} />
        <Route path="/training/tier1" element={<Tier1 />} />
        <Route path="/training/tier2" element={<Tier2 />} />
        <Route path="/training/tier3" element={<Tier3 />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="/communities" element={<Communities />} />
        <Route path="/chapters" element={<Chapters />} />
        <Route path="/educators" element={<Educators />} />
        <Route path="/educators/behavioral-emotional-landscape" element={<BehavioralEmotionalLandscape />} />
        <Route path="/hold" element={<Hold />} />
        <Route path="/reckon" element={<Reckon />} />
        <Route path="/safe" element={<Safe />} />
        <Route path="/safe/bullying-is-play" element={<BullyingIsPlay />} />
        <Route path="/safe/when-bullying-isnt-play" element={<WhenBullyingIsntPlay />} />
        <Route path="/safe/anti-bullying-trap" element={<AntiBullyingTrap />} />
        <Route path="/safe/capacity-building" element={<ProtectedStatus />} />
        <Route path="/safe/parent-education" element={<ParentEducation />} />
        <Route path="/safe/school-wide" element={<SchoolWideSafe />} />
        <Route path="/safe/public-measurement" element={<PublicMeasurement />} />
        <Route path="/safe/crisis-protocol" element={<CrisisProtocol />} />
        <Route path="/safe/all-learners" element={<AllLearners />} />
        <Route path="/safe/stomp-out-comparison" element={<StompOutComparison />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/modality-compatibility" element={<ModalityCompatibility />} />
        <Route path="/thread-discovery" element={<ThreadDiscovery />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/apply/:tier" element={<Apply />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assessment/quick-profile" element={<QuickProfile />} />
        <Route path="/assessment/personal-journey-map" element={<PersonalJourneyMap />} />
        <Route path="/assessment/results" element={<AssessmentResults />} />
        <Route path="/assessment/personal-journey-map/results" element={<PersonalJourneyMapResults />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/practice-tool" element={<PracticeTool />} />
        <Route path="/training/setup" element={<TrainingSetup />} />
        <Route path="/training/dashboard" element={<TrainingDashboard />} />
        <Route path="/training/session" element={<TrainingSession />} />
        <Route path="/training/module/:moduleId" element={<TrainingSession />} />
        <Route path="/training/progress" element={<TrainingProgress />} />
        <Route path="/practice-assignments" element={<PracticeAssignments />} />
        <Route path="/admin/training" element={<TrainingAdmin />} />
        <Route path="/admin/training/module/:moduleId" element={<TrainingModuleEditor />} />
      </Routes>
      {!isAssessmentPage && !isTrainingSession && <Footer />}
      <PersistentVideo isHomePage={isHomePage} />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
