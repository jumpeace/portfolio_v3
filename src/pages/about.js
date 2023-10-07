import Footer from "@/components/footer"
import NavBar from "@/components/navBar";
import Image from "next/image"

export default function About() {
    return (
        <div className="pt-10 md:pt-12 lg:pt-16 h-screen flex flex-col">
            <div className="my-6 md:my-8 lg:my-10 mx-4 md:mx-10 lg:mx-16 flex-1">
                <div className="flex flex-col gap-y-8 md:gap-y-12 lg:gap-y-16">
                <div 
                    className="flex flex-col md:flex-row gap-y-4 md:gap-x-12 justify-center items-center"
                >
                    <Image src='/icon.png' width={80} height={80} className="md:hidden rounded-full" />
                    <Image src='/icon.png' width={120} height={120} className="hidden md:block lg:hidden rounded-full" />
                    <Image src='/icon.png' width={150} height={150} className="hidden lg:block rounded-full" />
                    <div className="flex flex-col justify-center items-center gap-y-1 md:gap-y-2">
                        <div className="text-3xl md:text-5xl lg:text-6xl text-gray-700">Jumpei Kawahara</div>
                        <div className="text-lg md:text-2xl lg:text-3xl text-gray-400">Computer Science College Student</div>
                    </div>
                </div>
                    <div className="mx-2 md:mx-4 lg:mx-8 text-sm md:text-lg lg:text-xl text-black font-light tracking-wider flex flex-col leading:9 md:leading-10">
                        <p>2002 年長野県松本市生まれ。 情報専攻の大学 3 年生。 20 歳。</p>
                        <p>　</p>
                        <p>2018 年に長野高専に入学。 </p>
                        <p>2020 年に友達の影響で Web 開発に興味を持つ。
    特に React や Django を使った Web 開発に熱中していた。 2022 年冬には HackU Kosen 2022 でクラスメートと共に最優秀賞を受賞。
    </p>
                        <p>2023 年に東京農工大学に編入学。国際交流と他大学の学生との交流のために IAESTE TLSC の学生ボランティアに参加中。</p>
                        <p>　</p>
                        <p>今後は今まで培った Web 開発の技術を向上させつつ、さらに画像認識の技術や英会話も勉強したいと考えています。</p>
                        <p>将来はグローバルに活躍できる IT エンジニアとして働きたいと考えています。</p>
                    </div>
                </div>
                <div className={`fixed top-0 left-0 w-full h-screen z-[-1] opacity-10`}>
                    <Image src={`/icon.png`} layout={`fill`} objectFit={`cover`} />
                </div>
            </div>
            <Footer />
            <NavBar />
        </div>
        )
    }
