import Image from "next/image"
import {useState} from "react"

export default function Footer() {
    const [socials] = useState([
        {name: 'GitHub', uri: 'https://github.com/jumpeace/', imgPath: '/github.svg'}
    ])
    return (
        <div 
            className="pt-4 md:pt-6 lg:pt-8 pb-2 md:pb-3 lg:pb-4 flex justify-center items-center z-10 bg-[#D4DFE0]"
        >
            <div 
                className="flex flex-col gap-y-2 lg:gap-y-4 justify-center"
            >
                <div className="flex justify-center gap-x-6 md:gap-x-8 lg:gap-x-10">
                    {socials.map(social => (
                        <a key={social.name} href={social.uri} className="cursor-pointer rounded-full" target="_blank">
                            <Image src={social.imgPath} width={30} height={30} className="md:hidden border-none rounded-full"/>
                            <Image src={social.imgPath} width={36} height={36} className="hidden md:block lg:hidden border-none rounded-full"/>
                            <Image src={social.imgPath} width={48} height={48} className="hidden lg:block border-none rounded-full"/>
                        </a>
                    ))}
                </div>
                <div className="flex justify-center">
                    <div className="text-sm md:text-lg lg:text-xl text-[#405658]">© 2023, Jumpei Kawahara</div>
                </div>
            </div>
        </div>
        )
    }
