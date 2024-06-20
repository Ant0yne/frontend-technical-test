import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	faUsersRectangle,
	faAnglesLeft,
} from "@fortawesome/free-solid-svg-icons";

library.add(faUsersRectangle, faAnglesLeft);

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
