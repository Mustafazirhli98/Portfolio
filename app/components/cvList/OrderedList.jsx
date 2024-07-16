export default function OrderedList({ dataType, data }) {
    return (
        <div className="w-full mt-2 " >
            {
                dataType === "skills" && (
                    <div className="p-5">
                        < h4 className="text-center p-2 text-xl mt-3 border-b border-b-[#95a5a6] text-[#b39732]">Skills</h4 >
                        <ol className="mt-5">
                            {
                                data.map(skills => (
                                    <li key={skills} className="list-disc text-[#bdc3c7]">{skills}</li>
                                ))
                            }
                        </ol>
                    </div>
                ) ||
                dataType === "experience" && (
                    <div className="p-5">
                        < h4 className="text-center text-xl p-2 mt-3 border-b border-b-[#95a5a6] text-[#b39732]">Experience</h4 >
                        {
                            data.map(experience => (
                                <ol key={experience.id} className="mt-5">
                                    <li key={experience.id} className="text-[#bdc3c7]">{experience.position}</li>
                                    <li key={experience.id} className="list-disc text-[#bdc3c7]">{experience.company}</li>
                                    <li key={experience.id} className="text-[#bdc3c7]">{experience.description}</li>
                                </ol>
                            ))
                        }
                    </div >
                ) ||
                dataType === "education" && (
                    <div className="p-5">
                        < h4 className="text-xl text-center p-2 mt-3 border-b border-b-[#95a5a6] text-[#b39732]">Education</h4 >
                        <div className="flex flex-wrap text-[#bdc3c7]">
                            {
                                data.map(education => (
                                    <ol key={education.id} className="mt-5 w-[50%] pr-5">
                                        <li className="w-[50%]">{education.college}</li>
                                        <li className="list-disc w-full flex justify-between">
                                            <span>{education.departmant}</span>
                                            <span>{education.year}</span>
                                        </li>
                                        {
                                            education.description && <li>{education.description}</li>
                                        }
                                    </ol>
                                ))
                            }
                        </div>
                    </div>
                )
            }

        </div >
    )
}