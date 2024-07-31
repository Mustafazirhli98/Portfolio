"use client"

import PROJECT_DATA from "../../lib/data/projectData"
import ProjectList from "../../components/projectsOverlay/ProjectList"
import Breadcrumps from "../../components/ui/BreadCrumps"
import ProjectFilter from "./../../components/projectsOverlay/ProjectFilter"
import { useEffect, useState } from "react"
import COLOR_PALETTE from "../../lib/constants/colorPalette"
import Footer from "../../components/ui/Footer"


export default function Projects() {
    const [filterTo, setFilterTo] = useState("web")
    const mobileProjects = PROJECT_DATA.filter(item => item.categoryName === "React Native")
    const webProjects = PROJECT_DATA.filter(item => item.categoryName === "HTML/CSS/Javascript" || item.categoryName === "React")
    return (
        <>
            <div className="w-full px-10 lg:px-20 py-10">
                <Breadcrumps />
                <ProjectFilter setFilterTo={setFilterTo} pickedFilter={filterTo} />
                <div className="mt-8 lg:mt-10">
                    {
                        filterTo === "web" &&
                        webProjects.map(item => (
                            <div key={item.categoryName} className="mt-10">
                                <h1 style={{ color: COLOR_PALETTE.blue800 }} className="font-extrabold border-b py-5">{item.categoryName}</h1>
                                <ProjectList projects={item.projects} category={filterTo} />
                            </div>
                        ))
                        ||
                        filterTo === "mobile" &&
                        mobileProjects.map(item => (
                            <div key={item.categoryName} className="mt-10">
                                <h1 style={{ color: COLOR_PALETTE.blue800 }} className="font-extrabold border-b py-5">{item.categoryName}</h1>
                                <ProjectList projects={item.projects} category={filterTo} />
                            </div>
                        ))
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}