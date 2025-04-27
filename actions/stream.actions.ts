'use server'

import { currentUser } from '@clerk/nextjs/server'
import { StreamClient } from '@stream-io/node-sdk'

export const streamTokenProvider = async () => {
    const user = await currentUser()  // Get the current user from Clerk
    
    if (!user)  return  // Handle unauthenticated user
    
    const streamClient = new StreamClient(  
    process.env.NEXT_PUBLIC_STREAM_API_KEY!,    
    process.env.STREAM_SECRET_KEY!
    )   // Initialize Stream client with API key and secret key
    
    const token = streamClient.generateUserToken({ user_id: user.id })

    return token
}
