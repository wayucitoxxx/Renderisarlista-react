import React from "react";
import { useState, useEffect } from "react";

const Photos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=1")
    .then((response) => response.json())
    .then((data) => setPhotos(data))
    .catch((error) => console.error("Error fetching photos:", error));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Photos Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {photos.map((photo) => (
          <div key={photo.id} className="border rounded-lg shadow-md p-2">
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              className="w-full h-auto rounded-md"
            />
            <p className="text-sm text-center mt-2">{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
