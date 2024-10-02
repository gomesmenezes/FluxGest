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
        <header className="title-bar flex h-32 px-10 bg-gray-200 items-center justify-between">
            <h1 className="m-0">{labelNav}</h1>
            <nav className="flex items-center gap-2">
                <Button className="gap-2" variant="outline">
                    <Avatar className="w-6 h-6 "> {/* Ajuste o tamanho aqui */}
                        <AvatarImage src="https://github.com/shadcn.png" />
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