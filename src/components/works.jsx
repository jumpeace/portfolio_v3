import Image from "next/image"
import {useState} from "react"

export default function Works() {
    const [works] = useState([
        {
            title: 'IAESTE TLSC',
            date: '2023年5月～',
            imgPath: '/shrine.JPG',
            description: '国際交流や他大学の人との交流をしています',
            link: {title: 'Instagram', uri: 'https://www.instagram.com/iaeste_japan_tlsc/'},
        },
        {
            title: 'HackU Kosen 2022',
            date: '2022年11月～12月',
            imgPath: '/hack_u_kosen.png',
            description: '点呼アプリを共同開発し、最優秀賞を受賞',
            link: {title: '発表会アーカイブ', uri: 'https://www.youtube.com/watch?v=VIwtxB-X24k&t=3430s'},
        },
        {
            title: '卒業研究(長野高専)',
            date: '2021年10月～2023年3月',
            imgPath: '/nitnc_research.png',
            description: '研究室の電子部品管理システムを開発',
        },
        {
            title: 'Web×IoT Makers',
            date: '2020年11月～2023年12月',
            imgPath: '/web_iot.png',
            description: 'COVIDiffuser を共同開発し、特別賞を受賞',
            link: {title: '公式サイト 開催報告', uri: 'https://webiotmakers.github.io/2020/shinshu/'},
        },
    ])
    return (
        <div className="flex py-8 md:py-12 lg:py-16 bg-gray-50">
            <div className="flex-1"></div>
            <div className="flex-initial grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-12 mx-auto">
                {works.map(work => 
                    <div className="flex flex-col bg-gray-50 rounded-3xl shadow-xl"
                        >
                        <img src={`${work.imgPath}`} alt={work.title}
                            className="flex-inline mx-auto rounded-t-3xl object-cover w-[272px] h-[153px] md:w-[304px] md:h-[171px] lg:w-[336px] lg:h-[189px]"
                        />

                        {/* 文章部分 */}
                        <div className="m-5 flex-1 flex flex-col">
                            {/* 見出し */}
                            <div className="text-base md:text-lg lg:text-xl text-gray-700">{work.title}</div>
                            {/* 日付 */}
                            <div className="flex-initial mt-1 text-xs lg:text-sm text-gray-400 text-right">
                                {work.date}
                            </div>

                            {/* 簡単な説明 */}
                            <div className="h-14 mt-2 lg:mt-3 tracking-wide text-black text-xs md:text-sm lg:text-base font-light">{work.description}</div>

                            {/* リンク */}
                            {work?.link && (
                                <div className="ml-auto">
                                    <a href={work.link.uri} target="_blank" rel="noreferrer"
                                        className="px-2 md:px-3 lg:px-4 py-1 md:py-2 tracking-wide rounded-lg text-xs md:text-sm lg:text-base no-underline text-black font-light bg-gray-200 hover:text-gray-400"
                                    >
                                        {work.link.title}
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <div className="flex-1"></div>
        </div>
        )
    }
