import type { Metadata } from 'next'
import './globals.css'
import ConvexClerkProvider from '@/providers/ConvexClerkProvider'
import Navbar from '@/components/models/Navbar'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/models/Footer'

export const metadata: Metadata = {
  title: 'CodeTrix',
  description: 'Enter the CodeTrix - Where Reality Meets Digital',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ConvexClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* Static Matrix-inspired background instead of animated */}
            <div className="fixed inset-0 pointer-events-none opacity-5 overflow-hidden z-0">
              <div className="matrix-static-background"></div>
            </div>
            
            <div className="min-h-screen relative z-10 backdrop-blur-sm">
              <Navbar />
              <main className="px-4 sm:px-6 lg:px-8">{children}</main>
            </div>
            <Footer/>
          </ThemeProvider>
          <Toaster 
            toastOptions={{
              style: { 
                fontFamily: 'monospace',
              }
            }}
          />
        </body>
      </html>
    </ConvexClerkProvider>
  )
}
