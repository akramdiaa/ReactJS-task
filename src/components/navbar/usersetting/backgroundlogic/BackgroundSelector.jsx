import React, { useRef, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import "./BackgroundSelector.scss";
import background1 from "../../../../assets/images/backgroundimage1.png";
import background2 from "../../../../assets/images/backgroundimage2.png";
import background3 from "../../../../assets/images/backgroundimage3.png";
import background4 from "../../../../assets/images/backgroundimage4.png";
import background5 from "../../../../assets/images/backgroundimage5.png";

const BackgroundSelector = ({ open, onClose, onSelect }) => {
  const [selectedBackground, setSelectedBackground] = useState(null);
  const gridRef = useRef(null);

  const backgrounds = [
    background1,
    background2,
    background3,
    background4,
    background5,
  ];

  const handleSetBackground = (background) => {
    onSelect(background);
    onClose();
  };

  const handleMouseDown = (e) => {
    const grid = gridRef.current;
    grid.isDown = true;
    grid.startX = e.pageX - grid.offsetLeft;
    grid.scrollLeft = grid.scrollLeft;
};

const handleMouseLeave = () => {
    const grid = gridRef.current;
    grid.isDown = false;
};

const handleMouseUp = () => {
    const grid = gridRef.current;
    grid.isDown = false;
};

const handleMouseMove = (e) => {
    const grid = gridRef.current;
    if (!grid.isDown) return;
    e.preventDefault();
    const x = e.pageX - grid.offsetLeft;
    const scroll = (x - grid.startX) * 3; 
    grid.scrollLeft = grid.scrollLeft - scroll;
  };


  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      className="background-dialog"
      
    >
      <DialogTitle  component="div">
        <Typography variant="h6" align="right">
          الخلفيات
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Grid
          className="background-grid"
          ref={gridRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {backgrounds.map((bg, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Box
                className={`background-option ${selectedBackground === bg ? 'selected' : ''}`}
                onClick={() => setSelectedBackground(bg)}
              >
                <img src={bg} alt={`Background ${index + 1}`} draggable="false" />
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box className="dialog-actions">
          <Button onClick={onClose} className="cancel-btn">
            الغاء
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="apply-btn"
            onClick={() => handleSetBackground(selectedBackground)}
          >
            تعيين الخلفية
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default BackgroundSelector;
