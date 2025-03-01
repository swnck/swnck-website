import {Typewriter} from "react-simple-typewriter";

export default function Hero() {
    return (
        <div className="relative w-full h-full lg:h-screen">
            {/* Content */}
            <div className="absolute top-1/2 left-[8%] -translate-y-1/2">
                <p className="font-[VALORANT-FONT] mt-5 mb-[10px] text-[55px] lg:text-[100px]">
                    Nick Schweizer
                </p>
                <p className="mb-[50px] text-[20px] lg:text-[30px]">
                    <Typewriter
                        words={[
                            "PHP & Java Developer.",
                            "Trainee.",
                            "Creative.",
                            "Germany, Lower Saxony",
                        ]}
                        loop={0}
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1500}
                    />
                </p>
            </div>
        </div>
    )
}
