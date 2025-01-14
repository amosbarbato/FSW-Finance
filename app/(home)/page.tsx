import { isMatch } from "date-fns"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import Navbar from "../_components/navbar"
import TimeSelect from "./_components/time-select"
import Summary from "./_components/summary"
import TransactionsPieChart from "./_components/transactions-pie-chart"
import { getDashboard } from "../_data/get-dashboard"
import ExpensesPerCategory from "./_components/expenses-per-category"
import LastTransactions from "./_components/last-transactions"
import { canUserAddTransactions } from "../_data/get-dashboard/can-user-add-transactions"

interface Params {
  searchParams: {
    month: string
  }
}

const Home = async ({ searchParams: { month } }: Params) => {
  const { userId } = await auth()

  if (!userId) {
    redirect("/login")
  }

  const monthIsInvalid = !month || !isMatch(month, "MM")
  if (monthIsInvalid) {
    redirect(`?month=${new Date().getMonth() + 1}`)
  }

  const dashboard = await getDashboard(month)
  const userCanAddTransaction = await canUserAddTransactions()

  return (
    <>
      <Navbar />
      <div className="p-6 space-y-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <TimeSelect />
        </div>
        <div className="grid grid-cols-[2fr,1fr] gap-6">
          <div className="flex flex-col gap-6">
            <Summary
              month={month} {...dashboard}
              userCanAddTransaction={userCanAddTransaction}
            />
            <div className="grid grid-cols-3 grid-rows-1 gap-6">
              <TransactionsPieChart {...dashboard} />
              <ExpensesPerCategory expensePerCategory={dashboard.totalExpensePerCategory} />
            </div>
          </div>

          <LastTransactions lastTransactions={dashboard.lastTransactions} />
        </div>
      </div>
    </>
  )
}

export default Home