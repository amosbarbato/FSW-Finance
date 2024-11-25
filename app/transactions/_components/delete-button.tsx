"use client"
import { Button } from "@/app/_components/ui/button"
import { Trash2Icon } from "lucide-react"
import DeleteTransactionConfirm from "@/app/_components/delete-transaction"
import { useState } from "react"

interface Prop {
  transactionId: string
}

const DeleteTransaction = ({ transactionId }: Prop) => {
  const [alertIsOpen, setAlertIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground"
        onClick={() => setAlertIsOpen(true)}
      >
        <Trash2Icon />
      </Button>
      <DeleteTransactionConfirm
        isOpen={alertIsOpen}
        setIsOpen={setAlertIsOpen}
        transactionId={transactionId}
      />
    </>
  )
}

export default DeleteTransaction