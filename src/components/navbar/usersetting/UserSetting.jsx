import React, { useState } from "react";
import {
  Box,
  IconButton,
  Badge,
  Typography,
  Menu,
  useTheme,
  useMediaQuery
} from "@mui/material";
import {
  Newspaper,
  List,
  Image,
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";
import "./UserSetting.scss";
import BackgroundSelector from "./backgroundlogic/BackgroundSelector";
import { useBackground } from "./backgroundlogic/BackgroundContext";

const UserSetting = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openBackgroundDialog, setOpenBackgroundDialog] = useState(false);
  const { changeBackground } = useBackground();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpenBackgroundDialog = () => {
    setOpenBackgroundDialog(true);
  };

  const handleCloseBackgroundDialog = () => {
    setOpenBackgroundDialog(false);
  };

  const handleBackgroundSelect = (background) => {
    if (changeBackground) {
      changeBackground(background);
      handleCloseBackgroundDialog();
    }
  };

  const handleClick = (e) => {
    setOpen(true);
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };

  return (
    <Box className="user-settings">
      <div className="icons-group">
        <IconButton 
          color="inherit"
          size={isMobile ? "small" : "medium"}
        >
          <Newspaper fontSize={isMobile ? "small" : "medium"} />
        </IconButton>
        <IconButton 
          color="inherit"
          size={isMobile ? "small" : "medium"}
        >
          <Badge 
            badgeContent={99} 
            color="error"
            sx={{
              '& .MuiBadge-badge': {
                fontSize: isMobile ? '0.6rem' : '0.75rem',
              }
            }}
          >
            <List fontSize={isMobile ? "small" : "medium"} />
          </Badge>
        </IconButton>
        <IconButton 
          color="inherit" 
          onClick={handleOpenBackgroundDialog}
          size={isMobile ? "small" : "medium"}
        >
          <Image fontSize={isMobile ? "small" : "medium"} />
        </IconButton>
      </div>

      <div className="user-info">
        <Box className="user-name-wrapper" onClick={handleClick}>
          <KeyboardArrowDownOutlined
            className={`arrow-icon ${open ? "open" : ""}`}
            fontSize={isMobile ? "small" : "medium"}
          />
          <Typography variant="body1" className="user-name">
            عمر الالفي
          </Typography>
        </Box>

        <Menu 
          anchorEl={anchorEl} 
          id="user-menu" 
          open={open} 
          onClose={handleClose}
          PaperProps={{
            sx: {
              mt: 1,
              width: isMobile ? 150 : 200,
            }
          }}
        />

        <img className="user-avatar" />
      </div>

      <BackgroundSelector
        open={openBackgroundDialog}
        onClose={handleCloseBackgroundDialog}
        onSelect={handleBackgroundSelect}
      />
    </Box>
  );
};

export default UserSetting;