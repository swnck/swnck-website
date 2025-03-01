'use client'

import { useEffect, useState } from 'react';
import HeroComponent from "@/components/Hero";
import FooterComponent from "@/components/Footer";
import AboutComponent from "@/components/AboutMe";
import ContactComponent from "@/components/Contact";
import SkillsComponent from "@/components/Skills";

export default function Home() {
    const [bgColor, setBgColor] = useState('bg-white');

    useEffect(() => {
        window.addEventListener("load", () => {
            window.scrollTo({ top: 0 });
        })
        
        const checkScrollPos = () => {
            if (window.scrollY >= 400) {
                setBgColor('bg-zinc-950 text-gray-100 transition-colors duration-500');
            } else {
                setBgColor('bg-white text-zinc-950 transition-colors duration-500');
            }
        };

        window.addEventListener('scroll', checkScrollPos);
    }, []);

    return (
        <div className={bgColor}>
            <HeroComponent />

            <AboutComponent />

            <SkillsComponent />

            <ContactComponent />

            <FooterComponent />
        </div>
    )
}