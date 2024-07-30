import Image from "next/image";
import styles from "./project.module.css"
import Link from "next/link";

export default function ProjectCard({ projectData, category }) {


    return (
        <div className={styles.itemContainer}>
            <div className="lg:w-[50%] flex flex-col gap-10">
                <h5>{projectData._name}</h5>
                <div>
                    <p>{projectData.description}</p>
                    <ul className="flex flex-col">
                        <Link href={projectData._githubLink} className="text-blue-500">Go to Github!</Link>
                        {projectData._appLink && (<Link href={projectData._appLink} className="text-blue-500">Go to Demo!</Link>)}
                    </ul>
                </div>
            </div>
            <div className="lg:w-[50%]">
                <Image
                    alt={projectData._name}
                    width={category === "web" ? 700 : 200}
                    height={category === "mobile" ? 300 : 200}
                    src={projectData._img} />
            </div>
        </div>
    )
}