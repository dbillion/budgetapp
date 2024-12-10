"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

export function ExpensesByCategory({ data }: { data: any[] }) {
  const expensesByCategory = data
    .filter(transaction => transaction.amount < 0)
    .reduce((acc: any, transaction: any) => {
      if (!acc[transaction.category]) {
        acc[transaction.category] = 0
      }
      acc[transaction.category] += Math.abs(transaction.amount)
      return acc
    }, {})

  const chartData = Object.entries(expensesByCategory).map(([name, value]) => ({ name, value }))

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip formatter={(value) => `$${value.toFixed(2)}`} />
      </PieChart>
    </ResponsiveContainer>
  )
}

