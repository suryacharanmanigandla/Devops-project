import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./SearchBox.css";
import {IMG_WEATHER_MAP} from "./weatherMap";

// This object maps weather descriptions to image URLs and icons
export default function InfoBox({weatherData}) {
    if (!weatherData) return null;

    const {temp, feels_like, temp_max, humidity, city, atmosphere} = weatherData;

    const weatherKey = atmosphere?.toLowerCase();
    const weatherInfo = IMG_WEATHER_MAP[weatherKey] || IMG_WEATHER_MAP.default;
    const IconComponent = weatherInfo.icon;

    const kelvinToCelsius = (temp) => (temp - 273.15).toFixed(1);

    return (
        <div className="weatherContainer">
            <Card
                sx={{
                    maxWidth: 450,
                    width: "100%",
                    borderRadius: "15px",
                    overflow: "hidden",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                }}
            >
                <CardMedia
                    component="img"
                    alt={atmosphere}
                    height="200"
                    image={weatherInfo.img}
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h4"
                        component="div"
                        sx={{
                            fontWeight: "bold",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center", // <-- centers city + icon
                            gap: 1,
                            textAlign: "center",
                        }}
                    >
                        {city}
                        <div>
                            <IconComponent sx={{fontSize: 50, color: weatherInfo.color || "#000"}} />
                        </div>
                    </Typography>
                    <Typography variant="body1" color="text.secondary" component="div">
                        <p>
                            The atmosphere has a <strong>{atmosphere}</strong>
                        </p>
                        <p>
                            Temperature: <strong>{kelvinToCelsius(temp)}°C</strong>
                        </p>
                        <p>
                            Feels like: <strong>{kelvinToCelsius(feels_like)}°C</strong>
                        </p>
                        <p>
                            Humidity: <strong>{humidity}%</strong>
                        </p>
                        <p>
                            Max Temperature: <strong>{kelvinToCelsius(temp_max)}°C</strong>
                        </p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
