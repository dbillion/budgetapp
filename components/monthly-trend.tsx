"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

export function MonthlyTrend({ data }: { data: any[] }) {
  const monthlyData = data.reduce((acc: any, transaction: any) => {
    const month = new Date(transaction.date).getMonth()
    if (!acc[month]) {
      acc[month] = { 
        name: new Date(transaction.date).toLocaleString('default', { month: 'short' }),
        income: 0,
        expenses: 0
      }
    }
    if (transaction.amount > 0) {
      acc[month].income += transaction.amount
    } else {
      acc[month].expenses += Math.abs(transaction.amount)
    }
    return acc
  }, {})

  const chartData = Object.values(monthlyData)

  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={chartData}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
        <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
        <Line type="monotone" dataKey="income" name="Income" stroke="#8884d8" strokeWidth={2} />
        <Line type="monotone" dataKey="expenses" name="Expenses" stroke="#82ca9d" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

