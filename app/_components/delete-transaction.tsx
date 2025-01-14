"use client"

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/app/_components/ui/alert-dialog"
import { CircleXIcon } from "lucide-react"
import { toast } from "sonner"
import { deleteTransaction } from "../_actions/delete-transaction"

interface Prop {
  transactionId: string
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

const DeleteTransactionConfirm = ({ transactionId, isOpen, setIsOpen }: Prop) => {
  const handleConfirmDelete = async () => {
    try {
      await deleteTransaction({ transactionId })
      toast.success("Transação deletada com sucesso!")
    } catch (error) {
      console.error(error)
      toast.error("Ocorreu um erro ao deletar a transação.")
    }
  }

  return (
    <AlertDialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open)
      }}
    >
      <AlertDialogTrigger asChild></AlertDialogTrigger>
      <AlertDialogContent className="w-[390px] sm:rounded-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex gap-1 items-center">
            <CircleXIcon fill="#ef4444" size={24} className="text-background" />
            Deseja deletar essa transação?
          </AlertDialogTitle>
          <AlertDialogDescription>Uma vez deletada não poderá recuperá-la.</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel className="rounded-xl">
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirmDelete}
            className="rounded-xl bg-red-600 hover:bg-red-500"
          >
            Deletar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteTransactionConfirm