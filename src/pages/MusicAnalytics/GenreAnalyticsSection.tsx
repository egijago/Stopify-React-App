import { LineChart, Line, Legend, Tooltip, YAxis, XAxis,CartesianGrid } from "recharts";
import { getAllMusicStatsByArtistId } from "../../lib/api/handler/Music.ts"
import { useAuthContext } from "../../context/AuthContext.ts";

const MusicAnalyticsSection = () => {
    const { id } = useAuthContext();
    const data = getAllMusicStatsByArtistId(id);
    return <>
        <h1>Youve'got <strong>n listener</strong> in this past year </h1>
        <LineChart width={730} height={250} data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="history.month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="history.listenerCount" stroke="#8884d8" />
            <Line type="monotone" dataKey="history.countListener" stroke="#82ca9d" />
        </LineChart>
    </>
}

export default MusicAnalyticsSection;