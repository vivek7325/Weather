import './App.css';
import WeatherDisplay from './WeatherDisplay';
import SearchCity from './SearchCity';
import ErrorDisplay from './Error';
import { useState } from 'react';

function App() {

  const [WeatherData, setWeatherData] = useState(null);
  const [error,setError] = useState(null);

  const handleWeatherData = (data) => {
    setWeatherData(data);
    setError(null);
  }

  const handleError = (errorMessage) => {
    setError(errorMessage);
    setWeatherData(null);
  }

  return (
    <div className="App">
     <h2>Weather App</h2>
    <SearchCity WeatherData={handleWeatherData} onError={handleError}/>
    {error && <ErrorDisplay message={error} />}
    {WeatherData && <WeatherDisplay data={WeatherData} />}
    </div>
  );
}

export default App;
