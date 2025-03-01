import { AvertaBold, gabarito } from "@/Fonts";


export default function HeroComponent() {
    return (
        <div className={"h-screen"}>
            <span className={"ml-16 absolute bg-gradient-to-b from-white to-green-500 bg-green-500 h-screen w-1 animate-line-down"}></span>

            <div className={"right-1/4 top-1/3 absolute w-8/12 h-full leading-none right-"}>
                <h1 className={AvertaBold.className + " text-8xl md:text-9xl -rotate-90 md:rotate-0 absolute md:right-0 md:bottom-0 md:relative -right-1/2 bottom-1/2"}>
                    Luca
                    <span className={"text-green-500"}>.</span>
                </h1>
                <h2 className={AvertaBold.className + " text-8xl hidden md:block"}>
                    I'm a web developer.
                </h2>
            </div>
        </div>
    )
}
