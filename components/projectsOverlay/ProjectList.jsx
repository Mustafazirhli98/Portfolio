import ListItem from "./ListItem"

export default function ProjectList({ projects }) {
    return (
        <div className="flex flex-wrap">
            {
                projects.map(item => (
                    <ListItem key={item._id} projectData={item} />
                ))
            }
        </div>
    )
}