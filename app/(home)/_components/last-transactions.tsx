import { Button } from "@/app/_components/ui/button"
import { CardContent, CardHeader, CardTitle } from "@/app/_components/ui/card"
import { ScrollArea } from "@/app/_components/ui/scroll-area"
import { Transaction, TransactionType } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"

import { formatCurrency } from "@/app/_utils/currency"
import { TRANSACTION_PAYMENT_METHOD_ICONS } from "@/app/_constants/transactions"

interface Prop {
  lastTransactions: Transaction[]
}

const LastTransactions = ({ lastTransactions }: Prop) => {
  const getAmountColor = (transaction: Transaction) => {
    if (transaction.type === TransactionType.EXPENSE) {
      return "text-red-500"
    }
    if (transaction.type === TransactionType.DEPOSIT) {
      return "text-primary"
    }
    return "text-white"
  }

  const getAmountPrefix = (transaction: Transaction) => {
    if (transaction.type === TransactionType.DEPOSIT) {
      return "+"
    }
    return "-"
  }

  return (
    <ScrollArea className="rounded-xl border">
      <CardHeader>
        <div className="flex items-center justify-between pb-6 border-b">
          <CardTitle className="font-bold">Transações</CardTitle>
          <Button variant="outline" className="rounded-full">
            <Link href="/transactions">Ver mais</Link>
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {lastTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-white/5">
                <Image
                  src={`/${TRANSACTION_PAYMENT_METHOD_ICONS[transaction.paymentMethod]}`}
                  height={20}
                  width={20}
                  alt=""
                />
              </div>
              <div>
                <p className="text-sm font-bold">{transaction.name}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(transaction.date).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                  })}
                </p>
              </div>
            </div>
            <p className={`font-bold text-sm ${getAmountColor(transaction)}`}>
              {getAmountPrefix(transaction)}
              {formatCurrency(Number(transaction.amount))}
            </p>
          </div>
        ))}
      </CardContent>
    </ScrollArea>
  )
}

export default LastTransactions