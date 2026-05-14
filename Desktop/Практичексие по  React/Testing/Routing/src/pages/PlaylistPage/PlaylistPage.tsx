import { Link, useParams } from "react-router-dom";
import { PLAYLISTS } from "../../data";
import "./PlaylistPage.css";

export function PlaylistPage() {
  const { playlistId } = useParams();

  const id = Number(playlistId);
  const playlist = PLAYLISTS.find((p) => p.id === id);

  if (!playlist) {
    return (
      <div className="playlistPage">
        <h2>Плейлист</h2>
        <p>Такого плейлиста нет</p>
      </div>
    );
  }

  return (
    <div className="playlistPage">
      <h2>{playlist.title}</h2>
      <p>
        Жанр: <Link to={`/playlists?genre=${encodeURIComponent(playlist.genre)}`}>{playlist.genre}</Link>
      </p>

      <h3>Треки</h3>
      <ul>
        {playlist.tracks.map((t) => (
          <li key={t.id}>{t.title} {t.duration ? `— ${t.duration}` : null}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistPage;
