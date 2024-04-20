import { Urbanist, Open_Sans } from "next/font/google";

export const urbanist = Urbanist({ 
    display: "swap",
    subsets: ["latin"],
    variable: "--font-urbanist",
    preload: true
});

export const openSans = Open_Sans({ 
    display: "swap",
    subsets: ["latin"],
    variable: "--font-open-sans",
    preload: true
});