"use client"
import { UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="flex justify-between border-b border-solid px-8 py-4">
      <div className="flex items-center gap-10">
        <Image
          src="/logo.svg"
          width={173}
          height={39}
          alt="Finance AI"
        />
        <Link
          href="/"
          className={
            pathname === "/"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Transações
        </Link>
        <Link
          href="/subscription"
          className={
            pathname === "/subscription"
              ? "font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Assinatura
        </Link>
      </div>

      <UserButton
        showName
        appearance={{
          elements: {
            userButtonTrigger: 'px-4 py-2.5 border border-solid rounded-lg',
            userButtonTrigger__open: 'bg-white/5',
            userButtonBox: 'flex-row-reverse',
            userButtonOuterIdentifier: 'text-white pl-0',
            userButtonAvatarBox: 'h-6 w-6'
          }
        }}
      />
    </nav>
  )
}

export default Navbar