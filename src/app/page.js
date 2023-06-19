import Image from 'next/image'
import CoverPage from '../../components/CoverPage'
import IntroToPages from '../../components/IntroToPages'
export default function Home() {
  return (
    <main>
     <CoverPage/>
     <IntroToPages/>
    </main>
  )
}
