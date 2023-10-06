import Image from "next/image"
import {useState} from "react"

export default function Footer() {
    const [socials] = useState([
        {name: 'GitHub', uri: 'https://github.com/jumpeace/', imgPath: '/github.svg'}
    ])
    return (
        <div 
            className="pt-8 pb-4 flex justify-center items-center"
            style={{backgroundColor: '#D4DFE0'}}
        >
            <div 
                className="flex flex-col gap-y-4 justify-center"
            >
                <div className="flex justify-center gap-x-10">
                    {socials.map(social => (
                        <a href={social.uri} className="cursor-pointer rounded-full" target="_blank">
                            <Image src={social.imgPath} width={48} height={48} className="border-none rounded-full object-fit"/>
                        </a>
                    ))}
                </div>
                <div className="flex justify-center">
                    <div className="text-xl">© 2023, Jumpei Kawahara</div>
                </div>
            </div>
            <div className={`fixed top-0 left-0 w-full h-screen z-[-1] opacity-10`}>
                <Image src={`/icon.png`} layout={`fill`} objectFit={`cover`} />
            </div>
        </div>
        )
    }
