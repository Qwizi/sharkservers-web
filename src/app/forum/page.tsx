import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import ForumMain from '@/components/Forum/ForumMain'

export default async function Home() {
  return (
    <main>
      <ForumMain/>
    </main>
  )
}
