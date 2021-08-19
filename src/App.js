import logo from './logo.svg';
import './App.css';

import ReactWeather, { useOpenWeather } from 'react-open-weather';

function App() {

  const { data, isLoading, errorMessage } = useOpenWeather({
    key: '8ea702a4cd5050e9b05c4fb937992dd7',
    lat: '-7.362802',
    lon: '33.702477',
    lang: 'en',
    unit: 'metric'
  })

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="en"
        locationLabel="Mohammedia"
        unitLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
        showForecast
      />
    </div>
  );
}

export default App;
