import StreamVideoProvider from "@/providers/StreamProvider"


function Layout({ children }: { children: React.ReactNode }) {
    return <StreamVideoProvider>{children}</StreamVideoProvider>
}

export default Layout