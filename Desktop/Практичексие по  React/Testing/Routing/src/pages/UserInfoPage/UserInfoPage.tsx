import { USERS, PLAYLISTS } from "../../data";
import "./UserInfoPage.css";
import { Link, useParams } from "react-router-dom";

export function UserInfoPage() {
	const { userId } = useParams();
	const id = Number(userId);
	const user = USERS[id];

	const userPlaylistId = (user as any).playlist;
	const userPlaylist = userPlaylistId !== undefined ? PLAYLISTS.find((p) => p.id === userPlaylistId) : undefined;

	if (!user) {
		return (
			<div className="userInfoPage">
				<h2>UserInfoPage</h2>

				<div className="users">
					<p>Пользователя с таким ИД нет</p>
				</div>
			</div>
		);
	}

	const playlists = PLAYLISTS.filter((p) => p.userId === id);

	return (
		<div className="userInfoPage">
			<h2>UserInfoPage</h2>

			<div className="users">
				<p>{user.jobTitle}</p>
				<p>{user.email}</p>
				<img src={user.avatar} alt="" width={200} height={200} />
				<p>{user.fullName}</p>
				<p>{user.bio}</p>

				{userPlaylist ? (
					<>
						<h3>Плейлист из профиля</h3>
						<p>
							<Link to={`/playlists/${userPlaylist.id}`}>{userPlaylist.title}</Link> — <em>{userPlaylist.genre}</em>
						</p>
					</>
				) : null}

				<h3>Плейлисты пользователя</h3>
				{playlists.length === 0 ? (
					<p>У пользователя нет плейлистов</p>
				) : (
					<ul>
						{playlists.map((pl) => (
							<li key={pl.id}>
								<Link to={`/playlists/${pl.id}`}>{pl.title}</Link> — <em>{pl.genre}</em>
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
}
