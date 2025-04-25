'use client'

import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './ModeChange'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { CiLogin } from 'react-icons/ci'
import DashboardButton from './DashboardButton'
import { useUserRole } from '@/hooks/UserRole'
import { Terminal } from 'lucide-react'

function Navbar() {
  const { isInterviewer, isLoading } = useUserRole()

  return (
    <nav className="border-b border-[#00ff41]/30 bg-black/90 text-[#00ff41]">
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity"
        >
          <Terminal className="text-[#00ff41] size-8" />
          <span className="text-[#00ff41]">CodeTrix</span>
        </Link>

        {/* Static terminal text */}
        <div className="hidden md:flex items-center">
          <div className="font-mono text-xs text-[#00ff41]/80">
            <span className="mr-1">&gt;</span>
            System:Access:Granted
            <span className="animate-pulse">_</span>
          </div>
        </div>

        {/* Right side controls */}
        <div className="flex items-center space-x-4 ml-auto">
          <ModeToggle />

          <SignedIn>
            {!isLoading && isInterviewer && <DashboardButton />}
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton mode="modal">
              <button className="hover:text-[#00ff41] transition-colors border border-[#00ff41]/30 rounded-md px-3 py-1 text-sm font-mono">
                <span className="flex items-center gap-2">
                  <CiLogin className="w-4 h-4" />
                  ENTER_CODETRIX
                </span>
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
