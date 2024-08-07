"use client"

import Link from "next/link";
import styles from "./ui.module.css"
import { usePathname } from "next/navigation";

const Breadcrumps = () => {
    const pathname = usePathname();

    return (
        <ul className={styles.breadcrumps}>
            <li>
                <Link className={styles.inactiveLink} href={"/"}>Home</Link>
            </li>
            <li>
                <Link href={"/aboutPage"}
                    className={pathname === "/aboutPage" ? styles.activeLink : styles.inactiveLink} >
                    About me
                </Link>
            </li>
            <li>
                <Link href={"/projectsPage"}
                    className={pathname === "/projectsPage" ? styles.activeLink : styles.inactiveLink}
                >Projects
                </Link>
            </li>
        </ul >
    )
}

export default Breadcrumps