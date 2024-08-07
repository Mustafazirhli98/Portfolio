"use client"
//#region imports
import Breadcrumps from "@/components/ui/Breadcrumps"
import { infoPersonal } from "lib/constants/infoPersonal"
import Skills from "@/components/list/Skills"
import Experience from "@/components/list/Experience"
import Footer from "@/components/ui/Footer"
import { EXPERIENCES } from "lib/data/experienceData"

import gsap from "gsap"
import { useLayoutEffect } from "react"
import Image from "next/image"
//#endregion

export default function AboutMe() {


    useLayoutEffect(() => {
        const tl = gsap.timeline({ repeat: 0 })
        tl.fromTo("#section1", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1, })
        tl.fromTo("#section2", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5, })
        tl.fromTo("#section3", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5, })
    }, [])
    return (
        <>
            <div id="container" className={`w-full p-10 lg:px-20 `}>
                <Breadcrumps />
                <div id="section1" className="mt-8 lg:mt-10 ">
                    <h1 className=" font-bold text-center lg:text-left">{infoPersonal.name}</h1>
                    <h5 className="text-center lg:text-left">{infoPersonal.position}</h5>
                </div>
                <div id="section2" className="flex items-center flex-col lg:flex-row gap-10 mt-10 ">
                    <Image className="image rounded-full" alt="Mustafa Zırhlı" src={"/myself.jpeg"} height={180} width={180} loading="eager" />
                    <p className="flex text-justify">{infoPersonal.summaryText}</p>
                </div>
                <div id="section3" className="mt-10 gap-5 flex flex-col">
                    <Skills />
                    <Experience data={EXPERIENCES.experience} />
                </div>
            </div >
            <Footer />
        </>
    )
}