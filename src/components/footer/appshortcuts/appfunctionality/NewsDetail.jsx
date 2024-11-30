import React from "react";
import { DialogContent, Typography, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import "./NewsDetail.scss";

const NewsDetail = ({ news, onBack }) => {
  return (
    <>
      <div className="news-detail-header">
        <div className="back-button-container" onClick={onBack}>
          <Typography variant="subtitle1">
            الرجوع لكل الاخبار
          </Typography>
          <ArrowBackIosIcon sx={{ fontSize: 16 }} />
        </div>
      </div>

      <DialogContent className="news-detail-content">
        <img
          src={`https://picsum.photos/seed/${news.id}/800/400`}
          alt="News"
          className="detail-image"
        />
        <div className="detail-info">
          <Typography variant="subtitle1" className="detail-date">
            {new Date().toLocaleDateString("ar-US")}
          </Typography>
          <Typography variant="h5" className="detail-title">
            {news.title}
          </Typography>
          <Typography variant="body1" className="detail-description">
            {news.body}
          </Typography>
        </div>
      </DialogContent>
    </>
  );
};

export default NewsDetail;
