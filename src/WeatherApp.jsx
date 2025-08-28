<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> main
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weather, setWeatherApp] = useState({
        city: "Delhi",
        atmosphere: "overcast clouds",
        feels_like: 305.47,
        humidity: 70,
        temp: 301.96,
        temp_max: 301.96
    })


    function updateInfo(res) {
        setWeatherApp(res)
    }


    return (
        <>

            <SearchBox updateInfo={updateInfo} />
            <InfoBox weatherData={weather} />


        </>

    );
}