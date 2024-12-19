import { useEffect, useMemo, useState } from "react";
import { IPhoto } from "../interfaces";
import { useNavigate } from "react-router-dom";

export default function AllPhotos() {
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const loadingArr = Array.from({ length: 8 });
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const handlePhotoClick = (id: number) => navigate(`/photos/${id}`);
  // Fetch photos only once when the component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        setPhotos(json);
        setLoading(false);
      });
  }, []);

  const photosTsx = useMemo(() => {
    return photos.map((photo) => {
      return (
        <div
          onClick={() => handlePhotoClick(photo.id)}
          key={photo.id}
          className="shadow-md p-4 mb-5 bg-white transition-all duration-200 ease-linear hover:scale-105 cursor-pointer"
        >
          <p className="text-lg font-bold text-sky-900">{photo.title}</p>
          <img className="w-full max-h-64 " src={photo.url} />
        </div>
      );
    });
  }, [photos]);

  return (
    <div className="py-12">
      {loading ? (
        loadingArr.map((_, index) => (
          <div
            key={index}
            className="animate-pulse shadow-md p-4 mb-5 bg-gray-200 rounded-md"
          >
            <div className="h-6 bg-gray-300 mb-4 rounded"></div>
            <div className="h-40 bg-gray-300 rounded"></div>
          </div>
        ))
      ) : photos.length !== 0 ? (
        photosTsx
      ) : (
        <p className="text-center text-gray-700">No photos available</p>
      )}
    </div>
  );
}
