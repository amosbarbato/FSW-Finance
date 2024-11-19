import { db } from "../_lib/prisma"
import { transactionsColumns } from "./_columns"
import Navbar from "../_components/navbar"
import { DataTable } from "../_components/ui/data-table"
import AddTransactionButton from "../_components/add-transactions-button"

const TransactionsPage = async () => {
  const transictions = await db.transaction.findMany({})

  return (
    <div>
      <Navbar />
      <div className="space-y-6 p-6">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">
            Transações
          </h1>
          <AddTransactionButton />
        </div>

        <DataTable columns={transactionsColumns} data={transictions} />
      </div>
    </div>
  )
}

export default TransactionsPage