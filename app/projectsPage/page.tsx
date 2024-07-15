import PROJECT_DATA from "./../lib/data/data"

export default function Projects() {

    return (
        <div>
            {
                PROJECT_DATA.map(item => (
                    <div key={item.categoryName}>
                        <div>
                            <div>{item.categoryName}</div>
                            <div>{
                                item.projects.map(item => (
                                    <div key={item._id}>{item._name}</div>
                                ))
                            }</div>
                        </div>
                    </div>
                ))

            }
        </div>

    )
}