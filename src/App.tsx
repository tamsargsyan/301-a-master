import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Router from './pages/router';
import './App.css';
import { scrollToTop } from './globalFunctions/scrollToTop';

function App() {
  const location = useLocation();
  const currentLanguage = "ru";

  // Example API response structure
  const apiResponse = [
    {
      id: 1,
      title_en: 'OUR PROJECTS',
      title_am: 'ՄԵՐ ՆԱԽԱԳԾԵՐԸ',
      title_ru: 'НАШИ ПРОЕКТЫ',
      // ... other translated properties
    },
    // ... other projects
  ];

  // Find the project object for the current language
  const translatedProject = apiResponse.find(
    //@ts-ignore
    (project) => project[`title_${currentLanguage}`]
  );

  // Set default translations
  const defaultTranslations = apiResponse[0];

  // Use state to manage translations
  const [translations, setTranslations] = useState(
    translatedProject || defaultTranslations
  );

  useEffect(() => {
    scrollToTop();
    // Update translations when language changes
    setTranslations(translatedProject || defaultTranslations);
  }, [location, currentLanguage]);
  console.log(translatedProject)
  return (
    <div className="App">
      <Navbar  />
      <Router />
    </div>
  );
}

export default App;
