import './App.css';
import { API } from './services/API';
import React,{ useState } from 'react';
import { FaTemperatureHigh, FaWind } from 'react-icons/fa';

function App() {
  const [weather, setWeather] = useState(null);
  const [search, setSearch] = useState('');
  const[city,setCity] = useState('');

  async function handleGetWeather(event){
    event.preventDefault();
    await API.get(search)
    .then((response) => setWeather(response.data))
    .catch((err) => {
      console.error("Ocorreu um erro" + err)
    });
    setCity(search);
  }

  return (
    <div className="App">
      <header>
        <form onSubmit={handleGetWeather}> 
          <input type="text" value={search} onChange={(event) =>setSearch(event.target.value)}/>
          <button type="submit">pesquisar</button>
        </form>
      </header>

     {weather &&     
     <main>
      <h1>{city}</h1>

      <section className="current-weather">
        <h2>
          Current weather
        </h2>

        <p>{weather.temperature} {weather.data}</p>
        <p>{weather.description}</p>
      </section>

      <section className="forecast">
        <h2>Forecast</h2>
      <ol>
        {
          weather.forecast.map(day =>

            <li key = {day.day}>
              <div>
                <FaTemperatureHigh />
                <p>{day.temperature.replace('+',' ')}</p>
              </div>

              <div>
                <FaWind />
                <p>{day.wind}</p>
              </div> 
            </li>
            )
        }
      </ol>
        
      </section>
     </main>
      }
    </div>
  );
}

export default App;
