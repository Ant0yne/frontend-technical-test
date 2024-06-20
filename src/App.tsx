import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ROUTES
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Album from "./pages/Album";

import "./App.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/album" element={<Album />} />
			</Routes>
		</Router>
	);
}

export default App;
