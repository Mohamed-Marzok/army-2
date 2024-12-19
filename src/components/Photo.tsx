import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPhoto } from "../interfaces";

export default function Photo() {
  const { photoId } = useParams();
  const [photo, setPhoto] = useState<IPhoto | null>();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
      .then((response) => response.json())
      .then((json) => setPhoto(json));
  }, []);
  console.log(photo);
  return (
    <div key={photo?.id} className="shadow-md p-4 m-5 bg-white ">
      <p className="text-lg font-bold text-sky-900">{photo?.title}</p>
      <img className="w-full " src={photo?.url} />
    </div>
  );
}
