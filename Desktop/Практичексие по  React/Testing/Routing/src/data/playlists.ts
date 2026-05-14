export interface ITrack {
  id: number;
  title: string;
  duration?: string;
}

export interface IPlaylist {
  id: number;
  title: string;
  genre: string;
  userId: number;
  tracks: ITrack[];
}

export const PLAYLISTS: IPlaylist[] = [
  {
    id: 0,
    title: "Evening Chill",
    genre: "Lo-Fi",
    userId: 1,
    tracks: [
      { id: 0, title: "Sunset Drive", duration: "3:12" },
      { id: 1, title: "Warm Lights", duration: "2:58" },
      { id: 2, title: "Night Breeze", duration: "2:45" },
      { id: 3, title: "Soft Echoes", duration: "3:05" },
      { id: 4, title: "City Lights", duration: "3:30" },
      { id: 5, title: "Mellow Loop", duration: "2:50" },
      { id: 6, title: "Cozy Corner", duration: "3:10" },
      { id: 7, title: "Falling Stars", duration: "3:22" },
      { id: 8, title: "Late Coffee", duration: "2:55" },
      { id: 9, title: "Moonwalk", duration: "3:18" },
    ],
  },
  {
    id: 1,
    title: "Workout Hits",
    genre: "Pop",
    userId: 2,
    tracks: [
      { id: 0, title: "Run Faster", duration: "3:45" },
      { id: 1, title: "Push Up", duration: "4:01" },
      { id: 2, title: "Beat Drop", duration: "3:25" },
      { id: 3, title: "High Energy", duration: "3:40" },
      { id: 4, title: "Sprint", duration: "3:12" },
      { id: 5, title: "Adrenaline", duration: "3:55" },
      { id: 6, title: "Push It", duration: "3:30" },
      { id: 7, title: "No Limits", duration: "4:10" },
      { id: 8, title: "Power Move", duration: "3:33" },
      { id: 9, title: "Finish Line", duration: "3:48" },
    ],
  },
  {
    id: 2,
    title: "Deep Focus",
    genre: "Instrumental",
    userId: 3,
    tracks: [
      { id: 0, title: "Concentration", duration: "6:12" },
      { id: 1, title: "Deep Thought", duration: "5:30" },
      { id: 2, title: "Quiet Engine", duration: "7:05" },
      { id: 3, title: "Synth Waves", duration: "4:48" },
      { id: 4, title: "Meditation Flow", duration: "6:00" },
      { id: 5, title: "Linear Progress", duration: "5:15" },
      { id: 6, title: "Applied Mind", duration: "6:22" },
      { id: 7, title: "Focus Mode", duration: "5:55" },
      { id: 8, title: "Study Loop", duration: "4:40" },
      { id: 9, title: "Ambient Drive", duration: "6:30" },
    ],
  },
  {
    id: 3,
    title: "Rock Anthems",
    genre: "Rock",
    userId: 2,
    tracks: [
      { id: 0, title: "Electric Sunrise", duration: "4:05" },
      { id: 1, title: "Thunder Road", duration: "3:47" },
      { id: 2, title: "Razor Edge", duration: "3:52" },
      { id: 3, title: "High Voltage", duration: "4:20" },
      { id: 4, title: "Burning Sky", duration: "5:01" },
      { id: 5, title: "Stone Alley", duration: "3:35" },
      { id: 6, title: "Rebel Heart", duration: "4:12" },
      { id: 7, title: "Steel Strings", duration: "3:58" },
      { id: 8, title: "Last Stand", duration: "4:45" },
      { id: 9, title: "Midnight Riot", duration: "4:08" },
    ],
  },
  {
    id: 4,
    title: "Ганста РЭП",
    genre: "Rap",
    userId: 4,
    tracks: [
      { id: 0, title: "Город Огней", duration: "3:30" },
      { id: 1, title: "Ритм Улиц", duration: "3:45" },
      { id: 2, title: "Микро Драйв", duration: "4:10" },
      { id: 3, title: "Боевой Клич", duration: "3:20" },
      { id: 4, title: "В Ритме", duration: "3:55" },
      { id: 5, title: "Уличный Стиль", duration: "3:40" },
      { id: 6, title: "Громкий Голос", duration: "4:05" },
      { id: 7, title: "Вершина", duration: "3:35" },
      { id: 8, title: "Волна Энергии", duration: "3:50" },
      { id: 9, title: "Финальный Раунд", duration: "4:15" },
      {id: 10, title: "Foolish Games", duration: "3:45"},
      {id: 11, title: "It's My Party", duration: "4:01"},
      {id: 12, title: "Gangsta Rap Made Me Do It", duration: "3:25"},
      {id: 13, title: "Gangster Рэп", duration: "3:40"},
    ],
  },
];

export default PLAYLISTS;
