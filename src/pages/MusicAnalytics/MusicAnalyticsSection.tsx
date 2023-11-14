import {
  LineChart,
  Line,
  Legend,
  Tooltip,
  YAxis,
  XAxis,
  CartesianGrid,
} from "recharts"
import { getAllMusicStatsByArtistId } from "../../lib/api/handler/Music.ts"
import { useContext, useState } from "react"
import { useAuthContext } from "../../context/AuthContext.ts"
import { Table } from "@radix-ui/themes"

export const MusicAnalyticsSection = () => {
  const user = useAuthContext()
  const data = getAllMusicStatsByArtistId(user.id)
  const [selectedRow, setSelectedRow] = useState(0)

  const handleRowClick = (index: number) => {
    setSelectedRow(index)
  }

  const listenerStat = data[selectedRow]?.listener

  return (
    <>
      <h1>
        <strong>Foobar</strong> is your most listened songs this past year
      </h1>
      <MusicAnalyticsChart stats={listenerStat} />
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
    </>
  )
}

export interface MusicAnalyticsChartProps {
  stats: { month: number; count: number }[]
}
const MusicAnalyticsChart: React.FC<MusicAnalyticsChartProps> = ({ stats }) => {
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

export default MusicAnalyticsSection
