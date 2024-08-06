import ListItem from "./ListItem"

const ProjectList = ({ projects, category }) => {
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

export default ProjectList