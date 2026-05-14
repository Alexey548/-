import React from "react";

export interface PlaylistInfoProps {
  playlist?: {
    name: string;
    genre: string;
    songs: string[];
  };
}

function PlaylistInfoPage({ playlist }: PlaylistInfoProps) {
  if (!playlist) {
    return (
      <div>
        <h2>Playlist Info</h2>
        <p>Playlist not found</p>
      </div>
    );
  }

  return (
    <div>
      <h2>{playlist.name}</h2>
      <p>{playlist.genre}</p>
      <p>Tracks: {playlist.songs.length}</p>
      <ul>
        {playlist.songs.map((song) => (
          <li key={song}>{song}</li>
        ))}
      </ul>
    </div>
  );
}

export default PlaylistInfoPage;
