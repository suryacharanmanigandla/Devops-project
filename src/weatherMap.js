import WbSunnyIcon from "@mui/icons-material/WbSunny";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import CloudIcon from "@mui/icons-material/Cloud";
import GrainIcon from "@mui/icons-material/Grain";
import AirIcon from "@mui/icons-material/Air";
import TornadoIcon from "@mui/icons-material/Tornado";


export const IMG_WEATHER_MAP = {
  // ☀️ Clear
  "clear sky": {
    img: "https://images.unsplash.com/photo-1558895035-256342677f83",
    icon: WbSunnyIcon,
    color: "#f7d154"
  },

  // ☁️ Clouds
  "few clouds": {
    img: "https://images.unsplash.com/photo-1558895035-256342677f83",
    icon: CloudIcon,
    color: "#b0c4de"
  },
  "scattered clouds": {
    img: "https://images.unsplash.com/photo-1642447733831-2cdd9f5efae7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2NhdHRlcmVkJTIwY2xvdWRzfGVufDB8fDB8fHww",
    icon: CloudIcon,
    color: "#87ceeb"
  },
  "broken clouds": {
    img: "https://images.unsplash.com/photo-1714417830767-79dc641c6e65?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJva2VuJTIwY2xvdWRzfGVufDB8fDB8fHww",
    icon: CloudIcon,
    color: "#808080"
  },
  "overcast clouds": {
    img: "https://images.unsplash.com/photo-1638326452359-35c29b3bbdbe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b3ZlcmNhc3QlMjBjbG91ZHN8ZW58MHx8MHx8fDA%3D",
    icon: CloudIcon,
    color: "#696969"
  },
  clouds: {
    img: "https://images.unsplash.com/photo-1560837616-fee1f3d8753a",
    icon: CloudIcon,
    color: "#808080"
  },

  // 🌧 Rain
  drizzle: {
    img: "https://images.unsplash.com/photo-1630574232726-fc3ea90637b8",
    icon: GrainIcon,
    color: "#6ca0dc"
  },
  "light rain": {
    img: "https://images.unsplash.com/photo-1620385019253-b051a26048ce",
    icon: GrainIcon,
    color: "#6ca0dc"
  },
  "moderate rain": {
    img: "https://images.unsplash.com/photo-1620385019253-b051a26048ce",
    icon: ThunderstormIcon,
    color: "#8794a3"
  },
  "heavy intensity rain": {
    img: "https://images.unsplash.com/photo-1620385019253-b051a26048ce",
    icon: ThunderstormIcon,
    color: "#4a4a4a"
  },
  rain: {
    img: "https://images.unsplash.com/photo-1620385019253-b051a26048ce",
    icon: ThunderstormIcon,
    color: "#8794a3"
  },

  // ❄️ Snow
  snow: {
    img: "https://images.unsplash.com/photo-1491864483946-1f06be97b71d",
    icon: AcUnitIcon,
    color: "#d3e3e3"
  },
  "light snow": {
    img: "https://images.unsplash.com/photo-1491864483946-1f06be97b71d",
    icon: AcUnitIcon,
    color: "#d3e3e3"
  },
  "heavy snow": {
    img: "https://images.unsplash.com/photo-1491864483946-1f06be97b71d",
    icon: AcUnitIcon,
    color: "#a9cce3"
  },

  // 🌫 Atmosphere
  mist: {
    img: "https://images.unsplash.com/photo-1603794052293-650dbdeef72c",
    icon: AirIcon,
    color: "#b0c4de"
  },
  fog: {
    img: "https://images.unsplash.com/photo-1444837881208-4d46d5c1f127",
    icon: AirIcon,
    color: "#9e9e9e"
  },
  haze: {
    img: "https://images.unsplash.com/photo-1423209086112-cf2c8acd502f",
    icon: AirIcon,
    color: "#a0a0a0"
  },
  dust: {
    img: "https://images.unsplash.com/photo-1603695820889-f8a0a86b8712",
    icon: AirIcon,
    color: "#d2b48c"
  },


  // 🌪 Extreme
  squall: {
    img: "https://images.unsplash.com/photo-1561485132-59468cd0b553",
    icon: ThunderstormIcon,
    color: "#4a4a4a"
  },
  tornado: {
    img: "https://plus.unsplash.com/premium_photo-1727359761694-1135d47c6545?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dG9ybmFkb3xlbnwwfHwwfHx8MA%3D%3D",
    icon: TornadoIcon,
    color: "#333"
  },

  // ⚡ Default fallback
  default: {
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    icon: WbSunnyIcon,
    color: "#000"
  }
};