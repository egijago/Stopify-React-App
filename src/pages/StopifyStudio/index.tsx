import React from "react"
import ReactDOM from "react-dom/client"
import { AudioRecorder } from "react-audio-voice-recorder"
import { AddSongForm } from "./AddSongForm"

const addAudioElement = (blob: Blob) => {
  const url = URL.createObjectURL(blob)
  const audio: HTMLAudioElement = document.querySelector("#audio-buffer")
  audio.src = url
}

const StopifyStudioPage = () => {
  return (
    <>
      <AddSongForm/>
      <AudioRecorder
        onRecordingComplete={addAudioElement}
        audioTrackConstraints={{
          noiseSuppression: true,
          echoCancellation: true,
        }}
        downloadOnSavePress={false}
        downloadFileExtension="webm"
      />
    </>
  )
}

export default StopifyStudioPage
