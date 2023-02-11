'use client';
import Footer from '@/components/Layout/Footer/Footer'
import Header from '@/components/Layout/Header/Header'
import './globals.css'
import Head from './head'
import "./index.scss"
import { ThemeProvider } from 'next-themes'
import ThemeChanger from '@/components/Common/ThemeChanger';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='body-bg'>
      <ThemeProvider defaultTheme="dark">
          <Header />
          
          {children}
          <Footer/>
        </ThemeProvider>
        </body>
    </html>
  )
}
