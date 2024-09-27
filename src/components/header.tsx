import Image from 'next/image';
import Button from './button';

export default function Header() {
    return (
        <div className="header text-white flex justify-between items-center mx-auto max-w-7xl">
            <div>
                <Image src="/img/logo-flux.png" alt="Logo FLux" width={200} height={100} />
            </div>

            <nav className="nav font-semibold">
                <ul className="flex space-x-4">
                    <li className='hover:opacity-80'><a href="#">Home</a></li>
                    <li className='hover:opacity-80'><a href="#">About</a></li>
                    <li className='hover:opacity-80'><a href="#">Contact</a></li>
                </ul>
            </nav>

            <Button />
        </div>
    );
}