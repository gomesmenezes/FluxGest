import { Headphones, LayoutDashboard, HandCoins, ArrowDownUp, Forklift, User, Settings } from 'lucide-react';
import SidebarItem from '@/components/sideBarItem';
import TitleBar from '@/components/titleBar';

export default function DashBoard() {
    return (
        <div className="h-screen text-white flex">

            <aside className="flex flex-col w-72 py-8 px-9 text-white">

                <nav className='nav-primary border-b border-white border-opacity-25 pb-2'>
                    <SidebarItem Icon={LayoutDashboard} label="Dashboard" href="#" />
                    <SidebarItem Icon={HandCoins} label="Precificação" href="#" />
                    <SidebarItem Icon={ArrowDownUp} label="Fluxo de caixa" href="#" />
                    <SidebarItem Icon={Forklift} label="Cadastro" href="#" />
                    <SidebarItem Icon={Headphones} label="Suporte" href="#" />
                </nav>

                <nav className='nav-second'>
                    <SidebarItem Icon={User} label="Meu perfil" href="#" />
                    <SidebarItem Icon={Settings} label="Configurações" href="#" />
                </nav>

            </aside>

            <main className="flex-1 bg-slate-50 text-black">
                <TitleBar labelNav={'DashBoard  '}/>
            </main>
        </div>
    );
}
