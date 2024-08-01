import Image from "next/image";
import styles from "./project.module.css"
import COLOR_PALETTE from "../../lib/constants/colorPalette";
import { useState } from "react";
import Links from "./Links"

export default function ProjectCard({ projectData, category }) {
    const [currentImage, setCurrentImage] = useState(projectData._img)

    const changeCurrentImage = (nextImage) => {
        setCurrentImage(nextImage)
    }

    return (
        <div className={styles.itemContainer}>
            <div className="lg:w-[50%] flex flex-col gap-3 lg:gap-10">
                <h5 style={{ color: COLOR_PALETTE.blue700 }} className="font-semibold">{projectData._name}</h5>
                <div className="flex flex-col h-full justify-between">
                    <p>{projectData.description}</p>
                    <Links projectData={projectData} visibleDevice={"lg"} />
                </div>
            </div>
            <div className={`flex gap-4 lg:justify-center
             ${category === "mobile" && "flex-row lg:flex-col lg:items-center lg:w-[50%]"}
             ${category === "web" && "flex-col"}
             `}>
                <Image
                    alt={projectData._name}
                    width={category === "web" ? 700 : 200}
                    height={category === "mobile" ? 300 : 200}
                    className={`${category === "web" ? "lg:max-h-[300px]" : "max-h-[350px] max-w-[170px] lg:max-h-[400px] lg:max-w-[300]"}`}
                    src={currentImage} />
                <div className={"flex flex-wrap gap-4 lg:pt-5"}>
                    {
                        projectData._subImages && (
                            projectData._subImages.map(item => (
                                <Image
                                    onClick={() => changeCurrentImage(item)}
                                    key={item}
                                    alt="subImage"
                                    src={item}
                                    width={90}
                                    height={100}
                                    className={`cursor-pointer border-2 
                                    ${category === "web" ? "max-w-[60px] lg:max-w-[100px]" :
                                            "max-w-[60px] max-h-[70px] lg:max-h-[90px] lg:max-w-[50px]"
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