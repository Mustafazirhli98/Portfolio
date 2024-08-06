"use client"

import Link from "next/link";
import styles from "./ui.module.css"
import { usePathname } from "next/navigation";

const Breadcrumps = () => {
    const pathname = usePathname();

    return (
        <ul className={styles.breadcrumps}>
            <li>
                <Link href={"/"}>Home</Link>
            </li>
            <li className={pathname === "/aboutPage" ? styles.activeLink : ""}>
                <Link href={"/aboutPage"}>About me</Link>
            </li>
            <li className={pathname === "/projectsPage" ? styles.activeLink : ""}>
                <Link href={"/projectsPage"}>Projects</Link>
            </li>
        </ul >
    )
}

export default Breadcrumps