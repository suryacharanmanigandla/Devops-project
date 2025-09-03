import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [loading, setLoading] = useState(false);

    let URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "f6e6b86e0adbf4c59fe1475c23012667";

    async function getWeatherInfo() {
        try {
            setLoading(true);
            let res = await fetch(`${URL}?q=${city}&appid=${API_KEY}`);
            let resJson = await res.json();

            if (res.ok) {
                let wea = {
                    city: resJson.name,
                    feels_like: resJson.main.feels_like,
                    humidity: resJson.main.humidity,
                    temp: resJson.main.temp,
                    temp_max: resJson.main.temp_max,
                    atmosphere: resJson.weather[0].description
                };
                updateInfo(wea);
            } else {
                updateInfo(null);
            }
        } catch (err) {
            console.error("Fetch error:", err);
            updateInfo(null);
        } finally {
            setLoading(false);
        }
    }

    function handleCityName(event) {
        setCity(event.target.value);
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        getWeatherInfo();
        setCity("");
    }

    return (
        <div className='SearchBox'>
            <h1>Enter the city</h1>
            <form onSubmit={handleFormSubmit}>
                <TextField 
                    id="City" 
                    label="City Name" 
                    variant="outlined" 
                    color="secondary" 
                    onChange={handleCityName} 
                    value={city} 
                    required 
                />
                <br /><br />
                <Button 
                    variant="contained" 
                    color="secondary" 
                    type="submit" 
                    disabled={loading} 
                    sx={{ minWidth: 120 }}
                >
                    {loading ? (
                        <CircularProgress size={24} color="inherit" />
                    ) : (
                        "Search"
                    )}
                </Button>
            </form>
        </div>
    );
}
