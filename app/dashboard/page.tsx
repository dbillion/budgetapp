import { Metadata } from 'next'
import Dashboard from '@/components/dashboard'


export const metadata: Metadata = {
  title: 'Budget Tracker',
  description: 'Track your expenses and income with detailed charts and categories',
}

export default function DashboardPage() {
  return   <Dashboard />

}