import AllPhotos from "./components/AllPhotos";
import AllPosts from "./components/AllPost";
import AllTodos from "./components/AllTodos";
import Photo from "./components/Photo";
import Layout from "./pages/Layout";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="bg-gray-300">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllTodos />} />
          <Route path="todos" element={<AllTodos />} />
          <Route path="posts" element={<AllPosts />} />
          <Route path="photos" element={<AllPhotos />} />
          <Route path="photos/:photoId" element={<Photo />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
