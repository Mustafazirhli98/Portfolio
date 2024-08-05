export default function Experience({ data }) {
    return (
        <div>
            <h3 className="text-center font-bold border-b lg:text-left py-2">Experience</h3>
            <div>
                {
                    data.map(experience => (
                        <div key={experience.id} className="experienceList py-5"
                        >
                            <h4 className="font-semibold text-lg">
                                {experience.position}
                            </h4>
                            <h5 className="font-semibold text-md">{experience.company}</h5>
                            <p>{experience.description}</p>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}