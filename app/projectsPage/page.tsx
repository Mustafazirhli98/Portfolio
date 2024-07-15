import PROJECT_DATA from "./../lib/data/data"
import ProjectList from "../components/projectOverlay/ProjectList"
export default function Projects() {

    return (
        <div className="h-screen p-10">
            <h1 className="text-center bg-red-200">Home / About me / Projects</h1>
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