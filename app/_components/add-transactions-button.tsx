"use client"
import { useState } from "react"
import { Button } from "./ui/button"
import { ArrowDownUpIcon } from "lucide-react"
import UpsertTransactionDialog from "./upsert-transactions"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"

interface Props {
  userCanAddTransaction: boolean
}

const AddTransactionButton = ({ userCanAddTransaction }: Props) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  return ( 
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button className="rounded-full font-bold"
              onClick={() => setDialogIsOpen(true)}
            >
              Adicionar transação
              <ArrowDownUpIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {!userCanAddTransaction && "Você atingiu o limite de transações. Atualize o plano e tenha acesso ilimitado."}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen} />
    </>
  )
}

export default AddTransactionButton