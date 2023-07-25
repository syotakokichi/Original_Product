// App.tsx
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatientsList from './components/pages/PatientsList';
import PatientCreate from './components/pages/PatientCreate';
import PatientUpdate from './components/pages/PatientUpdate';
import { AppContainer, Nav } from './styles/AppStyles';

const App = () => {
  return (
    <RecoilRoot>
      <Router>
        <AppContainer>
          <Routes>
            <Route path="/patients" element={<PatientsList />} />
            <Route path="/patients/new" element={<PatientCreate />} />
            <Route path="/patients/:id/update" element={<PatientUpdate />} />
          </Routes>
        </AppContainer>
      </Router>
    </RecoilRoot>  
  );
}

export default App;
