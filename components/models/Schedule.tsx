'use client'

import Loader from './Loader'
import { useUserRole } from '@/hooks/UserRole'
import { useRouter } from 'next/navigation'
import InterviewSchedule from './InterviewSchedule'

function Schedule () {
    const router = useRouter()
    const {isInterviewer, isLoading} = useUserRole()

    if (isLoading) {
        return <Loader />
    }

    if (!isInterviewer) {
        router.push('/')
    }

    return <InterviewSchedule />
}

export default Schedule