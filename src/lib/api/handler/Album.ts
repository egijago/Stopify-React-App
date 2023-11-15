import { Album } from "../../models/Album"

export const getAllMyAlbum = (): Album[] => {
  const data: Album[] = [
    {
      idAlbum: 1,
      title: "album 1"
    },
    {
      idAlbum: 4,
      title: "album 4"
    },
    {
      idAlbum: 3,
      title: "album 3"
    },
    {
      idAlbum: 2,
      title: "album 2"
    },
  ]
  return data
}
