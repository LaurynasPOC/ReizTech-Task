import React, { useState, useEffect } from 'react';
import { GlobalStyle } from './styles/globalStyles';
import Main from './components/Main';
import { Country } from './components/types';
import { getCountries } from './utils/api';


const App: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([])
  useEffect(() => {
    getCountries().then(data => setCountries(data))
  }, [])


  return (
    <>
      <GlobalStyle />
      <Main countries={countries} />
    </>

  );
}

export default App;
