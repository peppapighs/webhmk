import Link from "next/link"
import { ThemeSwitcher } from "./theme-switcher"

export function SiteHeader() {
  return (
    <header className="w-full bg-background">
      <div className="mx-auto flex h-14 max-w-[1800px] items-center justify-between gap-6 px-6 min-[1800px]:border-x">
        <Link href="/">
          <h1 className="text-xl font-extrabold tracking-tight">WEBHMK</h1>
        </Link>
        <ThemeSwitcher />
      </div>
    </header>
  )
}
