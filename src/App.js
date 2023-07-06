import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountriesContainer from './components/CountriesContainer';
import Navbar from './components/Navbar';
import CountryPage from './components/CountryPage';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<CountriesContainer />} />
        <Route path=":cca3" element={<CountryPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
