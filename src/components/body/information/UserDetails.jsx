import React, { useState, useEffect } from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@mui/material';
import './UserDetails.scss';

function UserDetails() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState(new Date());
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const formatArabicDate = (date) => {
    const arabicMonths = [
      "يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو",
      "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
    ];

    const day = date.getDate().toLocaleString("ar-EG");
    const month = arabicMonths[date.getMonth()];
    const year = date.getFullYear().toLocaleString("ar-EG");
    const gregorianDate = `${day} ${month} ${year}`;

    const hijriDate = new Intl.DateTimeFormat("ar-SA-u-ca-islamic", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);

    return { gregorianDate, hijriDateStr: hijriDate };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box className="UserDetails-container">
      <Typography variant={isMobile ? "h5" : "h4"}>
        ! مرحبا بك احمد محمد
      </Typography>
      <Typography className="time">
        {currentTime.toLocaleTimeString("ar-EG", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </Typography>
      <Box className="date">
        <Typography className="date gregorian">
          {formatArabicDate(currentDate).gregorianDate}
        </Typography>
        <Typography className="date hijri">
          {formatArabicDate(currentDate).hijriDateStr}
        </Typography>
      </Box>
    </Box>
  );
}

export default UserDetails;