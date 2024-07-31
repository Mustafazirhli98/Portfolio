import Image from "next/image";
import styles from "./project.module.css"
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import COLOR_PALETTE from "../../lib/constants/colorPalette";
import { useState } from "react";

export default function ProjectCard({ projectData, category }) {
    const [currentImage, setCurrentImage] = useState(projectData._img)

    const changeCurrentImage = (nextImage) => {
        setCurrentImage(nextImage)
    }

    return (
        <div className={styles.itemContainer}>
            <div className="lg:w-[50%] flex flex-col gap-10">
                <h5>{projectData._name}</h5>
                <div className="flex flex-col h-full justify-between">
                    <p>{projectData.description}</p>
                    <div className="flex justify-center gap-20">
                        <Link href={projectData._githubLink} className="border px-10 py-2 rounded-xl" title="Go to Github" target="_blank">
                            <FaGithub size={25} style={{ color: COLOR_PALETTE.blue200 }} />
                        </Link>
                        {projectData._appLink && (
                            <Link href={projectData._appLink} className="border px-10 py-2 rounded-xl" title="Go to Demo" target="_blank">
                                <FaExternalLinkAlt size={25} style={{ color: COLOR_PALETTE.blue200 }} />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <div className={`flex flex-col justify-center ${category === "mobile" && "items-center"}`}>
                <Image
                    alt={projectData._name}
                    objectFit="scla"
                    width={category === "web" ? 700 : 200}
                    height={category === "mobile" ? 300 : 200}
                    className={`${category === "web" ? "max-h-[300px]" : "max-h-[400px]"}`}
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
                                    className="cursor-pointer border-red-200 border-2 max-h-[70px] max-w-[100px]" />
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
}