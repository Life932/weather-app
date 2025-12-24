import { useState } from 'react';
import WeatherCard from './WeatherCard';

function App() {

  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);


  const API_KEY = '0a3d61f10a4d4fd4981110109251411';

  const handleSearch = async (e) => {
    e.preventDefault();
    setError(null);
    setWeatherData(null);
    setLoading(true);
  

  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`);

    if (!response.ok) {

      throw new Error('City not found. Please try again.');

    }
    const data = await response.json();
    setWeatherData(data);
  }

  catch (err) {
    setError(err.message);
  }
  finally {
    setLoading(false);
  }

}
const [loading, setLoading] = useState(false);



return (
  <div className="min-h-screen bg-linear-to-br from-slate-900 to-slate-800 flex flex-col items-center pt-20 font-sans">

  
    <h1 className="text-5xl font-bold text-white mb-8">Weather App</h1>

    
    <form onSubmit={handleSearch} className='flex'>
      <input type="text"
      placeholder='Enter city name..'
      className='px-4 py-2 rounded-l-md bg-white/20 text-white placeholder-slate-300 focus:outline-none'
      value={city}
      onChange={(e) => setCity(e.target.value)}/>
      <button
      type='submit'
      className='bg-sky-500 hover:bg-sky-600 text-white font-bold px-4 py-2 rounded-r-mid transition-colors'>
        Search
      </button>
      
    </form>
  
    {loading && <p className="text-white mt-8">Loading...</p>}

    {error && <p className='text-red=400 mt-8'>{error}</p>}
  
    {!loading && !error && weatherData && <WeatherCard weatherData={weatherData} />}

  </div>
);
}


export default App;