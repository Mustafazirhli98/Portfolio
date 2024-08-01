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
            <div className={`flex flex-col justify-center ${category === "mobile" && "items-center w-[50%]"}`}>
                <Image
                    alt={projectData._name}
                    objectFit="scla"
                    width={category === "web" ? 700 : 200}
                    height={category === "mobile" ? 300 : 200}
                    className={`${category === "web" ? "lg:max-h-[300px]" : "lg:max-h-[400px]"}`}
                    src={currentImage} />
                <div className={"flex gap-5 flex-wrap pt-5"}>
                    {
                        projectData._subImages && (
                            projectData._subImages.map(item => (
                                <Image
                                    onClick={() => changeCurrentImage(item)}
                                    key={item}
                                    alt="subImage"
                                    src={item}
                                    width={70}
                                    height={100}
                                    className="cursor-pointer border-2 max-w-[40px] lg:max-h-[70px] lg:max-w-[100px]" />
                            ))
                        )
                    }
                </div>
            </div>
            <Links projectData={projectData} visibleDevice={"sm"} />
        </div>
    )
}