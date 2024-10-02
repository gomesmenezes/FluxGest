import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface titleBarProps {
    labelNav: string;
    nameUser: string;
}

export default function TitleBar({ labelNav, nameUser }: titleBarProps) {
    return (
        <header className="title-bar flex h-32 px-[68px] border-b-2 border-gray-200 items-center justify-between">
            
            <h1 className="m-0">{labelNav}</h1>

            <nav className="flex items-center gap-2">

                <Button className="gap-2" variant="outline">
                    <Avatar className="w-6 h-6 "> 
                        <AvatarImage src="https://avatars.githubusercontent.com/u/142457990?s=400&u=8e952a59e833927839056c50a6cab0e514e07688&v=4" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    {nameUser}
                </Button>

                <Button className="bg-[var(--bg-color-main)]">
                    Logout <LogOut className="ml-2 h-4 w-4" />
                </Button>
                
            </nav>

        </header>
    )
}