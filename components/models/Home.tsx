'use client'

import ActionCard from './ActionCard'
import { QUICK_ACTIONS } from '@/constants/data'
import { useUserRole } from '@/hooks/UserRole'
import { useQuery } from 'convex/react'
import { useState } from 'react'
import { api } from '@/convex/_generated/api'
import { useRouter } from 'next/navigation'
import MeetingModal from './MeetingModal'
import { Terminal } from 'lucide-react'
import MeetingCard from './MeetingCard'

export default function Home() {
  const router = useRouter()
  const { isInterviewer } = useUserRole()
  const interviews = useQuery(api.interviews.getMyInterviews)
  const [showModal, setShowModal] = useState(false)
  const [modalType, setModalType] = useState<'start' | 'join'>()

  const handleQuickAction = (title: string) => {
    switch (title) {
      case 'New Call':
        setModalType('start')
        setShowModal(true)
        break
      case 'Join Interview':
        setModalType('join')
        setShowModal(true)
        break
      default:
        router.push(`/${title.toLowerCase()}`)
    }
  }

  return (
    <div className="container max-w-7xl mx-auto p-6 relative">
      {/* welcome section */}
      <div className="rounded-lg bg-black/80 border border-[#00ff41]/30 p-6 shadow-sm mb-10 relative z-10">
        <div className="flex items-center gap-2">
          <Terminal className="h-6 w-6 text-[#00ff41]" />
          <div className="font-mono text-xs text-[#00ff41]/70">
            CodeTrix System v1.0
          </div>
        </div>
        <h1 className="text-4xl font-bold text-[#00ff41] mt-2">
          Welcome to the CodeTrix
        </h1>
        <p className="text-[#00ff41]/80 mt-2 font-mono">
          {isInterviewer
            ? '// Access the system. Control the codetrix. Evaluate the candidates.'
            : "// You've entered the matrix. Your trials await."}
        </p>
      </div>

      {isInterviewer ? (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {QUICK_ACTIONS.map((action) => (
              <ActionCard
                key={action.title}
                action={action}
                onClick={() => handleQuickAction(action.title)}
              />
            ))}
          </div>

          <MeetingModal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            title={
              modalType === 'join'
                ? 'Enter the CodeTrix '
                : 'Initialize Simulation'
            }
            isJoinMeeting={modalType === 'join'}
          />
        </>
      ) : (
        <>
          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-[#00ff41] font-mono">
              Interviews <span className="animate-pulse">_</span>
            </h1>
            <p className="text-[#00ff41]/70 mt-1 font-mono">
              // You have entered the codetrix . Your interview await.
            </p>
          </div>
          <div className="mt-8 relative z-10">
            {interviews && interviews.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {interviews.map((interview) => (
                  <MeetingCard key={interview._id} interview={interview} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-[#00ff41]/70 font-mono border border-dashed border-[#00ff41]/30 rounded-lg bg-black/50">
                [System]: You have no scheduled interviews in the Codetrix
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
