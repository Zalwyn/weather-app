

import { useEffect, useState } from 'react';
import './App.css';
import { Forecast } from './components/Forecast';
import Inputs from './components/Inputs';
import { TemperatureDetails } from './components/TemperatureDetails';
import TimeLocation from './components/TimeLocation';
// import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButton from './components/TopButton';
import getFormattedWeather from './services/weatherService';
function App() {
  const [query,setQuery] = useState({q: 'manila'})
  const [units, setUnit] = useState("metric");
  const [weather, setWeather] = useState(null)

  useEffect (()=>{
    const fetchWeather = async () =>{
      await getFormattedWeather ({...query, units}).then(
        (data)=>{
          setWeather(data);
        })
      };
  
    fetchWeather();
  }, [query, units]); 

  const formatBackground = () => {
    if (!weather) return "from-cyan-400 to-blue-700";
    const threshold = units === "metric" ? 25 : 300;
    if (weather.temp <= threshold) return "from-cyan-400 to-blue-700";

    return "from-yellow-400 to-orange-700";
  };

  return (

    <div
      className={`mx-auto max-w-screen-md mt-8 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <TopButton setQuery={setQuery}/>
      <Inputs setQuery={setQuery} units={units} setUnit={setUnit}/>
      {weather && (<div>
        <TimeLocation weather={weather} />
      <TemperatureDetails weather={weather} />
      <Forecast title="hourly forecast" items={weather.hourly}/>
      <Forecast title="daily forecast"items={weather.daily}/>
      </div>)}
     
    </div>
  );
}

export default App;
