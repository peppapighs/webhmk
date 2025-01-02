import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-12 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight">Page Not Found</h1>
      <div className="mt-6">
        <Link
          href="/"
          replace
          className={buttonVariants({ variant: "default", size: "lg" })}
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}
