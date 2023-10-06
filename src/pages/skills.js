import Footer from "@/components/footer"
import Image from "next/image"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench, faDatabase, faGem, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import { faCss3, faJs, faPython } from "@fortawesome/free-brands-svg-icons";

export default function Skills() {
    const [skillGenres] = useState([
        {
            title: 'CERTIFICATIONS',
            skills: [
                {icon: faLanguage, title: 'TOEIC L&R 760点'},
                {icon: faIdCard, title: '普通自動車免許(AT)'},
            ]
        },
        {
            title: 'IT SKILLS',
            skills: [
                {icon: faJs, title: 'JavaScript', details: 'React, Next.js'},
                {icon: faPython, title: 'Python', details: 'Django'},
                {icon: faGem, title: 'Ruby', details: 'Sinatra'},
                {icon: faDatabase, title: 'DB', details: 'MySQL, SQLite3'},
                {icon: faCss3, title: 'CSS', details: 'SCSS, Tailwind CSS'},
            ]
        }
    ])
    return (<div className="h-screen flex flex-col">
            <div className="my-10 mx-16 flex-1">
                <div className="flex flex-col gap-y-16">
                    <div className="h-[150px] flex items-center divide-x-2">
                        <div className="flex flex-1 items-center gap-x-12 pr-10">
                            <Image src='/icon.png' width={150} height={150} className="rounded-full" />
                            <div className="flex flex-col justify-center gap-y-2">
                                <div className="text-6xl text-gray-600">Jumpei Kawahara</div>
                                <div className="text-3xl text-gray-400">Computer Science College Student</div>
                            </div>
                        </div>
                        <div className="text-5xl text-gray-600 font-light pl-10 py-4 w-[300px]">Skills</div>
                    </div>
                    
                    <div className="mx-20 text-xl text-black">
                        <div className="flex flex-col gap-y-10">
                            {skillGenres.map(skillGenre => (
                                <div className="flex flex-col gap-y-6">
                                    <div className="flex gap-x-4 items-center">
                                        <div className="text-[#405658] text-4xl"><FontAwesomeIcon icon={faScrewdriverWrench}/></div>
                                        <div className="text-[#405658] text-4xl font-light">{skillGenre.title}</div>
                                    </div>
                                    <div className="flex gap-10">
                                        {skillGenre.skills.map(skill => (
                                            <div className="flex flex-col gap-y-3 items-center px-2">
                                                <FontAwesomeIcon icon={skill.icon} className="w-[80px] h-[80px] text-[#6B9093]" />
                                                <div className="flex flex-col gap-y-1">
                                                    <div className="text-center text-2xl text-gray-700 font-thin w-[200px]">{skill.title}</div>
                                                    <div className="text-center text-base text-gray-700 font-thin">{skill.details}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={`fixed top-0 left-0 w-full h-screen z-[-1] opacity-5`}>
                    <Image src={`/icon.png`} layout={`fill`} objectFit={`cover`} />
                </div>
            </div>
            <Footer />
        </div>)
    }
