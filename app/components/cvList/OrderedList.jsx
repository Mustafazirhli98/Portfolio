import COLOR_PALETTE from "../../lib/constants/colorPalette";

export default function OrderedList({ dataType, data }) {
    return (
        <div className="w-full mt-2 " >
            {
                dataType === "skills" && (
                    <div className="lg:p-5">
                        < h4
                            className="text-start lg:text-center  pl-0 lg:p-2 text-xl lg:text-xl font-semibold mt-3 border-b border-b-[#95a5a6]"
                            style={{ color: COLOR_PALETTE.blue }}
                        >
                            Skills
                        </h4 >
                        <ol className="mt-3 mb-4 lg:mb-0 lg:mt-5 pl-5 lg:p-0">
                            {
                                data.map(skills => (
                                    <li key={skills} className="list-disc text-sm lg:text-base" style={{ color: COLOR_PALETTE.dark }}>{skills}</li>
                                ))
                            }
                        </ol>
                    </div>
                ) ||
                dataType === "experience" && (
                    <div className="lg:p-5">
                        < h4
                            className="text-start lg:text-center  pl-0 lg:p-2 text-xl lg:text-xl font-semibold mt-3 border-b border-b-[#95a5a6] "
                            style={{ color: COLOR_PALETTE.blue }}
                        >Experience
                        </h4 >
                        {
                            data.map(experience => (
                                <ol key={experience.id} className="mt-3 lg:mt-5 mb-4 lg:mb-0 lg:p-0 text-sm lg:text-base" style={{ color: COLOR_PALETTE.dark }}>
                                    <li key={experience.id} style={{ color: COLOR_PALETTE.blue }} className="text-base lg:text-lg font-semibold">{experience.position}</li>
                                    <li key={experience.id} className="font-semibold text-sm lg:text-base" >{experience.company}</li>
                                    <li key={experience.id}>{experience.description}</li>
                                </ol>
                            ))
                        }
                    </div >
                ) ||
                dataType === "education" && (
                    <div className="lg:p-5">
                        < h4
                            className="text-start lg:text-center  pl-0 lg:p-2 text-xl lg:text-xl font-semibold mt-3 border-b border-b-[#95a5a6]"
                            style={{ color: COLOR_PALETTE.blue }}                        >
                            Education
                        </h4 >
                        <div className="flex flex-wrap text-[#bdc3c7]">
                            {
                                data.map(education => (
                                    <ol key={education.id} className="mt-3 lg:mt-5 mb-2 lg:mb-0 w-full lg:w-[50%] lg:pr-5 text-sm lg:text-base" style={{ color: COLOR_PALETTE.dark }}>
                                        <li className="lg:w-[50%] text-base lg:text-lg font-semibold" style={{ color: COLOR_PALETTE.blue }}>{education.college}</li>
                                        <li className="w-full flex justify-between font-semibold text-sm lg:text-base">
                                            <span className="font-semibold">{education.departmant}</span>
                                            <span className="font-normal text-xs flex items-center lg:text-base">{education.year}</span>
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