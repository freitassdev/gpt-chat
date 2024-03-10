import React from 'react';
import { ModeToggle } from "@/components/ui/mode-toggle"
import { Aperture, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const Header: React.FC = () => {
    return (
        <div className="w-full h-16 flex flex-row items-center px-5 pb-5 border-b">
            <div className="header-logo flex flex-row gap-2">
                <Aperture className="h-9 w-9" />
                <h1 className="text-2xl font-semibold tracking-tight">Easy GPT</h1>
            </div>
            <div className="flex flex-row items-center justify-center gap-2 ml-auto">
                <Button>Button</Button>
                <Button variant="outline" size="icon" onClick={() => window.open('https://github.com/freitassdev/gpt-chat', '_blank')}>
                    <Github className="h-[1.2rem] w-[1.2rem]" /></Button>
                <ModeToggle />
            </div>
        </div>
    );
};

export default Header;