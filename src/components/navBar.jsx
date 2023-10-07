import { useState, useReducer } from "react";
import { useRouter } from "next/router";

export default function NavBar() {
    const router = useRouter();
    const [links] = useState([
        {uri: '/', title: 'Top'},
        {uri: '/about', title: 'About Me'},
        {uri: '/skills', title: 'Skills'},
    ])
    const [isPrintMobileMenu, togglePrintMobileMenu] = useReducer(
        (state, _) => state=!state, false)

    return (
        <>
            {/* <div className="lg:hidden">
                {!isPrintMobileMenu ? 
                    (<div className="fixed top-0 left-0 w-full z-10">
                        <button onClick={()=>togglePrintMobileMenu()}>表示</button>
                    </div>):
                    (<div className="fixed top-0 left-0 w-full z-10 h-screen bg-[#F5F9FB]">
                        <button onClick={()=>togglePrintMobileMenu()}>非表示</button>
                        <div className="flex flex-col h-full justify-center gap-y-8 tracking-wider items-center text-5xl">
                            {links.map(link => (
                                <>
                                    {link.uri == router.pathname ? 
                                        (<a className="font-normal text-[#567275]" href={link.uri}>{link.title}</a>) :
                                        (<a className="font-light text-[#A7BCBD]" href={link.uri}>{link.title}</a>)
                                    } 
                                </>
                                
                            ))}
                        </div>
                    </div>)
                }
            </div> */}
            <div className="fixed top-0 left-0 w-full z-10 bg-white px-20 shadow-sm">
                <div className="flex justify-center gap-x-8 my-4 tracking-widest items-center text-2xl">
                    {links.map(link => (
                        <>
                            {link.uri == router.pathname ? 
                                (<a className="font-light text-[#415657]" href={link.uri}>{link.title}</a>) :
                                (<a className="font-light text-gray-300" href={link.uri}>{link.title}</a>)
                            } 
                        </>
                        
                    ))}
                </div>
            </div>
        </>
        )
    }
