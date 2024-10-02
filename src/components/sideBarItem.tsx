import { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface SidebarItemProps {
    Icon: LucideIcon;
    label: string;     
    href: string;      
}

export default function SidebarItem({ Icon, label, href }: SidebarItemProps) {
    return (
        <div className="flex flex-row items-center gap-2 h-14 text-base">
            <Link href={href}>
                <Icon size={28} /> 
            </Link>
            <Link href={href}>
                {label}
            </Link>
        </div>
    );
}
