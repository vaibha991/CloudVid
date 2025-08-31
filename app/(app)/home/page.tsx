"use client";

import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Tilt from "react-parallax-tilt";
import PageTransition from "@/components/PageTransition";
import VideoCard from "@/components/VideoCard";
import { Video } from "@/types";
import "./Home.css";

const HomePage = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchVideos = useCallback(async () => {
    try {
      const response = await axios.get("/api/videos");
      if (Array.isArray(response.data)) {
        setVideos(response.data);
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch videos");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  const handleDownload = useCallback(
    (url: string, title: string) => () => {
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${title}.mp4`);
      link.setAttribute("target", "_blank");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    []
  );

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <PageTransition>
      <div className="home-container">
        <h1 className="heading">Videos</h1>

        {error && <div className="no-videos">{error}</div>}

        {videos.length === 0 ? (
          <div className="no-videos">No videos available</div>
        ) : (
          <div className="video-grid">
            {videos.map((video) => (
              <Tilt
                key={video.id}
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ffffff"
                glarePosition="all"
                scale={1.03}
                transitionSpeed={2000}
                tiltMaxAngleX={10} /* Reduced for mobile */
                tiltMaxAngleY={10} /* Reduced for mobile */
              >
                <div className="tilt-card">
                  <VideoCard video={video} onDownload={handleDownload} />
                </div>
              </Tilt>
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default HomePage;
