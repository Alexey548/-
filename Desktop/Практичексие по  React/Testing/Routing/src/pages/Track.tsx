const tracks = [
  {
    id: 10,
    title: "Track One",
    artist: "Artist A",
    url: "./Tracks/Track-1.mp3  2Pac — Foolish Games (www.lightaudio.ru) copy.mp3",
  },
  {
    id: 11,
    title: "Track Two",
    artist: "Artist B",
    url: "./Tracks/Track-2.mp3 Gucci Mane - It's My Party (pesni.fm).mp3",
  },
  {
    id: 12,
    title: "Track Three",
    artist: "Artist C",
    url: "./Tracks/Track-3.mp3 Ice Cube — Gangsta Rap Made Me Do It (www.lightaudio.ru).mp3",
  },
  {
     id: 13,
    title: "Track Four",
    artist: "Artist D",
    url: "./Tracks/Track-4.mp3 Серёга — Gangsta No More ¦ Гангстер Рэп (www.lightaudio.ru).mp3",
  },

];

export default function Track
() {
  return (
    <div>
      <h1>Список треков</h1>

      {tracks.map((track) => (
        <div key={track.id}>
          <h3>{track.title}</h3>
          <p>{track.artist}</p>

          <audio controls>
            <source src={track.url} type="audio/mpeg" />
          </audio>

          <hr />
        </div>
      ))}
    </div>
  );
}