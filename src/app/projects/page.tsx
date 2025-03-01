"use client"

import Navbar from "@/components/Navbar"
import Image from "next/image"
import Link from "next/link"

//const projects = [
//    {
//        id: 1,
//        label: "Project 1",
//        description: "Description of Project 1",
//        href: "/",
//        date: "01.03.2025",
//        image: "/placeholder.svg?height=300&width=400",
//    },
//    {
//        id: 2,
//        label: "Project 2",
//        description: "Description of Project 2",
//        href: "#about",
//        date: "01.03.2025",
//        image: "/placeholder.svg?height=300&width=400",
//    },
//    {
//        id: 3,
//        label: "Project 3",
//        description: "Description of Project 3",
//        href: "/projects",
//        date: "01.03.2025",
//        image: "/placeholder.svg?height=300&width=400",
//    },
//]

const projects = []

export default function Projects() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center relative w-full min-h-screen bg-black text-white py-20">
                <div className="absolute top-24 left-[5%] md:left-[10%]">
                    <p className="font-[VALORANT-FONT] text-[55px] lg:text-[100px]">Projects</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] max-w-7xl mt-32">
                    {projects.length > 0 ? (
                        projects.map((project) => (
                            <div key={project.id} className="flex flex-col rounded-3xl border-2 border-white overflow-hidden">
                                <div className="relative w-full h-64 bg-black">
                                    <Image src={project.image || "/placeholder.svg"} alt={project.label} fill className="object-cover" />
                                </div>

                                <div className="flex justify-between items-center p-4 border-t border-white">
                                    <Link href={project.href} className="text-xl font-medium hover:text-gray-300 transition-colors">
                                        {project.label}
                                    </Link>
                                    <span className="text-sm">{project.date}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-xl">Nothing to see here right now, come back later.</p>
                    )}
                </div>
            </div>
        </>
    )
}