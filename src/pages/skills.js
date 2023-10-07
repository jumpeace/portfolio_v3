import Footer from "@/components/footer"
import Image from "next/image"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench, faDatabase, faGem, faLanguage, faCertificate, faIdBadge, faCode } from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import { faCss3, faJs, faPython } from "@fortawesome/free-brands-svg-icons";
import NavBar from "@/components/navBar";

export default function Skills() {
    const [skillGenres] = useState([
        {
            title: 'CERTIFICATIONS',
            icon: faIdBadge,
            bgColor: 'white',
            skills: [
                {icon: faLanguage, title: 'TOEIC L&R 760点'},
                {icon: faIdCard, title: '普通自動車免許(AT)'},
            ]
        },
        {
            title: 'IT SKILLS',
            icon: faCode,
            bgColor: 'gray-50',
            skills: [
                {icon: faJs, title: 'JavaScript', details: 'React, Next.js'},
                {icon: faPython, title: 'Python', details: 'Django'},
                {icon: faGem, title: 'Ruby', details: 'Sinatra'},
                {icon: faDatabase, title: 'DB', details: 'MySQL, SQLite3'},
                {icon: faCss3, title: 'CSS', details: 'Tailwind CSS, SCSS'},
            ]
        }
    ])
    return (<div className="pt-16 w-screen h-screen flex flex-col">
            <div className="flex-1 z-0">
                <div className="flex flex-col items-center gap-y-2 md:gap-y-10 lg:gap-y-16">
                    {/* <div 
                        className="text-gray-600 font-light lg:pl-10 py-4 mt-4 lg:mt-0 lg:w-[300px] flex items-center justify-center gap-x-2 md:gap-x-4"
                    >
                        <FontAwesomeIcon icon={faScrewdriverWrench} className="text-2xl md:text-5xl" />
                        <div className="text-3xl md:text-6xl tracking-wider">Skills</div> 
                    </div> */}
                    <div className="w-screen">
                        <div className="h-screen w-screen flex justify-center items-center">
                            <div 
                                className="flex gap-x-12 justify-center"
                            >
                                <div className="flex justify-center items-center gap-x-12">
                                    <FontAwesomeIcon icon={faScrewdriverWrench} className="text-7xl font-light text-gray-700"/> 
                                    <div className="text-8xl font-light tracking-widest text-gray-600">Skills</div>
                                    <FontAwesomeIcon icon={faScrewdriverWrench} className="text-7xl font-light text-gray-700"/> 
                                </div>
                            </div>
                            <div className={`fixed top-0 left-0 w-full h-screen z-[-1] opacity-40`}>
                                <Image src={`/skills.png`} layout={`fill`} objectFit={`cover`} />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            {skillGenres.map(skillGenre => (
                                <div className={`flex py-20 bg-${skillGenre.bgColor}`}>
                                    <div className="flex-1"></div>
                                    <div className="flex-initial flex flex-col gap-y-6">
                                        <div className="flex gap-x-6 items-center">
                                            <FontAwesomeIcon icon={skillGenre.icon} className="text-gray-500 text-xl md:text-5xl" />
                                            <div className="text-gray-600 text-xl md:text-5xl tracking-wider font-light">{skillGenre.title}</div>
                                        </div>
                                        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10">
                                            {skillGenre.skills.map((skill) => (
                                                <div className="flex flex-col gap-y-3 items-center px-2">
                                                    <FontAwesomeIcon icon={skill.icon} className="w-[150px] h-[150px] text-gray-400" />
                                                    <div className="flex flex-col gap-y-1">
                                                        <div className="text-center text-2xl text-gray-500 w-[200px]">{skill.title}</div>
                                                        <div className="text-center text-base text-gray-500 font-thin">{skill.details}</div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex-1"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <NavBar />
        </div>)
    }
