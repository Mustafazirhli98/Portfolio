"use client"

import PROJECT_DATA from "../../lib/data/projectData"
import ProjectList from "../../components/projectsOverlay/ProjectList"
import Breadcrumps from "../../components/ui/BreadCrumps"
import ProjectFilter from "./../../components/projectsOverlay/ProjectFilter"
import { useEffect, useState } from "react"


export default function Projects() {
    const [filterTo, setFilterTo] = useState("mobile")
    const mobileProjects = PROJECT_DATA.filter(item => item.categoryName === "HTML/CSS/Javascript" || item.categoryName === "React")
    const webProjects = PROJECT_DATA.filter(item => item.categoryName === "React Native")

    return (
        <div className="w-full p-10">
            <Breadcrumps />
            <ProjectFilter setFilterTo={setFilterTo} pickedFilter={filterTo} />
            <div className="mt-8">
                {
                    filterTo === "mobile" &&
                    mobileProjects.map(item => (
                        <div key={item.categoryName} className="mt-5">
                            <div>{item.categoryName}</div>
                            <ProjectList projects={item.projects} />
                        </div>
                    ))
                }
                {
                    filterTo === "web" &&
                    webProjects.map(item => (
                        <div key={item.categoryName} className="mt-5">
                            <div>{item.categoryName}</div>
                            <ProjectList projects={item.projects} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}