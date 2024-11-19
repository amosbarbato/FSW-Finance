import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon, WalletIcon } from "lucide-react"
import SummaryItem from "../(home)/_components/summary-card"
import { db } from "../_lib/prisma"

interface Prop {
  month: string
}

const Summary = async ({ month }: Prop) => {
  const where = {
    date: {
      gte: new Date(`2024-${month}-01`),
      lt: new Date(`2024-${month}-31`),
    },
  }

  const depositsTotal = Number((
    await db.transaction.aggregate({
      where: { ...where, type: "DEPOSIT" },
      _sum: { amount: true }
    })
  )?._sum?.amount)

  const investmentsTotal = Number((
    await db.transaction.aggregate({
      where: { ...where, type: "INVESTMENT" },
      _sum: { amount: true }
    })
  )?._sum?.amount)

  const expensesTotal = Number((
    await db.transaction.aggregate({
      where: { ...where, type: "EXPENSE" },
      _sum: { amount: true }
    })
  )?._sum?.amount)

  const balance = depositsTotal - investmentsTotal - expensesTotal

  return (
    <div className="space-y-6">
      <SummaryItem
        icon={<WalletIcon size={16} />}
        title="Saldo"
        amount={balance}
        size="large"
      />

      <div className="grid grid-cols-3 gap-6">
        <SummaryItem
          icon={<PiggyBankIcon size={16} />}
          title="Investido"
          amount={investmentsTotal}
          size="small"
        />
        <SummaryItem
          icon={<TrendingUpIcon size={18} className="text-primary" />}
          title="Receita"
          amount={depositsTotal}
          size="small"
        />
        <SummaryItem
          icon={<TrendingDownIcon size={18} className="text-red-500" />}
          title="Despesas"
          amount={expensesTotal}
          size="small"
        />
      </div>
    </div>
  )
}

export default Summary