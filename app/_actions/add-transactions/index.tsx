"use server"

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { TransactionCategory, TransactionPaymentMethod, TransactionType } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { upsertTransactionSchema } from "./schema";

interface AddTransactionParams {
  name: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  paymentMethod: TransactionPaymentMethod;
  date: Date;
}

export const AddTransaction = async (params: AddTransactionParams) => {
  upsertTransactionSchema.parse(params)
  const { userId } = await auth()

  if (!userId) {
    throw new Error("Unauthorized")
  }
  await db.transaction.create({
    data: { ...params, userId }
  })

  revalidatePath("/transactions")
}