import Image from "next/image"

export default function NavBar() {
    return (
        <div className="fixed top-0 left-0 w-full z-10 bg-[#F5F9FB] shadow-md px-20">
            <div className="flex justify-end gap-x-8 h-16 items-center text-3xl font-light text-[#567275] ">
                <a href="/">Works</a>
                <a href="/about">About Me</a>
                <a href="/skills">Skills</a>
            </div>
        </div>
        )
    }
