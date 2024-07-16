import Breadcrumps from "./../components/ui/BreadCrumps"
import PROJECT_DATA from "../lib/data/projectData"
import ProjectList from "../components/projectsOverlay/ProjectList"

export default function Projects() {

    return (
        <div className="h-screen p-10">
            <Breadcrumps />
            <h1 className="text-4xl text-center">PROJECTS</h1>
            <div>
                {
                    PROJECT_DATA.map(item => (
                        <div key={item.categoryName} className="bg-blue-200 mt-5 p-5">
                            <div>
                                <div>{item.categoryName}</div>
                                <ProjectList projects={item.projects} />
                            </div>
                        </div>
                    ))

                }
            </div>
        </div>

    )
}