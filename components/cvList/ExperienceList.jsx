import COLOR_PALETTE from "../../lib/constants/colorPalette";

export default function ExperienceList({ data }) {
    return (
        <div className="lg:m-5">
            < h4
                className="text-start lg:text-center  pl-0 lg:p-2 text-xl lg:text-xl font-semibold mt-3 border-b border-b-[#95a5a6] "
                style={{ color: COLOR_PALETTE.blue }}
            >Experience
            </h4 >
            {
                data.map(experience => (
                    <ol key={experience.id} className="mt-3 lg:mt-5 mb-4 lg:mb-0 lg:p-0 text-sm lg:text-base"
                        style={{ color: COLOR_PALETTE.dark }}
                    >
                        <li style={{ color: COLOR_PALETTE.blue }} className="text-base lg:text-lg font-semibold">
                            {experience.position}
                        </li>
                        <li className="font-semibold text-sm lg:text-base" >{experience.company}</li>
                        <li >{experience.description}</li>
                    </ol>
                ))
            }
        </div >
    )
}