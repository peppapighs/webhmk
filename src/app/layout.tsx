import type { Metadata } from "next"
import { Roboto_Flex } from "next/font/google"
import "./globals.css"
import { QueryClientProvider } from "@/components/query-client-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const robotoFlex = Roboto_Flex({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "WEBHMK",
  description: "Web configurator for libhmk Hall-effect keyboards",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn(robotoFlex.className, "antialiased")}>
        <QueryClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col bg-background">
              {children}
            </div>
          </ThemeProvider>
        </QueryClientProvider>
      </body>
    </html>
  )
}
