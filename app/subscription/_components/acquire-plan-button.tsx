"use client"
import { Button } from "@/app/_components/ui/button"
import { StripeCheckout } from "../_actions/stripe-checkout"
import { loadStripe } from "@stripe/stripe-js"
import { useUser } from "@clerk/nextjs"
import Link from "next/link"

const AcquirePlanButton = () => {
  const { user } = useUser()

  const handleAcquirePlan = async () => {
    const { sessionId } = await StripeCheckout()
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      throw new Error("Stripe publishable key not found")
    }
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    )
    if (!stripe) {
      throw new Error("Stripe not found");
    }
    await stripe.redirectToCheckout({ sessionId })
  }

  const hasPremiumPlan = user?.publicMetadata.subscriptionPlan == "premium"
  if (hasPremiumPlan) {
    return (
      <Button
        className="w-full border-primary rounded-full"
        variant="link"
      >
        <Link
          href={`${process.env.NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL as string}?prefilled_email=${user.emailAddresses[0].emailAddress}`}
        >
          Gerenciar plano
        </Link>
      </Button>
    )
  }

  return (
    <Button
      className="w-full border-primary rounded-full"
      onClick={handleAcquirePlan}
    >
      Adquirir Plano
    </Button>
  )
}

export default AcquirePlanButton