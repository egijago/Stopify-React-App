import { Legend, PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"
import { getAlbumAnalyticsByArtistID } from "../../lib/api/handler/Album.ts"
import { getAllGenreStats } from "../../lib/api/handler/Genre.ts"

const AlbumAnalyticsSection = () => {
  const data = getAllGenreStats()
  const strongestGenre = data.reduce((prev, curr) =>
    prev.listenerCount > curr.listenerCount ? prev : curr
  )
  return (
    <>
      <h1>
        <strong>{strongestGenre.genre}</strong> is your <strong>most</strong>{" "}
        popular genre
      </h1>
      <RadarChart outerRadius={90} width={730} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="genre" />
        <Radar
          name="Genre"
          dataKey="listenerCount"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <Legend />
      </RadarChart>
    </>
  )
}

export default AlbumAnalyticsSection
