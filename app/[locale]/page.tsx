'use client';

import React, { useState } from "react";
import Image from "next/image";
import { salvarEmail } from "@/utils/salvarEmail";
import { useTranslations } from "next-intl";

import Communication from "../../public/illustration/communication.png";

import Header from "@/components/Header";
import AlertSucess from "@/components/AlertSucess";

export default function Index() {
  const t = useTranslations();

  const [email, setEmail] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    const added = await salvarEmail(email);

    if (added) {
      setEmail("");
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    }
  };

  return (
    <div className="mx-auto flex flex-col justify-around items-end min-h-screen max-w-screen-xl px-4 py-6 md:px-8 md:py-8 lg:px-12 lg:py-12 gap-16 lg:gap-0">
      <AlertSucess showNotification={showNotification}></AlertSucess>
      <Header/>
      <main className="grid grid-cols-1 lg:grid-cols-2 min-w-full min-h-full justify-center items-center gap-20">
        <div className="flex flex-col col-span-1 gap-12">
          <span className="flex flex-col gap-3">
            <h1 className="lg:text-8xl text-6xl font-black tracking-tighter">NewsTech</h1>
            <h2 className="text-xl font-medium tracking-wide leading-tight">{t('Heros.description')}</h2>
          </span>
          <form onSubmit={handleSubmit} className="bg-transparent lg:bg-white grid grid-rows-1 lg:grid-cols-3 w-full font-sans p-1.5 gap-1.5 lg:shadow-form shadow-none select-none rounded-lg">
            <input id="email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="bg-white lg:bg-transparent text-tuatara placeholder:text-star-dust text-sm border border-mercury lg:border-none font-normal col-span-2 row-span-1 px-3.5 py-2.5 tracking-wide outline-none rounded-lg" placeholder={t('Form.placeholder')} required></input>
            <button type="submit" className="bg-sunglow hover:bg-selective-yellow text-brown-pod text-base duration-300 font-bold px-3.5 py-2.5 col-span-2 lg:col-span-1 row-span-1 rounded-lg">{t('Form.subscribe')}</button>
          </form>
        </div>
        <Image quality={75} className="col-span-1 w-full select-none" src={Communication} alt=""/>
      </main>
    </div>
  );
}