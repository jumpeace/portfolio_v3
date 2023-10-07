import Image from "next/image"

export default function Title() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <div 
                className="flex gap-x-12 justify-center"
            >
                <Image src='/icon.png' width={150} height={150} className="rounded-full" />
                <div className="flex flex-col justify-center gap-y-2">
                    <div className="text-6xl text-gray-700">Jumpei Kawahara</div>
                    <div className="text-3xl text-gray-400">Computer Science College Student</div>
                </div>
            </div>
            <div className={`fixed top-0 left-0 w-full h-screen z-[-1] opacity-40`}>
                <Image src={`/hero.JPG`} layout={`fill`} objectFit={`cover`} />
            </div>
        </div>
        )
    }
