import * as Form from "@radix-ui/react-form"
import { Button, TextField } from "@radix-ui/themes"
import { getAllGenre } from "../../lib/api/handler/Genre"
import { Genre } from "../../lib/models/Genre"
import { getAllMyAlbum } from "../../lib/api/handler/Album"
import { Album } from "../../lib/models/Album"
import { useState } from "react"
import { Submit } from "../../components/Submit"
import * as AlertDialog from "@radix-ui/react-alert-dialog"

export const AddSongForm = () => {
  const handleSubmit = (event) => {
    // Handle form submission logic here
    event.preventDefault()
    // Example: Get form data
    const formData = new FormData(event.target)
    // Process the form data further or submit it
    console.log(formData)
    console.log(1234)
  }
  const [ops, setOps] = useState(false)
  // const albums
  const albums: Album[] = getAllMyAlbum()
  const genres: Genre[] = getAllGenre()
  return (
    <AlertDialog.Root>
      <Form.Root
        onSubmit={() => {
          setOps(true)
        }}
      >
        <div className="dialog" id="dialog-music">
          <img
            id="album-image-preview"
            src=""
            alt="Not Found!"
            onError={(e) => {
              const selectedImage: HTMLImageElement = e.currentTarget
              selectedImage.src = "/image/none.jpg"
            }}
          />
          <label htmlFor="music-title">Music title</label>
          <br></br>
          <TextField.Root>
            <br></br>
            <TextField.Slot></TextField.Slot>
            <TextField.Input placeholder="Never gonna give you up!" />
          </TextField.Root>
          <label htmlFor="album-option">123</label>
          <br></br>
          <select id="album-option" name="album">
            {albums.map((album: Album) => (
              <option value={album.idAlbum}>{album.title}</option>
            ))}
          </select>
          <audio id="audio-buffer" controls></audio>
          <br></br>
          <label htmlFor="genre-option">Genre</label>
          <br></br>
          <select id="genre-option" name="genre">
            {genres.map((genre: Genre) => (
              <option value={genre.idGenre}>{genre.name}</option>
            ))}
          </select>
          <Form.Submit>Air Me!</Form.Submit>
        </div>
        {ops ? <Submit handler={handleSubmit} /> : <></>}
      </Form.Root>
    </AlertDialog.Root>
  )
}
