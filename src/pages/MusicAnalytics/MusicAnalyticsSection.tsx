import {
  LineChart,
  Line,
  Legend,
  Tooltip,
  YAxis,
  XAxis,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts"
import { getAllMusicStats } from "../../lib/api/handler/Music.ts"
import { useEffect, useState } from "react"
import { Table } from "@radix-ui/themes"

export const MusicAnalyticsSection = () => {
  const [data, setData] = useState([])
  const [selectedRow, setSelectedRow] = useState(0)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const musicStats = await getAllMusicStats()
        if (!musicStats) {
          return
        }
        setData(musicStats)
        console.log(musicStats)
      } catch (error) {
        // Handle errors here
        console.error("Error fetching music stats:", error)
      }
    }

    fetchData()
  }, [])

  let mostLikedMusic
  if (data.length !== 0) {
    mostLikedMusic = data.reduce((prev, curr) => {
      return prev.likedCount > curr.likedCount ? prev : curr
    })
  }

  const handleRowClick = (index: number) => {
    setSelectedRow(index)
  }
  const getDif = (): string => {
    const dif: number =
      data[selectedRow].listener[data[selectedRow].listener.length - 1].count -
      data[selectedRow].listener[data[selectedRow].listener.length - 2].count
    const difStr: string = dif > 0 ? "+" + dif.toString() : dif.toString()
    return difStr
  }

  const listenerStat = data[selectedRow]?.listener
  return (
    <>
      {data.length !== 0 ? (
        <>
          <h1>
            There are <strong>{getDif()} people listening</strong> to{" "}
            {data[selectedRow].title} from last month
          </h1>
          <MusicListenerAnalytic stats={listenerStat} />
          <h2>
            Here are your <strong>most listened</strong> song this past year
          </h2>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Id</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Dif</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {data.map((music, index) => (
                <Table.Row onClick={() => handleRowClick(index)}>
                  <Table.RowHeaderCell>{music.id}</Table.RowHeaderCell>
                  <Table.Cell>{music.title}</Table.Cell>
                  <Table.Cell>
                    {music.listener.length > 1
                      ? (() => {
                          const dif =
                            music.listener[music.listener.length - 1].count -
                            music.listener[music.listener.length - 2].count

                          return dif > 0 ? `+${dif}` : dif
                        })()
                      : null}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
          <h1>
            <strong>{mostLikedMusic.title}</strong> got the{" "}
            <strong>most like</strong> this past year.
          </h1>
          <MusicLikedAnalytic stats={data} />
        </>
      ) : (
        <>You have not enough music statistics to be shown!</>
      )}
    </>
  )
}

export interface MusicListenerAnalyticProps {
  stats: {
    month: number
    count: number
  }[]
}
const MusicListenerAnalytic: React.FC<MusicListenerAnalyticProps> = ({
  stats,
}) => {
  const data = stats
  return (
    <>
      <LineChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="count" stroke="#8884d8" />
      </LineChart>
    </>
  )
}

export interface MusicLikedAnalyticProps {
  stats: {
    title: string
    likedCount: number
  }[]
}
const MusicLikedAnalytic: React.FC<MusicLikedAnalyticProps> = ({ stats }) => {
  const data = stats
  return (
    <BarChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="title" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="likedCount" fill="#8884d8" />
    </BarChart>
  )
}

export default MusicAnalyticsSection
