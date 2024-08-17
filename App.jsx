import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Forbefore from './Slides';
import Forafter from './Slides2';
import Yuna from './Yuna';
import { AudioProvider } from './AudioContext';

function App() {
  return (
    <AudioProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/yuna" element={<Yuna />} />
          <Route path="/forbefore" element={<Forbefore />} />
          <Route path="/forafter" element={<Forafter />} />
        </Routes>
      </Router>
    </AudioProvider>
  );
}

export default App;
