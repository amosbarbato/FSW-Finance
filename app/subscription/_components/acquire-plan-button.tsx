"use client"
import { Button } from "@/app/_components/ui/button"
import { StripeCheckout } from "../_actions/stripe-checkout"
import { loadStripe } from "@stripe/stripe-js"

const AcquirePlanButton = () => {
  const handleAcquirePlan = async () => {
    const { sessionId } = await StripeCheckout()
    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY) {
      throw new Error("Stripe publishable key not found")
    }

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

    if (!stripe) {
      throw new Error("Stripe not found");
    } await stripe.redirectToCheckout({ sessionId })
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