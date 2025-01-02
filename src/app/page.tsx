import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-12 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight">WEBHMK</h1>
      <div className="mt-6 grid grid-flow-row gap-4 sm:grid-flow-col">
        <Link
          href="/app"
          replace
          className={buttonVariants({ variant: "default", size: "lg" })}
        >
          Get Started
        </Link>
        <Link
          href="/demo"
          replace
          className={buttonVariants({ variant: "outline", size: "lg" })}
        >
          Demo
        </Link>
      </div>
    </main>
  )
}
