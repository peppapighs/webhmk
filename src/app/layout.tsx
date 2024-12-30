import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { ThemeProvider } from '@/components/ThemeProvider'
import { cn } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'WEBHMK',
  description: 'Web Configurator for libhmk Keyboards',
}

const inter = Inter({ subsets: ['latin', 'latin-ext'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn(inter.className, 'antialiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-svh flex-col bg-background">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
