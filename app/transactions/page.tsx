import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { db } from "../_lib/prisma"
import { transactionsColumns } from "./_columns"
import Navbar from "../_components/navbar"
import { DataTable } from "../_components/ui/data-table"
import AddTransactionButton from "../_components/add-transactions-button"
import { ScrollArea } from "../_components/ui/scroll-area"
import { canUserAddTransactions } from "../_data/get-dashboard/can-user-add-transactions"

const TransactionsPage = async () => {
  const { userId } = await auth()

  if (!userId) {
    redirect("/login")
  }

  const transactions = await db.transaction.findMany({
    where: { userId }
  })

  const userCanAddTransaction = await canUserAddTransactions()

  return (
    <div>
      <Navbar />
      <div className="space-y-6 p-6">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">
            Transações
          </h1>
          <AddTransactionButton
            userCanAddTransaction={JSON.parse(JSON.stringify(userCanAddTransaction))}
          />
        </div>

        <ScrollArea>
          <DataTable
            columns={transactionsColumns}
            data={JSON.parse(JSON.stringify(transactions))}
          />
        </ScrollArea>
      </div>
    </div>
  )
}

export default TransactionsPage