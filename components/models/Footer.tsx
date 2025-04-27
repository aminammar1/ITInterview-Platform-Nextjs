'use client'

import React from 'react'
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa'
import { RocketIcon } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-black text-white border-t border border-border hover:border-primary/20 transition-all py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-sm">
        <div className="flex items-center mb-4 sm:mb-0">
          <RocketIcon className="text-white size-4 mr-2" />
          <p className="font-light">
            © {new Date().getFullYear()} CodeTrix. Enterprise Interview
            Platform.
          </p>
        </div>

        <div className="flex space-x-6 text-gray-400">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGithub size={18} />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="https://codetrix.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            <FaGlobe size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
