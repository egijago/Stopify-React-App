import MusicAnalyticsSection from "./MusicAnalyticsSection"
import AlbumAnalyticsSection from "./AlbumAnalyticsSection"
import MusicAnalyticsChart from "./MusicAnalyticsSection"
import { getAllMusicStatsByArtistId } from "../../lib/api/handler/Music"

const MusicAnalytics = () => {
  const data = getAllMusicStatsByArtistId(1)[0].listener
  return (
    <>
      <MusicAnalyticsSection />
      <AlbumAnalyticsSection />
    </>
  )
}

export default MusicAnalytics
