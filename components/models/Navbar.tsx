'use client'

import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './ModeChange'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { useUserRole } from '@/hooks/UserRole'
import { RocketIcon } from 'lucide-react'

function Navbar() {
  const { isInterviewer, isLoading } = useUserRole()

  return (
    <nav className="border-b border-border bg-card/95 text-foreground backdrop-blur-sm">
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-2xl mr-6 hover:opacity-80 transition-opacity"
        >
          <RocketIcon className="text-primary size-6" />
          <span className="text-foreground font-sans">CodeTrix</span>
        </Link>

        {/* Static terminal text */}
        <div className="hidden md:flex items-center">
          <div className="text-xs text-muted-foreground">
            Enterprise Interview Platform
          </div>
        </div>

        {/* Right side controls */}
        <div className="flex items-center space-x-4 ml-auto">
          <ModeToggle />

          <SignedIn>
            {!isLoading && isInterviewer && (
              <Link
                href="/dashboard"
                className="text-sm text-foreground border border-border px-3 py-1 rounded-md hover:bg-primary/10 transition-colors"
              >
                Dashboard
              </Link>
            )}
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded-md px-4 py-1.5 text-sm font-medium">
                Sign In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
