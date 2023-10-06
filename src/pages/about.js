import Image from "next/image"

export default function About() {
    return (
        <div className="h-screen flex justify-center">
            <div className="flex flex-col gap-y-8">
                <div className="text-3xl">自己紹介</div>
                <div className="flex flex-col justify-center items-center">
                    <div className="flex gap-x-8 items-center">
                        <div className="text-md text-gray-700">名前</div>
                        <div className="text-xl">川原 隼平</div>
                    </div>
                    <div className="flex">
                        <div>所属</div>
                        <div>東京農工大学 工学部 知能情報システム工学科</div>
                    </div>
                    <div className="flex gap-x-8 items-center">
                        <div className="text-md">年齢</div>
                        <div className="text-xl">20歳</div>
                    </div>
                    <div className="flex">
                        <div>資格</div>
                        <div>TOEIC L&R 760点</div>
                    </div>
                </div>
            </div>
            <div className={`fixed top-0 left-0 w-full h-screen z-[-1] opacity-10`}>
                <Image src={`/icon.png`} layout={`fill`} objectFit={`cover`} />
            </div>
        </div>
        )
    }
