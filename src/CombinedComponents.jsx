import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { IMG_WEATHER_MAP } from "./weatherMap";
import "./SearchBox.css";

export default function CombinedComponents() {
  const [weather, setWeather] = useState({
    city: "Delhi",
    atmosphere: "overcast clouds",
    feels_like: 305.47,
    humidity: 70,
    temp: 301.96,
    temp_max: 301.96,
  });

  const [city, setCity] = useState("");
  const [locationLoading, setLocationLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "f6e6b86e0adbf4c59fe1475c23012667";

  async function getWeatherInfo() {
    try {
      setSearchLoading(true);
      let res = await fetch(`${URL}?q=${city}&appid=${API_KEY}`);
      let resJson = await res.json();

      if (res.ok) {
        let wea = {
          city: resJson.name,
          feels_like: resJson.main.feels_like,
          humidity: resJson.main.humidity,
          temp: resJson.main.temp,
          temp_max: resJson.main.temp_max,
          atmosphere: resJson.weather[0].description,
        };
        setWeather(wea);
      } else {
        window.alert("City not found ❌");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      window.alert("City not found ❌");
    } finally {
      setSearchLoading(false);
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

  async function getWeatherByLocation() {
    // Check if geolocation is supported
    if (!navigator.geolocation) {
      window.alert("Geolocation is not supported by this browser ❌");
      return;
    }

    // Check and request permission first
    if (navigator.permissions) {
      try {
        const permission = await navigator.permissions.query({ name: 'geolocation' });
        if (permission.state === 'denied') {
          window.alert("Location permission is denied. Please enable location access in your browser settings and try again.");
          return;
        }
      } catch (error) {
        console.log("Permission query error:", error);
      }
    }

    setLocationLoading(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        console.log("Location obtained:", latitude, longitude);

        try {
          const apiUrl = `${URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
          console.log("API URL:", apiUrl);

          let res = await fetch(apiUrl);
          console.log("API Response status:", res.status);
          console.log("API Response ok:", res.ok);

          let resJson = await res.json();
          console.log("API Response data:", resJson);

          if (res.ok) {
            let wea = {
              city: resJson.name,
              feels_like: resJson.main.feels_like,
              humidity: resJson.main.humidity,
              temp: resJson.main.temp,
              temp_max: resJson.main.temp_max,
              atmosphere: resJson.weather[0].description,
            };
            console.log("Weather data processed:", wea);
            setWeather(wea);
            window.alert("Weather data updated successfully! ✅");
          } else {
            console.error("API Error:", resJson);
            window.alert(`API Error: ${resJson.message || "Unable to fetch weather for your location ❌"}`);
          }
        } catch (err) {
          console.error("Fetch error:", err);
          window.alert("Network error: Unable to fetch weather for your location ❌");
        } finally {
          setLocationLoading(false);
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            break;
          case error.POSITION_UNAVAILABLE:
            break;
          case error.TIMEOUT:
            break;
          default:
            break;
        }

        setLocationLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // 5 minutes
      }
    );
  }

  const kelvinToCelsius = (temp) => (temp - 273.15).toFixed(1);

  const weatherKey = weather.atmosphere?.toLowerCase();
  const weatherInfo = IMG_WEATHER_MAP[weatherKey] || IMG_WEATHER_MAP.default;
  const IconComponent = weatherInfo.icon;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6dd5ed, #2193b0)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            borderRadius: "16px",
            textAlign: "center",
            background: "rgba(255,255,255,0.9)",
          }}
        >
          {/* Search Box */}
          <Typography variant="h4" gutterBottom fontWeight="bold">
            SKY CAST
          </Typography>

          {/* Horizontal Layout */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              alignItems: "flex-start",
            }}
          >
            {/* Left Side: Search Box */}
            <Box sx={{ flex: 1, minWidth: 0, marginTop: '250px' }}>
              <form onSubmit={handleFormSubmit}>
                <Box display="flex" flexDirection="column" gap={2}>
                  <TextField
                    id="City"
                    label="Enter City"
                    variant="outlined"
                    color="secondary"
                    onChange={handleCityName}
                    value={city}
                    required
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    disabled={searchLoading}
                    sx={{ minWidth: 120, alignSelf: "center" }}
                  >
                    {searchLoading ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      "Search"
                    )}
                  </Button>
                </Box>
              </form>

              {/* My Location Button */}
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={getWeatherByLocation}
                  disabled={locationLoading}
                  sx={{ minWidth: 120 }}
                >
                  {locationLoading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : (
                    "My Location"
                  )}
                </Button>
              </Box>
            </Box>

            {/* Right Side: Weather Info */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Card
                sx={{
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 6px 25px rgba(0,0,0,0.2)",
                }}
              >
                  <CardMedia
                    component="img"
                    alt={weather.atmosphere}
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
                        justifyContent: "center",
                        gap: 1,
                      }}
                    >
                      {weather.city}
                      <IconComponent
                        sx={{ fontSize: 50, color: weatherInfo.color || "#000" }}
                      />
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                      {weather.atmosphere}
                    </Typography>

                    {/* Horizontal Weather Stats */}
                    <Box
                      mt={3}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      flexWrap="wrap"
                      gap={2}
                    >
                      <Paper elevation={2} sx={{ flex: 1, p: 2, minWidth: 100 }}>
                        <WbSunnyIcon color="warning" />
                        <Typography variant="body2" color="text.secondary">
                          Temp
                        </Typography>
                        <Typography variant="h6" fontWeight="bold">
                          {kelvinToCelsius(weather.temp)}°C
                        </Typography>
                      </Paper>
                      <Paper elevation={2} sx={{ flex: 1, p: 2, minWidth: 100 }}>
                        <DeviceThermostatIcon color="error" />
                        <Typography variant="body2" color="text.secondary">
                          Feels Like
                        </Typography>
                        <Typography variant="h6" fontWeight="bold">
                          {kelvinToCelsius(weather.feels_like)}°C
                        </Typography>
                      </Paper>
                      <Paper elevation={2} sx={{ flex: 1, p: 2, minWidth: 100 }}>
                        <WaterDropIcon color="primary" />
                        <Typography variant="body2" color="text.secondary">
                          Humidity
                        </Typography>
                        <Typography variant="h6" fontWeight="bold">
                          {weather.humidity}%
                        </Typography>
                      </Paper>
                      <Paper elevation={2} sx={{ flex: 1, p: 2, minWidth: 100 }}>
                        <ArrowUpwardIcon color="success" />
                        <Typography variant="body2" color="text.secondary">
                          Max Temp
                        </Typography>
                        <Typography variant="h6" fontWeight="bold">
                          {kelvinToCelsius(weather.temp_max)}°C
                        </Typography>
                      </Paper>
                    </Box>
                  </CardContent>
                </Card>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
