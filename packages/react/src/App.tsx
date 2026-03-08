import { Route, Routes, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import ReactGA from "react-ga4";
import { useEffect } from 'react';

const HomePage = lazy(() => import('./pages/HomePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

ReactGA.initialize("G-VTTP7LRNBH");

function App() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return (
    <>
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
