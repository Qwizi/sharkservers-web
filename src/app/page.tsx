import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import ForumMain from '@/components/Forum/ForumMain'
import HeroSection from '@/components/Home/HeroSection'
import HomeMain from '@/components/Home/HomeMain'
import TopCreatorTwo from '@/components/Home/TopCreators'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HomeMain />
    </>
  )
}
