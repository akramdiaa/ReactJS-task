import React, { useState, useEffect } from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import calendaricon from "../../../assets/svg/calendaricon.svg";
import weathericon from "../../../assets/svg/weathericon.svg";

import "./DateWeather.scss";

const DateWeather = () => {
  const [weather, setWeather] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  const LATITUDE = "30.0444";
  const LONGITUDE = "31.2357";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${LATITUDE}&longitude=${LONGITUDE}&daily=temperature_2m_max,temperature_2m_min&timezone=auto&current_weather=true`
        );
        const data = await response.json();
        setWeather(data);
      } catch (error) {
        console.error("Error fetching weather:", error);
      }
    };

    fetchWeather();
    const weatherInterval = setInterval(fetchWeather, 1800000);

    return () => clearInterval(weatherInterval);
  }, []);

  useEffect(() => {
    const dateInterval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000);

    return () => clearInterval(dateInterval);
  }, []);

  const formatArabicDate = (date) => {
    const arabicMonths = [
      "يناير",
      "فبراير",
      "مارس",
      "إبريل",
      "مايو",
      "يونيو",
      "يوليو",
      "أغسطس",
      "سبتمبر",
      "أكتوبر",
      "نوفمبر",
      "ديسمبر",
    ];



    const day = date.getDate().toLocaleString('ar-EG');
    const month = arabicMonths[date.getMonth()];
    const year = date.getFullYear().toLocaleString('ar-EG');

    return `${day}, ${month} ${year}`;
  };

  const tempHigh = weather
    ? Math.round(weather.daily.temperature_2m_max[0]).toLocaleString('ar-EG')
    : "--";
  const tempLow = weather
    ? Math.round(weather.daily.temperature_2m_min[0]).toLocaleString('ar-EG')
    : "--";

    return (
      <Box className="datetime-container">
        <Box className="calendar-section">
          <Box sx={{ 
            display: "flex", 
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <Typography className="calendar-text">التقويم</Typography>
            <img 
              src={calendaricon} 
              alt="calendar" 
              className="calendar-icon"
              style={{ width: isMobile ? '14px' : '16px' }}
            />
          </Box>
          <Typography className="date">
            {formatArabicDate(currentDate)}
          </Typography>
        </Box>
        <Box className="divider" />
        <Box className="weather-section">
          <Box sx={{ 
            display: "flex", 
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <Typography className="weather-text">الطقس</Typography>
            <img 
              src={weathericon} 
              alt="weather" 
              className="calendar-icon"
              style={{ width: isMobile ? '14px' : '16px' }}
            />
          </Box>
          <Typography className="temperature">
            {`${tempLow}° / ${tempHigh}°`}
          </Typography>
        </Box>
      </Box>
    );
  };

export default DateWeather;
