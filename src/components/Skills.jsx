const skills = [
    {
        name: 'JavaScript',
        desc: 'Program Language ',
        imageUrl:
            'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png',
    },
    {
        name: 'Node.js',
        desc: 'Runtime Environment',
        imageUrl:
            'https://cdn.iconscout.com/icon/free/png-256/free-node-js-1-1174935.png?f=webp',
    },
    {
        name: 'NextJS',
        desc: 'React Framework',
        imageUrl:
            'https://www.datocms-assets.com/75941/1657707878-nextjs_logo.png',
    },
    {
        name: 'MySQL',
        desc: 'SQL Database',
        imageUrl:
            'https://cdn-icons-png.flaticon.com/512/5968/5968313.png',
    },
    {
        name: 'Tailwind CSS',
        desc: 'CSS Framework',
        imageUrl:
            'https://files.raycast.com/sjxs3pxsc6k63ju0fzv8l3cu4v90',
    },
]

export default function SkillsComponent() {
    return (
        <div className="py-24 sm:py-32">
            <span className={"ml-16 hidden md:block absolute bg-gradient-to-b to-green-500 from-green-500 bg-green-500 h-screen w-1"}></span>

            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">My Skills</h2>
                    <p className="mt-6 text-lg leading-8 text-white">
                        Languages, frameworks & other things that I am intensively involved with
                    </p>
                </div>
                <ul role="list" className="grid gap-x-8 md:ml-10 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {skills.map((skill) => (
                        <li key={skill.name}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-16 w-16" src={skill.imageUrl} alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-white">{skill.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-green-500">{skill.desc}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
