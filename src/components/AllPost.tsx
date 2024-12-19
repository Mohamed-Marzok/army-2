import { useEffect, useMemo, useState } from "react";
import { IPost } from "../interfaces";

export default function AllPosts() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const handlePostClick = () => console.log("");
  // Fetch posts only once when the component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);
  const deletePost = (id: number) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
        } else {
          console.error("Failed to delete the post");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  const todosTsx = useMemo(() => {
    return posts.map((post) => {
      return (
        <div
          onClick={handlePostClick}
          key={post.id}
          className="shadow-md p-4 mb-5 bg-white transition-all duration-200 ease-linear hover:-translate-x-3 cursor-pointer"
        >
          <button
            className="bg-red-900 w-16 "
            onClick={() => deletePost(post.id)}
          >
            x
          </button>
          <p className="text-lg font-bold text-sky-900">{post.title}</p>
          <p className="text-gray-500">{post.body}</p>
        </div>
      );
    });
  }, [posts]);

  return <div className="py-12">{todosTsx}</div>;
}
