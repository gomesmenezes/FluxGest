import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { LogOut } from 'lucide-react';


interface titleBarProps {
    labelNav: string;

}

export default function TitleBar({ labelNav }: titleBarProps) {
    return (
        <header className="title-bar flex h-32 px-10 bg-gray-200 items-center justify-between">
            <h1 className="m-0">{labelNav}</h1>
            <nav>
                <Button className="bg-[var(--bg-color-main)]">
                    
                    Logout <LogOut className="ml-2 h-4 w-4" /> 
                </Button> 
            </nav>
        </header>
    )
}