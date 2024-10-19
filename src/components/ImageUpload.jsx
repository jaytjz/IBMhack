import React, { useState } from "react";

export default function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState("");

  // Function to handle file selection
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadStatus(""); // Reset status on new file select
  };

  // Function to handle the form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      setUploadStatus("No file selected.");
      return;
    }

    // Prepare the form data
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      // Send the file to the backend
      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setUploadStatus(data.message); // You can show the deepfake result here
      } else {
        setUploadStatus("Failed to upload the image.");
      }
    } catch (error) {
      setUploadStatus("Error occurred during the upload.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Deepfake Detection</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-gray-700"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
        >
          Upload Image
        </button>
      </form>
      {uploadStatus && <p className="mt-4 text-red-500">{uploadStatus}</p>}
    </div>
  );
}
