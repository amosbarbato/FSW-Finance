"use client"

import ModifiedTransactionDialog from "@/app/_components/modified-transactions"
import { Button } from "@/app/_components/ui/button"
import { Transaction } from "@prisma/client"
import { ExternalLinkIcon } from "lucide-react"
import { useState } from "react"

interface Props {
  transaction: Transaction
}

const EditTransaction = ({ transaction }: Props) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground"
        onClick={() => setDialogIsOpen(true)}
      >
        <ExternalLinkIcon />
      </Button>
      <ModifiedTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        defaultValues={{
          ...transaction,
          amount: Number(transaction.amount)
        }}
        transactionId={transaction.id}
      />
    </>
  )
}

export default EditTransaction