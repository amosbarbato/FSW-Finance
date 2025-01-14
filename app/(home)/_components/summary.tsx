import { PiggyBankIcon, TrendingDownIcon, TrendingUpIcon, WalletIcon } from "lucide-react"
import SummaryItem from "./summary-card"

interface Prop {
  month: string
  balance: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
  userCanAddTransaction?: boolean
}

const Summary = async ({ balance, depositsTotal, expensesTotal, investmentsTotal, userCanAddTransaction }: Prop) => {
  return (
    <div className="space-y-6">
      <SummaryItem
        icon={<WalletIcon size={16} />}
        title="Saldo"
        amount={balance}
        size="large"
        userCanAddTransaction={JSON.parse(JSON.stringify(userCanAddTransaction))}
      />

      <div className="grid grid-cols-3 gap-6">
        <SummaryItem
          icon={<PiggyBankIcon size={16} />}
          title="Investido"
          amount={JSON.parse(JSON.stringify(investmentsTotal))}
          size="small"
        />
        <SummaryItem
          icon={<TrendingUpIcon size={18} className="text-primary" />}
          title="Receita"
          amount={JSON.parse(JSON.stringify(depositsTotal))}
          size="small"
        />
        <SummaryItem
          icon={<TrendingDownIcon size={18} className="text-red-500" />}
          title="Despesas"
          amount={JSON.parse(JSON.stringify(expensesTotal))}
          size="small"
        />
      </div>
    </div>
  )
}

export default Summary