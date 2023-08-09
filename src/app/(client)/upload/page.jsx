'use client'

import React, { useState } from 'react';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    setError(null);
    const selectedFile = e.target.files[0];

    // Check file type (accept only images)
    if (!selectedFile.type.startsWith('image/')) {
      setError('Please upload an image file (jpeg, jpg, png, gif).');
      setPreviewUrl(null);
      return;
    }

    // Check file size (limit to 2MB)
    if (selectedFile.size > 2 * 1024 * 1024) {
      setError('The file size should be up to 5MB.');
      setPreviewUrl(null);
      return;
    }

    // Set the selected file and create a preview URL for the image
    setFile(selectedFile);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setError('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data); // Uploaded file details
        setError(null);
        setPreviewUrl(data.fileUrl);
        setFile(null);
      } else {
        const error = await response.json();
        setError(error.message || 'Failed to upload the image.');
      }
    } catch (error) {
      setError('Error uploading the file.');
    }
  };

  return (
    <div className=''>
      <h1>Image Upload</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={handleFileChange} />
        {previewUrl && <img src={previewUrl} alt="Preview" className="mt-4 max-w-md" />}
        {error && <p className="text-red-600">{error}</p>}
        <button type="submit" className="mt-4" disabled={!file}>
          Upload
        </button>
      </form>
    </div>
  );
};

export default Upload;
