import ProjectCard from "./ProjectCard"

export default function ProjectList({ projects }) {
    return (
        <div className="flex items-center flex-wrap">
            {
                projects.map(item => (
                    <ProjectCard key={item._id} projectData={item} />
                ))
            }
        </div>
    )
}