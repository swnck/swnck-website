export default function ContactComponent() {
    return (
        <div className="relative isolate overflow-hidden">
            <span className={"ml-16 hidden md:block absolute bg-gradient-to-b from-green-500 to-green-500 h-screen w-1"}></span>

            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Get in Contact with me
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                        Would you like to get in touch with me? It's best to write to me via Discord
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            target={"_blank"}
                            href="https://discord.com/users/777948686185529364"
                            className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                            Discord
                        </a>
                        <a target={"_blank"} href="mailto:straeter.luca@gmail.com" className="text-sm font-semibold leading-6 text-white">
                            Email <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
