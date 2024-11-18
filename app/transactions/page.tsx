import { ArrowDownUpIcon } from "lucide-react"
import Navbar from "../_components/navbar"
import { Button } from "../_components/ui/button"
import { db } from "../_lib/prisma"
import { DataTable } from "../_components/ui/data-table"
import { transactionsColumns } from "./_columns"


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
          <Button className="rounded-full">
            Adicionar transação
            <ArrowDownUpIcon />
          </Button>
        </div>

        <DataTable columns={transactionsColumns} data={transictions} />
      </div>
      {transictions.map((transiction) => (
        <div key={transiction.id}>
          {transiction.name}
        </div>
      ))}
    </div>
  )
}

export default TransactionsPage