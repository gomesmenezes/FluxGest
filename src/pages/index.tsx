import Header from "@/components/header";
import Main from "@/components/main";
import Image from 'next/image';

export default function Home() {
  return (
    <div className="body">
      <Header />
      <Main />

      <div className="relative w-screen h-screen mt-36">
        <Image
          src="/img/screen.png"
          alt="Imagem de fundo"
          layout="fill"
          objectFit="fill"
          priority
        />
      </div>

    </div>
  );
}
