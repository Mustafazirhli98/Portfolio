import Image from "next/image"
import ListItem from "./ListItem"

export default function ProjectList({ projects, category }) {
    return (
        <div className="flex flex-wrap">
            {
                projects.map(item => (
                    <ListItem key={item._id} projectData={item} tech={category} />
                ))
            }
        </div>
    )
}