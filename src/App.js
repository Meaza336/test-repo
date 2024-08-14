import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Form from './components/Form';
import Verification from './components/Verification';
import Today from './components/Today';
import Exit from './components/Exit';


function App() {
  return (
    <Router>
      <div>
        <nav className="bg-gray-800 py-4 px-6">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold">My App</div>
            <div>
              <Link to="/form" className="text-white hover:text-gray-300 mr-4">
                Form
              </Link>
              <Link to="/verification" className="text-white hover:text-gray-300 mr-4">
                Verification
              </Link>
              <Link to="/today" className="text-white hover:text-gray-300 mr-4">
                Today
              </Link>
              <Link to="/exit" className="text-white hover:text-gray-300">
                Exit
              </Link>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/today" element={<Today />} />
          <Route path="/exit" element={<Exit />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;