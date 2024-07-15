'use client'

import PROJECT_DATA from "./../lib/data/data"
import ProjectList from "../components/projectOverlay/ProjectList"
import Link from "next/link"
import styles from "./projects.module.css"
import { usePathname } from "next/navigation"

export default function Projects() {

    const pathname = usePathname()
    console.log(pathname)
    return (
        <div className="h-screen p-10">
            <ul className={`${styles.breadcrumps} text-center`}>
                <li>
                    <Link href={"/"}>Home</Link>
                </li>
                <li>
                    <Link href={"/aboutPage"}>About me</Link>
                </li>
                <li className={pathname === "/projectsPage" && styles.activeLink}>
                    <Link href={"/projectsPage"}>Projects</Link>
                </li>
            </ul>
            <div>
                {
                    PROJECT_DATA.map(item => (
                        <div key={item.categoryName} className="bg-blue-200 mt-5 p-5">
                            <div>
                                <div>{item.categoryName}</div>
                                <ProjectList projects={item.projects} />
                            </div>
                        </div>
                    ))

                }
            </div>
        </div>

    )
}