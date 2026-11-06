import "./app.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { MainPage, UsersPage, UserInfoPage, PlaylistsPage, PlaylistPage } from "./pages";
import Home from "./pages/Home";
import Tracks from "./pages/Track";

export function App() {
	return (
		<BrowserRouter>
			<div className="header">_</div>

			<div className="section">
				<nav className="navMenu">
					<Link to={"/"}>Главная</Link>
					<Link to={"/users"}>Пользователи</Link>
					<Link to="/playlists">Плейлисты</Link>
				</nav>

				<main className="content">
					<Routes>
						<Route path="/" element={<MainPage/>}/>
						<Route path="/users" element={<UsersPage/>}/>
						<Route path="/users/:userId" element={<UserInfoPage/>}/>
						<Route path="/playlists" element={<PlaylistsPage/>} />
						<Route path="/playlists/:playlistId" element={<PlaylistPage/>} />
						<Route path="/" element={<Home />} />
                        <Route path="/tracks" element={<Tracks />} />
					</Routes>
				</main>
			</div>

			<div className="footer">
				<a href="https://skillbox.ru/code/">https://skillbox.ru/</a>
			</div>
		</BrowserRouter>
	);
}
