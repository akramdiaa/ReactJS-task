import { Box, IconButton, Tooltip } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import WorkIcon from "@mui/icons-material/Work";
import ComputerIcon from "@mui/icons-material/Computer";
import SettingsIcon from "@mui/icons-material/Settings";
import "./AppShortCuts.scss";
import { NewReleases } from "@mui/icons-material";
import { useState } from "react";
import News from "./appfunctionality/News";

const AppShortCuts = () => {
  const [newsOpen, setNewsOpen] = useState(false);

  const shortcuts = [
    {
      icon: <BarChartIcon />,
      title: "Analytics",
      color: "linear-gradient(180deg, #1894A5 0%, #A2FEE8 100%)",
    },
    {
      icon: <WorkIcon />,
      title: "Business",
      color: "linear-gradient(180deg, #FF8327 0%, #FCC471 100%)",
    },
    {
      icon: <NewReleases />,
      title: "News",
      color: "linear-gradient(1.77deg, #FC77D7 1.5%, #D92020 98.59%)",
      onClick: () => setNewsOpen(true),
    },
    {
      icon: <ComputerIcon />,
      title: "ERP System",
      color: "linear-gradient(360deg, #9AEABA 0%, #00C738 100%)",
    },
    {
      icon: <SettingsIcon />,
      title: "Settings",
      color: "linear-gradient(180deg, #2420D9 0%, #00A1E2 100%)",
    },
  ];

  return (
    <Box className="shortcuts-container">
      <Box className="shortcuts-wrapper">
        {shortcuts.map((item, index) => (
          <Tooltip key={index} title={item.title} placement="top">
            <IconButton
              className="shortcut-icon"
              onClick={item.onClick}
              sx={{
                background: item.color,
                "&:hover": {
                  backgroundColor: item.color,
                  opacity: 0.8,
                },
              }}
            >
              {item.icon}
            </IconButton>
          </Tooltip>
        ))}
        <News open={newsOpen} onClose={() => setNewsOpen(false)} />
      </Box>
    </Box>
  );
};

export default AppShortCuts;
