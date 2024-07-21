import ListItem from "./ListItem"

export default function ProjectList({ projects }) {
    return (
        <div className="flex items-center flex-wrap bg-blue-200 p-10">
            {
                projects.map(item => (
                    <ListItem key={item._id} projectData={item} />
                ))
            }
        </div>
    )
}