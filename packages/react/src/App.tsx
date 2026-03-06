import { Route, Routes, useLocation } from 'react-router-dom'
import { HomePage, NotFoundPage } from './pages'
import ReactGA from "react-ga4";
import { useEffect } from 'react';

ReactGA.initialize("G-VTTP7LRNBH");

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
