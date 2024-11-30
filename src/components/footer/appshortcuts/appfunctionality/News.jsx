import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  IconButton,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./News.scss";
import eidBanner from "../../../../assets/images/eidimage.png";
import imageslide from "../../../../assets/images/imageslide.png";
import NewsDetail from "./NewsDetail";

const News = ({ open, onClose }) => {
  const [news, setNews] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [selectedNews, setSelectedNews] = useState(null);

  const banners = [
    { id: 0, image: imageslide },
    { id: 1, image: eidBanner },
  ];

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
      );
      setNews(response.data);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  };

  useEffect(() => {
    if (open) {
      fetchNews();

      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % banners.length);
      }, 5000);

      return () => clearInterval(timer);
    }
  }, [open, banners.length]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      className="news-dialog"
    >
      <IconButton onClick={onClose} className="close-button" size="large">
        <CloseIcon />
      </IconButton>

          <DialogContent className="news-content">
              {!selectedNews && (
                <>
                  <div className="banner-carousel">
                    <div className="banner-slides">
                      {banners.map((banner, index) => (
                        <div
                          key={banner.id}
                          className="banner-slide"
                          style={{
                            transform: `translateX(${(currentSlide - index) * 100}%)`,
                          }}
                        >
                          <img src={banner.image} alt="Banner" className="banner-image" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="banner-dots">
                    {banners.map((_, index) => (
                      <span
                        key={index}
                        className={`dot ${currentSlide === index ? "active" : ""}`}
                      />
                    ))}
                  </div>
                </>
              )}
       
              
        <div className="news-header">
          <Typography variant="h6" className="news-title">
            آخر الاخبار
          </Typography>
        </div>
        {!selectedNews ? (
          <>
            <div className="news-cards">
              {news.map((item) => (
                <Card                 onClick={() => setSelectedNews(item)}
                key={item.id} className="news-card">
                  <CardMedia
                    component="img"
                    height="140"
                    image={`https://picsum.photos/seed/${item.id}/400/200`}
                    alt="News thumbnail"
                  />
                  <CardContent>
                    <Typography variant="subtitle1" className="card-date">
                      {new Date().toLocaleDateString("ar-US")}
                    </Typography>
                    <Typography variant="h6" className="card-title">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" className="card-description">
                      {item.body}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        ) : (
          <NewsDetail
            news={selectedNews}
            onBack={() => setSelectedNews(null)}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default News;
