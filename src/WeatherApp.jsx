import React from 'react';
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import Typography from "@mui/material/Typography";

export default function WeatherApp() {
    const [weather, setWeatherApp] = useState({
        city: "Delhi",
        atmosphere: "overcast clouds",
        feels_like: 305.47,
        humidity: 70,
        temp: 301.96,
        temp_max: 301.96
    });

    const [error, setError] = useState(null); // <-- error state

    function updateInfo(res) {
        if (!res || !res.city) {
            setError("City not found ❌");
            return;
        }
        setError(null);
        setWeatherApp(res);
    }

    return (
        <>
            <SearchBox updateInfo={updateInfo} />
            <br />
            
            {error ? (
                <Typography 
                    variant="h5" 
                    align="center" 
                    color="error" 
                    sx={{ mt: 3 }}
                >
                    {error}
                </Typography>
            ) : (
                <InfoBox weatherData={weather} />
            )}
        </>
    );
}
