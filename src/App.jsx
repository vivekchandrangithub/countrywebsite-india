import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching the countries data', error);
      }
    };

    fetchCountries();
  }, []);

  return (
    <div className="App">
      <h1>Countries List</h1>
      <ul>
        {countries.map((country) => (
          <li key={country.cca3}>
            <img src={country.flags.svg} alt={`${country.name.common} flag`} width="50" />
            <span>{country.name.common}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
