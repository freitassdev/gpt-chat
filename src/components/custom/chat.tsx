import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle, Send, Aperture } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { useState, useRef } from 'react'
import { useAutosizeTextArea } from "@/lib/utils"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Chat() {
    const [message, setMessage] = useState<string>('');
    const [showAlert, setShowAlert] = useState<boolean>(true);
    const [lestMessage, setLestMessage] = useState<string>('');
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    useAutosizeTextArea(textAreaRef.current, message);
    async function handleSendMessage() {
        const messagesContainer = document.getElementById('messages-container');
        if (messagesContainer) {
            let innerHTML = messagesContainer.innerHTML;
            messagesContainer.innerHTML = `
                <div class="max-w-3xl mx-auto mt-5">
                    <div class="flex flex-row gap-3 items-center">
                        <img class="w-7 h-7 rounded-full" src="https://github.com/shadcn.png"/>
                        <p class="font-semibold mt-[-10px]">Você:</p>
                    </div>
                    <div>
                        <p class="text-md leading-6 ml-[40px] mt-[-5px]" style="font-family: Inter, sans-serif">${message}</p>
                    </div>
                </div>
            `;
            messagesContainer.innerHTML += innerHTML;
        }
        

        if (textAreaRef.current) {
            textAreaRef.current.value = ''
        }
        setLestMessage('user');
        setShowAlert(false);
        setMessage('');
        console.log('msg enviada', lestMessage)
    }

    return (
        <div className="w-full max-w-full md:max-w-[76%] h-[80vh] md:mt-4 border rounded-lg p-5 flex flex-col">
            <div className="overflow-y-scroll w-full" id="messages-container">

                <div className="max-w-3xl mx-auto mt-5">
                    <div className="flex flex-row gap-3 items-center">
                        <Aperture className="w-7 h-7" />
                        <p className="font-semibold mt-[-10px]">Easy GPT:</p>
                    </div>
                    <div>
                        <p className="text-md ml-[40px] mt-[-5px] leading-6 " style={{
                            fontFamily: 'Inter, sans-serif',
                        }}>
                            O descobrimento do Brasil ocorreu em 22 de abril de 1500, quando Pedro Álvares Cabral avistou a terra que se tornaria o país. Essa descoberta fazia parte das explorações marítimas portuguesas durante a Era dos Descobrimentos. Inicialmente, Portugal não percebeu a extensão do território, mas o Brasil eventualmente se tornou uma colônia vital para o país. A data marca o início de eventos históricos significativos, como o período colonial, a exploração do pau-brasil e o encontro com as populações indígenas. O Dia do Descobrimento do Brasil, celebrado em 22 de abril, destaca a importância desse marco na história e cultura brasileiras.</p>
                    </div>
                </div>
            </div>
            <div className={`${showAlert ? '' : 'hidden'} hidden transition-[display] duration-300 ease-out max-w-[535px] mx-auto flex items-center justify-center`}>
                <Alert className="bg-primary">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Alerta de Expiração de Sessão.</AlertTitle>
                    <AlertDescription>
                        A sessão expira ao fechar a página, levando à perda das mensagens do chat.
                    </AlertDescription>
                </Alert>
            </div>
            <div className="mt-auto flex flex-row items-center pr-3 py-3 gap-2 border rounded-lg ">
                <Textarea
                    className="px-4 max-h-[100px] resize-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-0 border-0"
                    maxLength={2000}
                    placeholder="Digite sua mensagem aqui."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    ref={textAreaRef}
                    rows={1}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault()
                            if (message.trim().length > 0) {
                                handleSendMessage()
                            }
                        }
                    }} />
                <Button onClick={handleSendMessage} size="icon"><Send className="h-5 w-5" /></Button>
            </div>
        </div>
    )
}
