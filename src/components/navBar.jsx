import { useState } from "react";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    const [links] = useState([
        {uri: '/', title: 'Works'},
        {uri: '/about', title: 'About Me'},
        {uri: '/skills', title: 'Skills'},
    ])

    return (
        <div className="fixed top-0 left-0 w-full z-10 bg-[#F5F9FB] shadow-md px-20">
            <div className="flex justify-end gap-x-8 h-20 items-center text-4xl">
                {links.map(link => (
                    <>
                        {link.uri == router.pathname ? 
                            (<a className="font-normal text-[#567275]" href={link.uri}>{link.title}</a>) :
                            (<a className="font-light text-[#A7BCBD]" href={link.uri}>{link.title}</a>)
                        } 
                    </>
                    
                ))}
            </div>
        </div>
        )
    }
