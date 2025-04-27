    'use client'

    import { streamTokenProvider } from '@/actions/stream.actions'
    import { StreamVideoClient, StreamVideo, TokenProvider } from '@stream-io/video-react-sdk'
    import { useUser } from '@clerk/nextjs'
    import { ReactNode, useEffect, useState } from 'react'


    const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
        const [streamVideoClient, setStreamVideoClient] = useState<StreamVideoClient>()
        const { user, isLoaded } = useUser()
    
    useEffect(() => {
        if (!isLoaded || !user) return
    
        const client = new StreamVideoClient({
        apiKey: process.env.NEXT_PUBLIC_STREAM_API_KEY!,
        user: {
            id: user?.id,
            name: user?.firstName || '' + ' ' + user?.lastName || '' || user?.id,
            image: user?.imageUrl,
        },
        tokenProvider: async () => {
            const token = await streamTokenProvider();
            if (!token) throw new Error('Failed to get token');
            return token;
        },
        })
        setStreamVideoClient(client)
    }, [user, isLoaded])
    
    // If user is not loaded or not signed in, just render children without the Stream provider
    if (!user && isLoaded) {
        return <>{children}</>
    }
    
    // If we're waiting for the client to be created but the user is logged in
    if (!streamVideoClient && user) {
        return (
        <div className="h-[calc(100vh-4rem-1px)] flex items-center justify-center bg-black">
            <div className="flex flex-col items-center space-y-4">
            <div className="h-8 w-8 animate-spin rounded-full border-t-2 border-b-2 border-white"></div>
            <p className="text-white text-sm">
                Initializing secure connection...
            </p>
            </div>
        </div>
        )
    }
    
    // If client is ready and user is authenticated
    return streamVideoClient ? (
        <StreamVideo client={streamVideoClient}>{children}</StreamVideo>
    ) : (
        <>{children}</>
    )
        }
    export default StreamVideoProvider