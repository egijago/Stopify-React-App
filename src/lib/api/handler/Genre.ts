import { Genre } from "../../models/Genre"
import { GenreStats } from "../../models/GenreStats"

export function getAllGenreStats(): GenreStats[] {
  const result: GenreStats[] = [
    {
      id: 1,
      genre: "Genre 1",
      listenerCount: 100,
      likedCount: 50,
    },
    {
      id: 2,
      genre: "Genre 2",
      listenerCount: 200,
      likedCount: 100,
    },
    {
      id: 3,
      genre: "Genre 3",
      listenerCount: 212,
      likedCount: 100,
    },
    {
      id: 4,
      genre: "Genre 4",
      listenerCount: 323,
      likedCount: 100,
    },
    {
      id: 5,
      genre: "Genre 5",
      listenerCount: 123,
      likedCount: 100,
    },
  ]
  return result
}

export const getAllGenre = (): Genre[] => {
  const data: Genre[] = [
    {
      idGenre: 1,
      name: "genre1",
    },
    {
      idGenre: 2,
      name: "genre2",
    },
    {
      idGenre: 3,
      name: "genre3",
    },
    {
      idGenre: 4,
      name: "genre4",
    },
    {
      idGenre: 5,
      name: "genre5",
    },
  ]
  return data
}
