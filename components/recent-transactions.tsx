import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function RecentTransactions({ transactions }: { transactions: any[] }) {
  return (
    <div className="space-y-8">
      {transactions.slice(0, 5).map((transaction) => (
        <div key={transaction.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
            <AvatarFallback>{transaction.category[0]}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{transaction.name}</p>
            <p className="text-sm text-muted-foreground">
              {transaction.date}
            </p>
          </div>
          <div className={`ml-auto font-medium ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
            {transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount).toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  )
}

