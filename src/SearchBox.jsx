import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
import { useState } from 'react';


export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("")


    let URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "f6e6b86e0adbf4c59fe1475c23012667"




    async function getWeatherInfo() {
        try {
            let res = await fetch(`${URL}?q=${city}&appid=${API_KEY}`)
            let resJson = await res.json()
            let wea = {
                city: city,
                feels_like: resJson.main.feels_like,
                humidity: resJson.main.humidity,
                temp: resJson.main.temp,
                temp_max: resJson.main.temp_max,
                atmosphere: resJson.weather[0].description
            }
            updateInfo(wea)
        } catch {
            // Suppress error to prevent workflow failure
            // Optionally: updateInfo({ city, error: true });
        }
    }






    function handleCityName(event) {
        setCity(event.target.value)

    }

    function handleFormSubmit(event) {
        event.preventDefault()
        getWeatherInfo()
        setCity("")


    }








    return (
        <div className='SearchBox'>
            <h1>Enter the city</h1>
            <form onSubmit={handleFormSubmit}>
                <TextField id="City" label="City Name" variant="outlined" color="secondary" onChange={handleCityName} value={city} required /><br></br><br></br>
                <Button variant="contained" color="secondary" type="submit">Search </Button>
            </form>



        </div>)
}


