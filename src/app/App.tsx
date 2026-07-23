import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../components/layout/Header';

// Chapters — main scroll narrative
import Loader from '../chapters/00-loader';
import TheBeginning from '../chapters/01-the-beginning';
import AvengersAssemble from '../chapters/02-avengers-assemble';
import InfinitySaga from '../chapters/03-infinity-saga';
import Thanos from '../chapters/04-thanos';
import AvengersDoomsday from '../chapters/09-avengers-doomsday';
import CharacterGallery from '../chapters/10-character-gallery';
import InteractiveTimeline from '../chapters/11-interactive-timeline';
import MCUStatistics from '../chapters/13-mcu-statistics';
import QuotesCarousel from '../chapters/15-quotes-carousel';
import FinalChapter from '../chapters/16-final-chapter';

// Main scroll narrative
const HomePage: React.FC = () => (
  <main>
    <Loader />
    <TheBeginning />
    <AvengersAssemble />
    <InfinitySaga />
    <Thanos />
    <AvengersDoomsday />
    <CharacterGallery />
    <InteractiveTimeline />
    <MCUStatistics />
    <QuotesCarousel />
    <FinalChapter />
  </main>
);

function App() {
  return (
    <Router>
      <div className="w-full min-h-screen bg-background text-foreground" id="lenis-root">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<>
            <div className="pt-16"><CharacterGallery /></div>
          </>} />
          <Route path="/timeline" element={<>
            <div className="pt-16"><InteractiveTimeline /></div>
          </>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
