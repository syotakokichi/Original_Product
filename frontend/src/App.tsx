// App.tsx
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PatientsList from './components/pages/PatientsList';
import PatientCreate from './components/pages/PatientCreate';
import PatientUpdate from './components/pages/PatientUpdate';

const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <div className="App">
          <nav>
            <Link to="/patients">Go to Patients List</Link>
          </nav>
          <Routes>
            <Route path="/patients" element={<PatientsList />} />
            <Route path="/patients/new" element={<PatientCreate />} />
            <Route path="/patients/:id/update" element={<PatientUpdate />} />
          </Routes>
        </div>
      </Router>
    </RecoilRoot>  
  );
}

export default App;
