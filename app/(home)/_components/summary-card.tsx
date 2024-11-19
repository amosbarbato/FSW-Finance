import { ReactNode } from "react"
import AddTransactionButton from "../../_components/add-transactions-button"
import { Card, CardContent, CardHeader } from "../../_components/ui/card"

interface Props {
  icon: ReactNode
  title: string
  amount: number
  size?: "small" | "large"
}

const SummaryItem = ({ icon, title, amount, size }: Props) => {
  return (
    <Card className={`${size === "large" ? 'bg-lime-800/5' : ""}`}>
      <CardHeader className="flex-row items-center gap-2 space-y-0">
        <div className={`p-2 rounded-lg ${size === "large" ? "bg-black" : "bg-white/5"}`}>
          {icon}
        </div>
        <p className={
          `${size === "small" ? "text-muted-foreground" : "text-white opacity-70"}`
        }>
          {title}
        </p>
      </CardHeader>

      <CardContent className="flex justify-between">
        <p className={
          `font-bold ${size === "small" ? "text-2xl" : "text-4xl"}`
        }>
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
          }).format(amount)}
        </p>
        {size === "large" && <AddTransactionButton />}
      </CardContent>
    </Card>
  )
}

export default SummaryItem