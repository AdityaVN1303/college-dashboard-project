import Image from 'next/image'
import CoverPage from '../../components/CoverPage'
import IntroToPages from '../../components/IntroToPages'
import ChatBot from '../../components/ChatBot'
export default function Home() {
  return (
    <main>
     <ChatBot/>
     <CoverPage/>
     <IntroToPages/>
    </main>
  )
}
