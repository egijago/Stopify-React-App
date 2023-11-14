import { GenreStats } from "../../models/GenreStats"
import { MusicStats } from "../../models/MusicStats"

export function getAllMusicStatsByArtistId(idArtist: number): MusicStats[] {
  console.log(idArtist)
  const result: MusicStats[] = [
    {
      id: 0,
      title: "Song 1",
      likedCount: 50,
      listener: [
        {
          month: 1,
          count: 10,
        },
        {
          month: 2,
          count: 12,
        },
        {
          month: 3,
          count: 11,
        },
        {
          month: 4,
          count: 15,
        },
      ],
    },
    {
      id: 2,
      title: "Song 2",
      likedCount: 50,
      listener: [
        {
          month: 1,
          count: 11,
        },
        {
          month: 2,
          count: 17,
        },
        {
          month: 3,
          count: 16,
        },
        {
          month: 4,
          count: 15,
        },
      ],
    },
    {
      id: 3,
      title: "Song 3",
      likedCount: 50,
      listener: [
        {
          month: 1,
          count: 10,
        },
        {
          month: 2,
          count: 14,
        },
        {
          month: 3,
          count: 10,
        },
        {
          month: 4,
          count: 19,
        },
      ],
    },
  ]
  return result
}

export function getAllGenreStatsByArtistId(idArtist: number): GenreStats[] {
  console.log(idArtist)
  const result: GenreStats[] = [
    {
      genre: "Genre 1",
      listenerCount: 100,
      likedCount: 50,
    },
    {
      genre: "Genre 2",
      listenerCount: 200,
      likedCount: 100,
    },
    {
      genre: "Genre 3",
      listenerCount: 212,
      likedCount: 100,
    },
    {
      genre: "Genre 4",
      listenerCount: 323,
      likedCount: 100,
    },
    {
      genre: "Genre 5",
      listenerCount: 123,
      likedCount: 100,
    },
  ]
  return result
}

// function getAllAlbumStatsByArtistId(artistId: number): AlbumStats[] {
//   const result: AlbumStats[] = [
//     {
//       album: "album 1",
//       listenerCount: 100,
//       likedCount: 50,
//     },
//     {
//       album: "album 2",
//       listenerCount: 200,
//       likedCount: 100,
//     },
//     {
//       album: "album 3",
//       listenerCount: 212,
//       likedCount: 100,
//     },
//     {
//       album: "album 4",
//       listenerCount: 323,
//       likedCount: 100,
//     },
//     {
//       album: "album 5",
//       listenerCount: 123,
//       likedCount: 100,
//     },
//   ]
//   return result
// }
