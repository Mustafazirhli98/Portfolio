import Image from "next/image";
import styles from "./project.module.css"
import { useState } from "react";
import Links from "./Links"

const ListItem = ({ projectData, tech }) => {
    const [currentImage, setCurrentImage] = useState(projectData._img)

    const changeCurrentImage = (nextImage) => {
        setCurrentImage(nextImage)
    }
console.log(currentImage)
    return (
        <div id={projectData._name} className={styles.itemContainer}>
            <div className={styles.descriptionContainer}>
                <h5 className="lg:text-lg">{projectData._name}</h5>
                <div className={styles.info}>
                    <p>{projectData.description}</p>
                    <Links projectData={projectData} visibleDevice={"lg"} />
                </div>
            </div>
            <div className={`${styles.previewContainer}
             ${tech === "mobile" && styles.previewContainerMobileTech}
             ${tech === "web" && styles.previewContainerWebTech}
             `}>
                <div className={`${tech === "web" ? styles.imageWrapperWeb : styles.imageWrapperMobile} ${styles.aspectSM} lg:${styles.aspectLG}`}>
                    <Image
                        loading="eager"
                        alt={projectData._name}
                        width={tech === "web" ? 700 : 200}
                        height={tech === "mobile" ? 400 : 200}
                        src={currentImage}
                        className={"max-h-[500px]"}
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
                                    ${item === currentImage && styles.pickedSubImg}
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