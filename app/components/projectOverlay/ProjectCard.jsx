import Image from "next/image";

export default function ProjectCard({ projectData }) {

    //isim, dil, resim, githublink, applink
    return (
        <div>
            <Image alt={projectData._name} width={300} height={200}/>
        </div>
    )
}