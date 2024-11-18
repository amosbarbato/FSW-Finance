import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import Navbar from "./_components/navbar"

const Home = async () => {
  const { userId } = await auth()

  if (!userId) {
    redirect("/login")
  }

  return (
    <>
      <Navbar />

      <div className="flex w-full items-center justify-center">
        <h1>Transações</h1>
      </div>
    </>
  )
}

export default Home