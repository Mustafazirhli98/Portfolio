import Image from "next/image";
import styles from "./project.module.css"

export default function ProjectCard({ projectData }) {

    //isim, dil, resim, githublink, applink
    return (
        <div className={styles.itemContainer}>
            <h5>{projectData.name}</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi adipisci reiciendis reprehenderit maiores, illum, eveniet harum optio corporis earum iusto aliquam atque doloribus expedita, esse ea doloremque. Labore, suscipit soluta.</p>
            <Image alt={projectData._name} width={300} height={200} />
        </div>
    )
}