
import Image from "next/image";
import Link from "next/link";

import Communication from "../public/illustration/communication.png"

import BR from "../public/flag/BR.svg"
import AR from "../public/flag/AR.svg"
import US from "../public/flag/US.svg"

export default function Home() {
  return (
    <div className="mx-auto flex flex-col justify-around items-center min-h-screen max-w-screen-xl px-4 py-6 md:px-8 md:py-8 lg:px-12 lg:py-12 gap-12 lg:gap-0">
      <header className="flex flex-row justify-end min-w-full min-h-full items-center select-none">
        <nav className="flex flex-row gap-2.5">
          <Link href={'/'}><Image className="w-8 h-8 p-1" src={BR} alt=""/></Link>
          <Link href={'/'}><Image className="w-8 h-8 p-1" src={AR} alt=""/></Link>
          <Link href={'/'}><Image className="w-8 h-8 p-1" src={US} alt=""/></Link>
        </nav>
      </header>
      <main className="grid grid-cols-1 lg:grid-cols-2 min-w-full min-h-full justify-center items-center gap-20">
        <div className="flex flex-col col-span-1 gap-12">
          <span className="flex flex-col gap-3">
            <h1 className="lg:text-8xl text-6xl font-black tracking-tighter">NewsTech</h1>
            <h2 className="text-xl font-medium tracking-wide leading-tight">Receba as últimas notícias, tendências e conselhos de especialistas diretamente na sua caixa de entrada</h2>
          </span>
          <form className="bg-transparent lg:bg-white grid grid-rows-1 lg:grid-cols-3 w-full font-sans p-1.5 gap-1.5 lg:shadow-form shadow-none select-none rounded-lg">
            <input className="bg-white lg:bg-transparent text-tuatara placeholder:text-star-dust text-sm border border-mercury lg:border-none font-normal col-span-2 row-span-1 px-3.5 py-2.5 tracking-wide outline-none rounded-lg" placeholder="Seu endereço de e-mail..."></input>
            <button className="bg-sunglow hover:bg-selective-yellow text-brown-pod text-base duration-300 font-bold px-3.5 py-2.5 col-span-2 lg:col-span-1 row-span-1 rounded-lg">Inscreva-se</button>
          </form>
        </div>
        <Image quality={75} className="col-span-1 w-full select-none" src={Communication} alt=""/>
      </main>
    </div>
  );
}
