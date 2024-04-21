import Link from "next/link";
import Image from "next/image";

import BR from "../../public/flag/BR.svg"
import AR from "../../public/flag/AR.svg"
import US from "../../public/flag/US.svg"

export default function Header() {
    return(
        <header className="flex flex-row justify-end min-w-full min-h-full items-center select-none">
            <nav className="flex flex-row gap-2.5">
                <Link href={'/pt'}><Image className="w-8 h-8 p-1" src={BR} alt=""/></Link>
                <Link href={'/es'}><Image className="w-8 h-8 p-1" src={AR} alt=""/></Link>
                <Link href={'/en'}><Image className="w-8 h-8 p-1" src={US} alt=""/></Link>
            </nav>
        </header>
    )
}