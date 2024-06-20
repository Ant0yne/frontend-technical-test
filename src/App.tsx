import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ROUTES
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Album from "./pages/Album";

import "./App.css";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/profile/:userId" element={<Profile />} />
				<Route path="/album" element={<Album />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default App;
