import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import CarbonFootprintTracker from './components/CarbonTracker';
import DoomsdayClock from './components/Clock';
import CausesPage from './components/CausesPage';
import HomePage from './components/HomePage';
import NewsEvents from './components/News';
import CountryRankings from './components/Rankings';
import AboutUs from './components/AboutUs';
import ClimateChangeImpact from './components/Impact';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="causes" element={<CausesPage />} />
          <Route path="rankings" element={<CountryRankings />} />
          <Route path="tracker" element={<CarbonFootprintTracker />} />
          <Route path="news" element={<NewsEvents />} />
          <Route path="doomsday" element={<DoomsdayClock />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="impact" element={<ClimateChangeImpact />} />
        </Route>
      </Routes>
    </Router>
  );
}


export default App
