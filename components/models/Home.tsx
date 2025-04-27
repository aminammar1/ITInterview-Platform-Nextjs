'use client'

import ActionCard from './ActionCard'
import { QUICK_ACTIONS } from '@/constants/data'
import { useUserRole } from '@/hooks/UserRole'
import { useQuery } from 'convex/react'
import { useState } from 'react'
import { api } from '@/convex/_generated/api'
import { useRouter } from 'next/navigation'
import MeetingModal from './MeetingModal'
import { RocketIcon } from 'lucide-react'
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
      <div className="rounded-lg border border-border hover:border-primary/20  p-8 shadow-xl mb-10 relative z-10">
        <div className="flex items-center gap-2">
          <RocketIcon className="h-6 w-6 text-white" />
          <div className="font-sans text-sm text-gray-300">
            CodeTrix Enterprise Suite
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white mt-3 tracking-tight">
          Welcome to CodeTrix
        </h1>
        <p className="text-gray-300 mt-2 font-light">
          {isInterviewer
            ? 'Streamlined technical interviews for modern enterprises. Evaluate talent efficiently.'
            : 'Prepare to showcase your skills. Your opportunity awaits.'}
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
                ? 'Join Interview Session'
                : 'Start New Interview'
            }
            isJoinMeeting={modalType === 'join'}
          />
        </>
      ) : (
        <>
          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Upcoming Interviews
            </h1>
            <p className="text-gray-300 mt-1">
              Your scheduled interview sessions are listed below.
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
              <div className="text-center py-12 text-gray-300 border border-border hover:border-primary/20 transition-all rounded-lg bg-black/50">
                You have no scheduled interviews at this time.
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
