import { useState, useEffect } from "react";

const links = [
    { name: 'Discord', href: 'https://discord.com/users/778363686716440586' },
    { name: 'GitHub', href: 'https://github.com/swnck' },
    { name: 'Twitter', href: 'https://x.com/nick_swz' }
];

const stats = [
    { name: 'Programmed since', value: '5 years' },
    { name: 'Git Repositories', value: '10+' },
];

export default function AboutComponent() {
    const [age, setAge] = useState(0);

    useEffect(() => {
        const birthDate = new Date(2008, 0, 2); // January 2, 2008
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        setAge(age);
    }, []);

    return (
        <div>
            <span className={"ml-16 hidden md:block absolute bg-gradient-to-b to-blue-500 from-blue-500 bg-green-500 h-screen w-1"}></span>

            <div className="relative isolate py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className={"text-5xl font-bold tracking-tight text-white sm:text-6xl"}>About me</h2>
                        <p className="mt-6 text-lg leading-8 text-white">
                            Hey, my name is Nick, I'm {age} years old and I'm currently completing training as an IT specialist for system integration
                        </p>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            {links.map((link) => (
                                <a className={"hover:text-blue-500"} target={"_blank"} key={link.name} href={link.href}>
                                    {link.name} <span aria-hidden="true">&rarr;</span>
                                </a>
                            ))}
                        </div>
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            {stats.map((stat) => (
                                <div key={stat.name} className="flex flex-col-reverse">
                                    <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                                    <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
}