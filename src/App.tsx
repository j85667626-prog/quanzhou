import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import News from "./pages/News";
import Profile from "./pages/Profile";
import Poster from "./poster/Poster";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="activities" element={<Activities />} />
          <Route path="news" element={<News />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        {/* Poster uses its own layout (full screen) */}
        <Route path="/poster" element={<Poster />} />
      </Routes>
    </Router>
  );
}
