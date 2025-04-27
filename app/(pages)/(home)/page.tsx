'use client'

import Home from '@/components/models/Home'
import { useUser } from '@clerk/nextjs'
import {
  RocketIcon,
  VideoIcon,
  CheckCircle,
  Code2Icon,
  GanttChartIcon,
  Database,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/nextjs'

export default function HomePage() {
  const { isSignedIn } = useUser()

  if (isSignedIn) {
    return <Home />
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <RocketIcon className="h-5 w-5 text-foreground" />
              <span className="text-sm font-light tracking-widest">
                CODETRIX PLATFORM
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              The Future of Technical Interviews
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A sophisticated platform engineered for enterprises to streamline
              the technical interview process, evaluate talent efficiently, and
              make data-driven hiring decisions.
            </p>
            <div className="pt-4">
              <SignInButton mode="modal">
                <Button className="px-8 py-6 text-base font-medium">
                  Get Started
                </Button>
              </SignInButton>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full blur-3xl opacity-20"></div>
            <div className="relative z-10 flex items-center justify-center">
              <div className="bg-card p-16 border border-border rounded-full relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-full"></div>
                <Code2Icon className="h-32 w-32 text-primary" />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-card p-6 border border-border rounded-full">
                <GanttChartIcon className="h-10 w-10 text-primary" />
              </div>
              <div className="absolute -top-10 -left-4 bg-card p-4 border border-border rounded-full">
                <Database className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight">
              Perfect Interview Platform for IT Startups
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed for technology companies that need to thoroughly assess technical skills and engineering excellence in their IT hiring process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2Icon className="h-10 w-10 text-primary" />,
                title: 'Coding Interviews',
                description:
                  'Interactive coding environment with real-time collaboration and support for multiple programming languages.',
              },
              {
                icon: <VideoIcon className="h-10 w-10 text-primary" />,
                title: 'Video Conferencing',
                description:
                  'High-quality video calls with screen sharing capabilities for seamless technical interviews.',
              },
              {
                icon: <CheckCircle className="h-10 w-10 text-primary" />,
                title: 'Recording & Evaluation',
                description:
                  'Automatically record interviews and evaluate candidates with comprehensive assessment tools.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-xl border border-border hover:border-primary/20 transition-all"
              >
                <div className="bg-card p-3 rounded-lg w-fit mb-4 border border-border">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
