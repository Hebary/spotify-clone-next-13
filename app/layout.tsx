import './globals.css'
import { Figtree } from 'next/font/google'
import { Sidebar } from '@/ui'
import { SupabaseProvider, UserProvider, ModalProvider } from '@/providers'

const figtree = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify Clone',
  description: 'Listen to music',
}

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return (
    <html lang="en">
        <body className={figtree.className}>
          <SupabaseProvider>
            <UserProvider>
              <ModalProvider/>
              <Sidebar>
                {children}
              </Sidebar>
            </UserProvider>
          </SupabaseProvider>
        </body>
    </html>
  )
}
