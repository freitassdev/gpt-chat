// import { useState } from 'react'
import './App.css'
import { ThemeProvider } from "@/components/providers/theme-provider"


import Header from "@/components/custom/header"
import { SideMenu } from './components/custom/sidemenu';
import { Chat } from '@/components/custom/chat';
function App() {

  return (
    <>
      <div className="p-5">
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Header />
          <div className="flex flex-col md:flex-row gap-10 h-auto">
            <SideMenu />
            <Chat />
          </div>
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
