// import { useState } from 'react'
import { Button } from "@/components/ui/button"
import './App.css'
import { ThemeProvider } from "@/components/providers/theme-provider"
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, Aperture } from "lucide-react"
function App() {

  return (
    <>
      <div className="p-5">
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <div className="header">
            <div className="header-logo flex flex-row gap-2">
              <Aperture className="h-9 w-9" />
              <h1 className="text-2xl font-semibold tracking-tight">Easy GPT</h1>
            </div>
            <div className="header-alert mx-auto flex items-center justify-center">
              <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Alerta de Expiração de Sessão.</AlertTitle>
                <AlertDescription>
                  A sessão expira ao fechar a página, levando à perda das mensagens do chat.
                </AlertDescription>
              </Alert>
            </div>
            <div className="header-buttons flex flex-row items-center justify-center   gap-1 ml-auto">
              <Button>Button</Button>
              <ModeToggle />
            </div>
          </div>
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
