import { ChangeEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { PLAYLISTS } from "../../data";

export function PlaylistsPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const nameQuery = (searchParams.get("name") || "").toLowerCase();
  const genreQuery = (searchParams.get("genre") || "").toLowerCase();

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("name", value);
    } else {
      params.delete("name");
    }

    setSearchParams(params);
  };

  const handleGenreChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set("genre", value);
    } else {
      params.delete("genre");
    }

    setSearchParams(params);
  };

  const filteredPlaylists = PLAYLISTS.filter((playlist) => {
    const matchesName = playlist.title
      .toLowerCase()
      .includes(nameQuery);

    const matchesGenre = playlist.genre
      .toLowerCase()
      .includes(genreQuery);

    return matchesName && matchesGenre;
  });

  return (
    <div className="playlistsPage">
      <h2>Плейлисты</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Введите название"
          value={searchParams.get("name") || ""}
          onChange={handleNameChange}
        />

        <input
          type="text"
          placeholder="Введите жанр"
          value={searchParams.get("genre") || ""}
          onChange={handleGenreChange}
        />
      </div>

      <ul>
        {filteredPlaylists.map((playlist) => (
          <li key={playlist.id}>
            <Link to={`/playlists/${playlist.id}`}>
              {playlist.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistsPage;










































