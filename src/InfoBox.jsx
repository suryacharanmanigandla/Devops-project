import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./SearchBox.css";
import {motion} from "framer-motion";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import CloudIcon from "@mui/icons-material/Cloud";
import GrainIcon from "@mui/icons-material/Grain";
import AirIcon from "@mui/icons-material/Air";
import TornadoIcon from "@mui/icons-material/Tornado";


// This object maps weather descriptions to image URLs and icons

export const IMG_WEATHER_MAP = {
  // ☀️ Clear
  "clear sky": {
    img: "https://images.unsplash.com/photo-1558895035-256342677f83",
    icon: <WbSunnyIcon sx={{ fontSize: 50, color: "#f7d154" }} />
  },

  // ☁️ Clouds
  "few clouds": {
    img: "https://images.unsplash.com/photo-1558895035-256342677f83",
    icon: <CloudIcon sx={{ fontSize: 50, color: "#b0c4de" }} />
  },
  "scattered clouds": {
    img: "https://images.unsplash.com/photo-1642447733831-2cdd9f5efae7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NhdHRlcmVkJTIwY2xvdWRzfGVufDB8fDB8fHww",
    icon: <CloudIcon sx={{ fontSize: 50, color: "#87ceeb" }} />
  },
  "broken clouds": {
    img: "https://images.unsplash.com/photo-1714417830767-79dc641c6e65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJva2VuJTIwY2xvdWRzfGVufDB8fDB8fHww",
    icon: <CloudIcon sx={{ fontSize: 50, color: "#808080" }} />
  },
  "overcast clouds": {
    img: "https://images.unsplash.com/photo-1638326452359-35c29b3bbdbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b3ZlcmNhc3QlMjBjbG91ZHN8ZW58MHx8MHx8fDA%3D",
    icon: <CloudIcon sx={{ fontSize: 50, color: "#696969" }} />
  },
  clouds: {
    img: "https://images.unsplash.com/photo-1560837616-fee1f3d8753a",
    icon: <CloudIcon sx={{ fontSize: 50, color: "#808080" }} />
  },

  // 🌧 Rain
  drizzle: {
    img: "https://images.unsplash.com/photo-1630574232726-fc3ea90637b8",
    icon: <GrainIcon sx={{ fontSize: 50, color: "#6ca0dc" }} />
  },
  "light rain": {
    img: "https://images.unsplash.com/photo-1620385019253-b051a26048ce",
    icon: <GrainIcon sx={{ fontSize: 50, color: "#6ca0dc" }} />
  },
  "moderate rain": {
    img: "https://images.unsplash.com/photo-1620385019253-b051a26048ce",
    icon: <ThunderstormIcon sx={{ fontSize: 50, color: "#8794a3" }} />
  },
  "heavy intensity rain": {
    img: "https://images.unsplash.com/photo-1620385019253-b051a26048ce",
    icon: <ThunderstormIcon sx={{ fontSize: 50, color: "#4a4a4a" }} />
  },
  rain: {
    img: "https://images.unsplash.com/photo-1620385019253-b051a26048ce",
    icon: <ThunderstormIcon sx={{ fontSize: 50, color: "#8794a3" }} />
  },

  // ❄️ Snow
  snow: {
    img: "https://images.unsplash.com/photo-1491864483946-1f06be97b71d",
    icon: <AcUnitIcon sx={{ fontSize: 50, color: "#d3e3e3" }} />
  },
  "light snow": {
    img: "https://images.unsplash.com/photo-1491864483946-1f06be97b71d",
    icon: <AcUnitIcon sx={{ fontSize: 50, color: "#d3e3e3" }} />
  },
  "heavy snow": {
    img: "https://images.unsplash.com/photo-1491864483946-1f06be97b71d",
    icon: <AcUnitIcon sx={{ fontSize: 50, color: "#a9cce3" }} />
  },

  // 🌫 Atmosphere
  mist: {
    img: "https://images.unsplash.com/photo-1603794052293-650dbdeef72c",
    icon: <AirIcon sx={{ fontSize: 50, color: "#b0c4de" }} />
  },
  fog: {
    img: "https://images.unsplash.com/photo-1444837881208-4d46d5c1f127",
    icon: <AirIcon sx={{ fontSize: 50, color: "#9e9e9e" }} />
  },
  haze: {
    img: "https://images.unsplash.com/photo-1423209086112-cf2c8acd502f",
    icon: <AirIcon sx={{ fontSize: 50, color: "#a0a0a0" }} />
  },
  dust: {
    img: "https://images.unsplash.com/photo-1603695820889-f8a0a86b8712",
    icon: <AirIcon sx={{ fontSize: 50, color: "#d2b48c" }} />
  },


  // 🌪 Extreme
  squall: {
    img: "https://images.unsplash.com/photo-1561485132-59468cd0b553",
    icon: <ThunderstormIcon sx={{ fontSize: 50, color: "#4a4a4a" }} />
  },
  tornado: {
    img: "https://plus.unsplash.com/premium_photo-1727359761694-1135d47c6545?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dG9ybmFkb3xlbnwwfHwwfHx8MA%3D%3D",
    icon: <TornadoIcon sx={{ fontSize: 50, color: "#333" }} />
  },

  // ⚡ Default fallback
  default: {
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    icon: <WbSunnyIcon sx={{ fontSize: 50, color: "#000" }} />
  }
};export default function InfoBox({ weatherData }) {
  if (!weatherData) return null;

  // ✅ extract atmosphere properly
  const { temp, feels_like, temp_max, humidity, city, atmosphere } = weatherData;

  const weatherKey = atmosphere?.toLowerCase();
  const weatherInfo = IMG_WEATHER_MAP[weatherKey] || IMG_WEATHER_MAP.default;

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
            <motion.div
              key={atmosphere}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {weatherInfo.icon}
            </motion.div>
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
