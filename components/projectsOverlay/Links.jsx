import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import styles from "./project.module.css"

const Links = ({ projectData, visibleDevice }) => {
    return (
        <div className={`${styles.projectLinks} ${visibleDevice === "lg" ? "hidden lg:flex" : "flex lg:hidden"}`}>
            {
                projectData._githubLink && (
                    <Link href={projectData._githubLink}
                        className={styles.projectLink} title="Go to Github" target="_blank">
                        <FaGithub size={visibleDevice === "sm" ? 20 : 25} />
                    </Link>
                )
            }
            {projectData._appLink && (
                <Link href={projectData._appLink}
                    className={styles.projectLink}
                    title="Go to Demo" target="_blank">
                    <FaExternalLinkAlt size={visibleDevice === "sm" ? 20 : 25} />
                </Link>
            )}
        </div>
    )
}

export default Links