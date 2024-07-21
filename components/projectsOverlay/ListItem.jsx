import Image from "next/image";
import styles from "./project.module.css"

export default function ProjectCard({ projectData }) {

    return (
        <div className={styles.itemContainer}>
            <div>
                <h5>{projectData._name}</h5>
                <p>{projectData.description}</p>
                <div className="links">
                    <span>Github</span>
                    <span>Application</span>
                </div>
            </div>
            <Image alt={projectData._name} width={300} height={100} src={`/${projectData._img}`} />
        </div>
    )
}