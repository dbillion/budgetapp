"use client"

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Overview } from '@/components/overview'
import { RecentTransactions } from '@/components/recent-transactions'
import { ExpensesByCategory } from '@/components/expenses-by-category'
import { MonthlyTrend } from '@/components/monthly-trend'
import { WeeklyComparison } from '@/components/weekly-comparison'
import { AddTransactionForm } from '@/components/add-transaction-form'

export default function Dashboard() {
  const [transactions, setTransactions] = useState([
    {
      id: "1",
      amount: -24.50,
      name: "Grocery Store",
      date: "2023-06-01",
      category: "Food"
    },
    {
      id: "2",
      amount: -12.99,
      name: "Netflix Subscription",
      date: "2023-06-02",
      category: "Entertainment"
    },
    {
      id: "3",
      amount: -35.00,
      name: "Gas Station",
      date: "2023-06-03",
      category: "Transportation"
    },
    {
      id: "4",
      amount: 1200.00,
      name: "Salary Deposit",
      date: "2023-06-05",
      category: "Income"
    },
    {
      id: "5",
      amount: -55.00,
      name: "Restaurant Dinner",
      date: "2023-06-06",
      category: "Food"
    }
  ])

  const addTransaction = (newTransaction: any) => {
    setTransactions([
      {
        ...newTransaction,
        date: newTransaction.date || new Date().toISOString().split('T')[0], // Fallback to current date if not provided
      },
      ...transactions
    ])
  }

  const totalBalance = transactions.reduce((sum, transaction) => sum + transaction.amount, 0)
  const totalIncome = transactions.filter(t => t.amount > 0).reduce((sum, t) => sum + t.amount, 0)
  const totalExpenses = transactions.filter(t => t.amount < 0).reduce((sum, t) => sum + Math.abs(t.amount), 0)

  return (
    <div className="flex-col md:flex">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
            <TabsTrigger value="add">Add Transaction</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${totalBalance.toFixed(2)}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Income</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${totalIncome.toFixed(2)}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Expenses</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${totalExpenses.toFixed(2)}</div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Savings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">${(totalIncome - totalExpenses).toFixed(2)}</div>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <Overview data={transactions} />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>You made {transactions.length} transactions this month.</CardDescription>
                </CardHeader>
                <CardContent>
                  <RecentTransactions transactions={transactions} />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="daily" className="space-y-4">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Daily Expenses</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <ExpensesByCategory data={transactions} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="weekly" className="space-y-4">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Weekly Comparison</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <WeeklyComparison data={transactions} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="monthly" className="space-y-4">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Monthly Trend</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <MonthlyTrend data={transactions} />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="add" className="space-y-4">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Add New Transaction</CardTitle>
              </CardHeader>
              <CardContent>
                <AddTransactionForm onAddTransaction={addTransaction} />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

