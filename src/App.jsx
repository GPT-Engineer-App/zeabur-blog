import React from "react";
import { Route, BrowserRouter as Router, Routes, useParams } from "react-router-dom";
import Index from "./pages/Index";
import BlogPost from "./components/BlogPost";
import EditPost from "./pages/EditPost";
import posts from "./posts.json";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/posts/:id" element={<BlogPost post={posts.find((p) => p.id === parseInt(useParams().id))} />} />
        <Route path="/posts/:id/edit" element={<EditPost />} />
      </Routes>
    </Router>
  );
}

export default App;
