import { ReactNode } from "react"
import AddTransactionButton from "./add-transactions-button"
import { Card, CardContent, CardHeader } from "./ui/card"

interface Props {
  icon: ReactNode
  title: string
  amount: number
  size?: "small" | "large"
}

const SummaryItem = ({ icon, title, amount, size }: Props) => {
  return (
    <Card>
      <CardHeader className="flex-row items-center gap-4 space-y-0">
        {icon}
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