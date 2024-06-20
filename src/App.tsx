import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ROUTES
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Photos from "./pages/Photos";

import "./App.css";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/profile/:userId" element={<Profile />} />
				<Route path="/photos/:albumId" element={<Photos />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Router>
	);
}

export default App;
