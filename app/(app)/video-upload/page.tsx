"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import "./VideoUpload.css";

export default function VideoUploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const router = useRouter();
  const MAX_FILE_SIZE = 70 * 1024 * 1024; // 70 MB

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) setFile(selectedFile);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      alert("File size too large (max 70MB)");
      return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("originalSize", file.size.toString());

    try {
      await axios.post("/api/video-upload", formData);
      router.push("/"); // redirect after upload
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Video upload failed. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="video-upload-container">
      <h1 className="video-upload-title">Upload Your Video</h1>

      <form onSubmit={handleSubmit} className="video-upload-form">
        {/* Title */}
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-input"
            placeholder="Enter video title..."
            required
          />
        </div>

        {/* Description */}
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-textarea"
            placeholder="Write a brief description..."
            rows={4}
          />
        </div>

        {/* File Upload */}
        <div className="form-group">
          <label htmlFor="file" className="custom-file-upload">
            {file ? file.name : "Choose Video File"}
          </label>
          <input
            type="file"
            id="file"
            accept="video/*"
            className="form-file"
            onChange={handleFileChange}
            required
          />
        </div>

        {/* Upload Button */}
        <button type="submit" className="form-button" disabled={isUploading}>
          {isUploading ? "Uploading..." : "Upload Video"}
        </button>
      </form>
    </div>
  );
}
