import PROJECT_DATA from "../../lib/data/projectData"
import ProjectList from "../../components/projectsOverlay/ProjectList"
import Breadcrumps from "../../components/ui/BreadCrumps"

export default function Projects() {

    return (
        <div className="w-full p-10">
            <Breadcrumps />
            <div className="mt-8">
                {
                    PROJECT_DATA.map(item => (
                        <div key={item.categoryName} className="mt-5">
                            <div>{item.categoryName}</div>
                            <ProjectList projects={item.projects} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}