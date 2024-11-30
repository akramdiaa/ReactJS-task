import React, { createContext, useContext, useState, useEffect } from 'react';
import background1 from '../../../../assets/images/backgroundimage1.png';

const BackgroundContext = createContext();

export const BackgroundProvider = ({ children }) => {
  const [currentBackground, setCurrentBackground] = useState(background1);

  const changeBackground = (newBackground) => {
    setCurrentBackground(newBackground);
  };

  useEffect(() => {
    document.body.style.backgroundImage = `url(${currentBackground})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
  }, [currentBackground]);

  return (
    <BackgroundContext.Provider value={{ currentBackground, changeBackground }}>
      {children}
    </BackgroundContext.Provider>
  );
};

export const useBackground = () => {
  const context = useContext(BackgroundContext);
  if (!context) {
    throw new Error('useBackground must be used within a BackgroundProvider');
  }
  return context;
};