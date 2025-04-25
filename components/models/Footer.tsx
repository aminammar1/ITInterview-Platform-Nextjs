    'use client'

    import React from 'react'
    import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa'

    function Footer() {
    return (
        <footer className="bg-black text-green-400 border-t border-green-900 py-6 mt-10">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
            <p className="mb-2 sm:mb-0 font-mono">
            © {new Date().getFullYear()} CodeTrix. IT Interview Platform.
            </p>

            <div className="flex space-x-4 text-green-300">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                <FaGithub size={18} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                <FaLinkedin size={18} />
            </a>
            <a href="https://codetrix.dev" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
                <FaGlobe size={18} />
            </a>
            </div>
        </div>
        </footer>
    )
    }

    export default Footer
