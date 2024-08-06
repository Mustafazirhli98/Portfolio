import Image from "next/image";
import styles from "./project.module.css"
import { useState } from "react";
import Links from "./Links"

const ListItem = ({ projectData, tech }) => {
    const [currentImage, setCurrentImage] = useState(projectData._img)

    const changeCurrentImage = (nextImage) => {
        setCurrentImage(nextImage)
    }

    return (
        <div id={projectData._name} className={styles.itemContainer}>
            <div className={styles.descriptionContainer}>
                <h5>{projectData._name}</h5>
                <div className={styles.info}>
                    <p>{projectData.description}</p>
                    <Links projectData={projectData} visibleDevice={"lg"} />
                </div>
            </div>
            <div className={`${styles.previewContainer}
             ${tech === "mobile" && styles.previewContainerMobileTech}
             ${tech === "web" && styles.previewContainerWebTech}
             `}>
                <Image
                    loading="eager"
                    alt={projectData._name}
                    width={tech === "web" ? 700 : 200}
                    height={tech === "mobile" ? 300 : 200}
                    className={`${tech === "web" ? styles.previewImageWeb : styles.previewImageMobile}`}
                    src={currentImage} />
                <div className={styles.subImagesContainer}>
                    {
                        projectData._subImages && (
                            projectData._subImages.map(item => (
                                <Image
                                    loading="eager"
                                    onClick={() => changeCurrentImage(item)}
                                    key={item}
                                    alt="subImage"
                                    src={item}
                                    width={90}
                                    height={100}
                                    className={`${styles.subImages} 
                                    ${tech === "web" ? styles.subImagesWebTech :
                                            styles.subImagesMobileTech
                                        }`} />
                            ))
                        )
                    }
                </div>
            </div>
            <Links projectData={projectData} visibleDevice={"sm"} />
        </div>
    )
}

export default ListItem