import { isMatch } from "date-fns"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import Navbar from "../_components/navbar"
import TimeSelect from "../_components/time-select"
import Summary from "../_container/summary"

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
    redirect("/?month=01")
  }

  return (
    <>
      <Navbar />
      <div className="p-6 space-y-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <TimeSelect />
        </div>
        <Summary month={month} />
      </div>
    </>
  )
}

export default Home