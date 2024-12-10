"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

export function Overview({ data }: { data: any[] }) {
  const monthlyData = data.reduce((acc: any, transaction: any) => {
    const month = new Date(transaction.date).getMonth()
    if (!acc[month]) {
      acc[month] = { name: new Date(transaction.date).toLocaleString('default', { month: 'short' }), total: 0 }
    }
    acc[month].total += transaction.amount
    return acc
  }, {})

  const chartData = Object.values(monthlyData)

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={chartData}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip 
          formatter={(value: number) => [`$${value.toFixed(2)}`, 'Total']}
          labelFormatter={(label) => `Month: ${label}`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

