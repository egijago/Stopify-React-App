import { Legend, PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { getAlbumAnalyticsByArtistID } from "../../lib/api/handler/Album.ts"

const AlbumAnalyticsSection = () => {
    const data = getAlbumAnalyticsByArtistID(10);
    return <>
        <h1><strong>Jazz</strong> is your most popular genre</h1>
        <RadarChart outerRadius={90} width={730} height={250} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="genre" />
            <Radar name="Genre" dataKey="listenerCount" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Legend />
        </RadarChart>
    </>
}

export default AlbumAnalyticsSection;