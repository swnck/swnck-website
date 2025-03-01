const skills = [
    {
        name: 'Java',
        desc: 'Program Language ',
        imageUrl:
            'https://static-00.iconduck.com/assets.00/java-icon-378x512-w60vlu77.png',
    },
    {
        name: 'Spring Boot',
        desc: 'Java Framework',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Spring_Boot.svg/220px-Spring_Boot.svg.png',
    },
    {
        name: 'Docker',
        desc: 'Containerization Platform',
        imageUrl:
            'https://static-00.iconduck.com/assets.00/docker-icon-512x370-5593ilur.png',
    },
    {
        name: 'PHP',
        desc: 'Script Language',
        imageUrl:
            'https://static-00.iconduck.com/assets.00/composer-original-icon-194x256-d487nkpv.png',
    },
    {
        name: 'MySQL',
        desc: 'SQL Database Management Systems',
        imageUrl:
            'https://cdn-icons-png.flaticon.com/512/5968/5968313.png',
    },
    {
        name: 'Linux',
        desc: 'Operating System',
        imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/150px-Tux.svg.png',
    },
]

const SkillsComponent = () => {
    return (
        <div className="relative min-h-screen flex items-center py-16 sm:py-24">
      <span
          className={"ml-16 hidden md:block absolute bg-gradient-to-b to-blue-500 from-blue-500 bg-blue-500 h-full w-1"}
      ></span>

            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-12 sm:gap-y-20 px-6 lg:px-8 xl:grid-cols-3 w-full">
                <div className="max-w-2xl">
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white sm:text-6xl">My Skills</h2>
                    <p className="mt-6 text-base sm:text-lg leading-8 text-white">
                        Languages, frameworks & other things that I am intensively involved with
                    </p>
                </div>
                <ul
                    role="list"
                    className="grid gap-x-6 sm:gap-x-8 md:ml-10 gap-y-8 sm:gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
                >
                    {skills.map((skill) => (
                        <li key={skill.name}>
                            <div className="flex items-center gap-x-4 sm:gap-x-6">
                                <img
                                    className="h-12 w-12 sm:h-16 sm:w-16"
                                    src={skill.imageUrl || "/placeholder.svg"}
                                    alt={`${skill.name} logo`}
                                />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-white">{skill.name}</h3>
                                    <p className="text-sm font-semibold leading-6 text-blue-500">{skill.desc}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SkillsComponent

