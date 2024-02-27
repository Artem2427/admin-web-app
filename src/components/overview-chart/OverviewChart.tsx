import { FC } from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

type CustomTickProps = {
  x: number
  y: number
  payload: {
    value: string
  }
}

const CustomAxisTick: FC<CustomTickProps> = ({ x, y, payload }) => {
  const [month, day] = payload.value.split(' ')
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={-6}
        dy={16}
        textAnchor="middle"
        fill="#888888"
        fontSize={12}
      >
        {day}
      </text>
      <text x={0} y={20 + 6} textAnchor="middle" fill="#888888" fontSize={12}>
        {month}
      </text>
    </g>
  )
}

type MockProps = {
  data: {
    name: string
    total: number
  }[]
}

//TODO add dynamic props
const OverviewChart: FC<MockProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tick={(props) => <CustomAxisTick {...props} />}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default OverviewChart
