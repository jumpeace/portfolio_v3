import Footer from "@/components/footer"
import Image from "next/image"

export default function Skills() {
    return (
        <div className="min-h-screen flex flex-col">
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
                        <div className="text-5xl text-gray-600 font-light pl-10 py-4 w-64">Skills</div>
                    </div>
                    <div className="mx-20 text-xl text-black font-light tracking-wider flex flex-col leading-10">
                    </div>
                </div>
                <div className={`fixed top-0 left-0 w-full h-screen z-[-1] opacity-5`}>
                    <Image src={`/icon.png`} layout={`fill`} objectFit={`cover`} />
                </div>
            </div>
            <Footer />
        </div>
        )
    }
