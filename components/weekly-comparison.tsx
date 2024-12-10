"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

export function WeeklyComparison({ data }: { data: any[] }) {
  const today = new Date()
  const oneWeekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
  const twoWeeksAgo = new Date(today.getTime() - 14 * 24 * 60 * 60 * 1000)

  const thisWeekData = data.filter(t => new Date(t.date) >= oneWeekAgo && new Date(t.date) <= today)
  const lastWeekData = data.filter(t => new Date(t.date) >= twoWeeksAgo && new Date(t.date) < oneWeekAgo)

  const getDayTotal = (transactions: any[], dayOffset: number) => {
    const targetDate = new Date(today.getTime() - dayOffset * 24 * 60 * 60 * 1000)
    return transactions
      .filter(t => new Date(t.date).toDateString() === targetDate.toDateString())
      .reduce((sum, t) => sum + Math.abs(t.amount), 0)
  }

  const chartData = Array.from({ length: 7 }, (_, i) => ({
    name: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][(today.getDay() - i + 7) % 7],
    thisWeek: getDayTotal(thisWeekData, i),
    lastWeek: getDayTotal(lastWeekData, i + 7)
  })).reverse()

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={chartData}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
        <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
        <Legend />
        <Bar dataKey="lastWeek" name="Last Week" fill="#8884d8" radius={[4, 4, 0, 0]} />
        <Bar dataKey="thisWeek" name="This Week" fill="#82ca9d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

