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
                <div className={`${tech === "web" ? styles.imageWrapperWeb : styles.imageWrapperMobile}`}>
                    <Image
                        loading="eager"
                        alt={projectData._name}
                        width={tech === "web" ? 700 : 200}
                        height={tech === "mobile" ? 400 : 200}
                        src={currentImage}
                        className={tech === "mobile" && "max-w-[200px] lg:max-w-[600px]"}
                    />
                </div>
                <div className={styles.subImagesContainer}>
                    {
                        projectData._subImages && (
                            projectData._subImages.map(item => (
                                <Image
                                    key={item}
                                    loading="eager"
                                    onClick={() => changeCurrentImage(item)}
                                    alt="subImage"
                                    src={item}
                                    width={70}
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
        </div >
    )
}

export default ListItem