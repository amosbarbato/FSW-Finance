import { auth } from "@clerk/nextjs/server"
import Navbar from "../_components/navbar"
import { redirect } from "next/navigation"
import { Card, CardContent, CardHeader } from "../_components/ui/card"
import { CheckIcon, XIcon } from "lucide-react"
import { Button } from "../_components/ui/button"
import AcquirePlanButton from "./_components/acquire-plan-button"

const Subscription = async () => {
  const { userId } = await auth()

  if (!userId) {
    redirect("/login")
  }

  return (
    <>
      <Navbar />

      <div className="space-y-6 p-6">
        <h1 className="text-2xl font-bold">Assinatura</h1>

        <div className="flex gap-6">
          <Card className="w-[450px]">
            <CardHeader className="border-b border-solid py-8 space-y-4">
              <h2 className="text-center text-2xl font-semibold">Plano Básico</h2>

              <div className="flex items-center justify-center gap-3">
                <span className="text-4xl">R$</span>
                <span className="font-semibold text-6xl">0</span>
                <div className="text-2xl text-muted-foreground">/mês</div>
              </div>
            </CardHeader>

            <CardContent className="p-10">
              <div className="space-y-4 pb-8">
                <div className="flex items-center gap-2">
                  <CheckIcon className="text-primary" />
                  <p>Apenas 10 transações por dia 7/10</p>
                </div>
                <div className="flex items-center gap-2">
                  <XIcon />
                  <p>Relatórios de IA ilimitados</p>
                </div>
                <div className="flex items-center gap-2">
                  <XIcon />
                  <p>...</p>
                </div>
              </div>
              <Button
                variant="outline"
                className="text-primary w-full border-primary rounded-full"
              >
                Fazer Upgrade
              </Button>
            </CardContent>
          </Card>

          <Card className="w-[450px]">
            <CardHeader className="border-b border-solid py-8 space-y-4">
              <h2 className="text-center text-2xl font-semibold">Plano Pro</h2>

              <div className="flex items-center justify-center gap-3">
                <span className="text-4xl">R$</span>
                <span className="font-semibold text-6xl">19</span>
                <div className="text-2xl text-muted-foreground">/mês</div>
              </div>
            </CardHeader>

            <CardContent className="p-10">
              <div className="space-y-4 pb-8">
                <div className="flex items-center gap-2">
                  <CheckIcon className="text-primary" />
                  <p>Transações ilimitadas</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="text-primary" />
                  <p>Relatórios de IA ilimitados</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckIcon className="text-primary" />
                  <p>...</p>
                </div>
              </div>
              <AcquirePlanButton />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Subscription