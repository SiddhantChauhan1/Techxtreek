import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import '../globals.css'
import Bottombar from '@/components/shared/Bottombar'
import RightSidebar from '@/components/shared/RightSidebar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import Topbar from '@/components/shared/Topbar'

export const metadata = {
  title: 'Tecxtreek',
  description: 'Social Media app made with next js'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
        <html lang ="en">
            <body className={'${inter.className} bg-dark-1'}>
            <Topbar />
            <main className='flex flex-row'>
              <LeftSidebar />
              <section className='main-container'>
                <div className='w-full max-w-4xl'>
                  {children}
                </div>
              </section>
              <RightSidebar />
            </main>
            <Bottombar />
            </body>
        </html>
    </ClerkProvider>
  )
}
