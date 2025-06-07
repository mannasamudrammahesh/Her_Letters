import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import TheWomen from './pages/TheWomen';
import Letters from './pages/Letters';
import ImpactMap from './pages/ImpactMap';
import LearnQuiz from './pages/LearnQuiz';
import ShareStory from './pages/ShareStory';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/women" element={<TheWomen />} />
          <Route path="/letters" element={<Letters />} />
          <Route path="/map" element={<ImpactMap />} />
          <Route path="/learn" element={<LearnQuiz />} />
          <Route path="/share" element={<ShareStory />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;