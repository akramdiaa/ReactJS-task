import { Box, Typography, Tooltip, styled, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import folderIcon from "../../../assets/svg/foldericon.svg";
import searchIcon from "../../../assets/svg/searchicon.svg";
import "./SurvicesIcons.scss";

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .MuiTooltip-tooltip`]: {
    width: "108px",
    height: "26px",
    fontSize: "14px",
    textAlign: "center",
  }
});

const SurvicesIcons = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const tooltipTexts = [
    "الغيابات",
    "الملف الثاني",
    "الملف الثالث",
    "الملف الرابع",
  ];

  return (
    <Box className="SurvicesIcons-container">
      <img 
        src={searchIcon} 
        alt="icon" 
        style={{ 
          width: isMobile ? '24px' : '32px',
          height: isMobile ? '24px' : '32px'
        }}
      />
      <Typography>الخدمات الذاتيه</Typography>
      <Box className="icons-container">
        {[...Array(4)].map((_, index) => (
          <CustomTooltip
            key={index}
            title={tooltipTexts[index]}
            arrow
            placement={isMobile ? "top" : "left"}
            enterDelay={100}
            leaveDelay={100}
          >
            <img 
              src={folderIcon} 
              alt="icon"
              style={{ 
                width: isMobile ? '24px' : '32px',
                height: isMobile ? '24px' : '32px'
              }}
            />
          </CustomTooltip>
        ))}
      </Box>
    </Box>
  );
};

export default SurvicesIcons;