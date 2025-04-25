'use client'

import Loader from './Loader'
import { useState } from 'react'
import MeetingRoom from './MeetingRoom'
import MeetingSetup from './MeetingSetup'
import useGetCallById from '@/hooks/useGetCallByID'
import { useUser } from '@clerk/nextjs'
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk'
import { useParams } from 'next/navigation'

function Meeting() {
    const {id} = useParams()
    const { user } = useUser()
    const {call , isCallLoading} = useGetCallById(id)
    const [isSetupComplete, setIsSetupComplete] = useState(false)

    if (!user || isCallLoading) return <Loader />

    if (!call) {
        
        return (
            <div className="h-screen flex items-center justify-center">
            <p className="text-2xl font-semibold">Meeting not found</p>
            </div>
        )
    }

        return (
            <StreamCall call={call}>
                <StreamTheme>
                {!isSetupComplete ? (
                    <MeetingSetup onSetupComplete={() => setIsSetupComplete(true)} />
                ) : (
                    <MeetingRoom />
                )}
                </StreamTheme>
            </StreamCall>
            )
        }

export default Meeting
