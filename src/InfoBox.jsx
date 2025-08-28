import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./SearchBox.css"

export default function InfoBox({ weatherData }) {
    const IMG_URL = "https://images.unsplash.com/photo-1603695820889-f8a0a86b8712?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdCUyMHN0b3JtfGVufDB8fDB8fHww"




    return (<>
        <h1 className='SearchBox'>Weather Information</h1>
        <div className="weatherContainer">
            <Card sx={{ maxWidth: 450 }}>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="440"
                    width="450"
                    image={IMG_URL}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {weatherData.city}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>The atmosphere having {weatherData.atmosphere}</p>
                        <p>feels_like = {weatherData.feels_like}</p>
                        <p>humidity = {weatherData.humidity}</p>
                        <p>temp = {weatherData.temp}&deg;K</p>
                        <p>temp_max = {weatherData.temp_max}&deg;K</p>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    </>)


}