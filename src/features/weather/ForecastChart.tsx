import { format } from 'date-fns'
import {
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from 'recharts'
import { Forecast } from '@/features/weather/data/types.ts'

export default function ForecastChart({ data }: { data?: Forecast }) {
  const formattedData = data?.list?.map((item) => ({
    time: format(new Date(item?.dt_txt || ''), 'dd MMM HH:mm'),
    temp: item?.main?.temp,
    feelsLike: item?.main?.feels_like,
  }))

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={formattedData}
        margin={{ top: 20, right: 30, bottom: 10 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="temp"
          stroke="#8884d8"
          name="Temperature (°C)"
        />
        <Line
          type="monotone"
          dataKey="feelsLike"
          stroke="#82ca9d"
          name="Feels Like (°C)"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
