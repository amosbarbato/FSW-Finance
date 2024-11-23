import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}

const TransactionsTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionType.DEPOSIT) {
    return (
      <Badge className="bg-primary/10 rounded-full font-bold text-primary hover:bg-primary/30">
        <CircleIcon className="mr-1 fill-primary" size={10} />
        Ganho
      </Badge>
    )
  }
  if (transaction.type === TransactionType.EXPENSE) {
    return (
      <Badge className="bg-red-600/10 rounded-full font-bold text-red-600 hover:bg-red-600/30">
        <CircleIcon className="mr-1 fill-red-600" size={10} />
        Gasto
      </Badge>
    )
  }
  return (
    <Badge className="bg-muted rounded-full font-bold text-white hover:bg-white">
      <CircleIcon className="mr-1 fill-white" size={10} />
      Investimento
    </Badge>
  )
}

export default TransactionsTypeBadge