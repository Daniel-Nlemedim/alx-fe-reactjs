// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

function PostsComponent() {
  // Using useQuery with caching and other options
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery(
    ["posts"],
    fetchPosts,
    {
      cacheTime: 1000 * 60 * 5, // 5 minutes (how long data stays in cache before garbage collection)
      refetchOnWindowFocus: false, // Disable auto refetch when tab regains focus
      keepPreviousData: true, // Keeps old data while fetching new data
    }
  );

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Posts</h2>

      {/* Refetch button */}
      <button
        onClick={() => refetch()}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Refetch Posts
      </button>

      {isFetching && <p className="text-gray-500">Updating...</p>}

      <ul className="space-y-2">
        {data.map((post) => (
          <li
            key={post.id}
            className="p-3 border rounded-md shadow-sm bg-white"
          >
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
