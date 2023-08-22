import React, { useState, useEffect } from 'react';
import './App.css';

const apiKey = "6bc236fa8bd5e7e03f83fd8cea3eac74"; // Replace with your actual API key

function App() {
  // State variables for managing the application
  const [city, setCity] = useState('');
  const [cityWeatherData, setCityWeatherData] = useState({});
  const [previousSearches, setPreviousSearches] = useState([]);

  // Load previous search data from local storage on component mount
  useEffect(() => {
    loadPreviousSearchData();
  }, []);

  // Fetch weather data for a given city using the OpenWeatherMap API
  const getCityWeather = async (city) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      if (data.cod === 200) {
        return data;
      } else {
        throw new Error("City not found");
      }
    } catch (error) {
      console.log(error.message);
      return null;
    }
  };

  // Display weather data in a card format
  const displayWeatherData = () => {
    return (
      <div className="weather-card">
        <h2 id="cityName">{cityWeatherData.name}</h2>
        <h3 id="countryName">{cityWeatherData.sys && cityWeatherData.sys.country}</h3>
        <div id="weatherInfo">
          <img id="weatherIcon" src={`https://openweathermap.org/img/w/${cityWeatherData.weather[0].icon}.png`} alt="Weather Icon" />
          <p id="weatherDesc">{cityWeatherData.weather[0].description}</p>
        </div>
        <p id="temp">Temperature: {Math.round(cityWeatherData.main && cityWeatherData.main.temp - 273.15)}°C</p>
        <p id="humidity">Humidity: {cityWeatherData.main && cityWeatherData.main.humidity}%</p>
      </div>
    );
  };

  // Display an error message
  const displayError = () => {
    return (
      <div id="error">
        <p>Invalid city. Please try again.</p>
      </div>
    );
  };

  // Save city weather data to local storage and update previousSearches
  const saveCityWeatherData = () => {
    localStorage.setItem(cityWeatherData.name, JSON.stringify(cityWeatherData));
    setPreviousSearches([...previousSearches, cityWeatherData.name]);
  };

  // Load previous search data from local storage and update previousSearches
  const loadPreviousSearchData = () => {
    const searches = Object.keys(localStorage).filter((key) => key === apiKey); 
    setPreviousSearches(searches);
  };

  // Handle form submission to fetch and display weather data
  const handleCitySubmit = async (e) => {
    e.preventDefault();
    // Fetch and set weather data based on the submitted city
    // Save the data to local storage and update the UI
    if (city.trim() !== "") {
      try {
        const data = await getCityWeather(city);
        if (data) {
          setCityWeatherData(data);
          saveCityWeatherData();
        }
      } catch (error) {
        console.log(error);
      }
      setCity('');
    }
  };

  // Handle click on a previous search to display its weather data
  const handlePreviousSearchClick = async (search) => {
  // Retrieve and set the weather data from local storage based on the clicked search
    const data = JSON.parse(localStorage.getItem(search));
    if (data) {
      setCityWeatherData(data);
    }
  };

  // JSX code for rendering the components
  return (
    <div className="container">
      <h1>Weather App</h1>
      <form id="cityForm" onSubmit={handleCitySubmit}>
        <input type="text" id="cityInput" placeholder="Enter a city..." value={city} onChange={(e) => setCity(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {cityWeatherData.name ? displayWeatherData() : null}
      {cityWeatherData.cod === "404" && displayError()}
      <h2>Previous Searches</h2>
      <ul id="previousSearches">
        {previousSearches.map((search) => (
          <li key={search} onClick={() => handlePreviousSearchClick(search)}>
            {search}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;







// The useState hooks are used to manage state variables for the city input, city weather data, 
// and previous searches.

// The useEffect hook is used to load previous search data from local storage when the component mounts.

// The getCityWeather function fetches weather data for a given city using the OpenWeatherMap API.

// The displayWeatherData function generates JSX code to display weather data in a card format.

// The displayError function generates JSX code to display an error message when a city is not found.

// The saveCityWeatherData function saves the fetched weather data to local storage and updates the 
// previous searches list.

// The loadPreviousSearchData function filters and loads previous search data from local storage, 
// excluding the API key.

// The handleCitySubmit function handles the form submission, fetching weather data and updating the UI.

// The handlePreviousSearchClick function handles clicks on previous searches, displaying the weather data.

// The returned JSX renders the application's components, including the header, form, weather data, 
// error messages, and previous searches list.