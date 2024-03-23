import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Editor from "./pages/Editor.jsx";
import Search from "./pages/Search.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search" element={<Search />} />
        <PrivateRoute path="/editor" element={<Editor />} />
      </Routes>
    </Router>
  );
}

export default App;
