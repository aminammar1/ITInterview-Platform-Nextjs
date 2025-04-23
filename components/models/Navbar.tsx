import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './ModeChange'
import { CodeIcon } from "lucide-react"
import { SignedIn , UserButton } from '@clerk/nextjs'
import DashboardButton from './DashboardButton'

function Navbar() {
    return (
        <nav className="border-b">
            <div className="flex h-16 items-center px-4 container mx-auto">
            {/** left side Logo  */ }
            <Link
                href="/"
                className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity"
            >
                <CodeIcon className="size-8 text-emerald-600" />
                <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                CodeTrix
                </span>
            </Link>
    
            {/* right side navbar actions  */}
            <SignedIn>
                <div className="flex items-center space-x-4 ml-auto">
                <DashboardButton />
                <ModeToggle />
                <UserButton />
                </div>
            </SignedIn>
            </div>
        </nav>
        )
    }
    export default Navbar
