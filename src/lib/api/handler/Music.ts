import { GenreStats } from "../../models/GenreStats"
import { MusicStats } from "../../models/MusicStats"
import axios from "axios"

export async function getAllMusicStats(): Promise<MusicStats[]> {
  // const result: MusicStats[] = [
  //   {
  //     id: 0,
  //     title: "Song 1",
  //     likedCount: 50,
  //     listener: [
  //       {
  //         month: 1,
  //         count: 10,
  //       },
  //       {
  //         month: 2,
  //         count: 12,
  //       },
  //       {
  //         month: 3,
  //         count: 11,
  //       },
  //       {
  //         month: 4,
  //         count: 15,
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Song 2",
  //     likedCount: 70,
  //     listener: [
  //       {
  //         month: 1,
  //         count: 11,
  //       },
  //       {
  //         month: 2,
  //         count: 17,
  //       },
  //       {
  //         month: 3,
  //         count: 16,
  //       },
  //       {
  //         month: 4,
  //         count: 15,
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "Song 3",
  //     likedCount: 9,
  //     listener: [
  //       {
  //         month: 1,
  //         count: 10,
  //       },
  //       {
  //         month: 2,
  //         count: 14,
  //       },
  //       {
  //         month: 3,
  //         count: 10,
  //       },
  //       {
  //         month: 4,
  //         count: 19,
  //       },
  //     ],
  //   },
  // ]
  // console.log(config)
  const result: MusicStats[] = await axios(
    "http://localhost:8000/listen-tos/top/music"
  )
  console.log(result)
  return result
}

export function getAll(idArtist: number): MusicStats[] {
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
