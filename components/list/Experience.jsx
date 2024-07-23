import COLOR_PALETTE from "../../lib/constants/colorPalette";

export default function Experience({ data }) {
    return (
        <div>
            <h5 className="text-center font-bold border-b lg:text-left py-2" style={{ color: COLOR_PALETTE.blue800 }}>Experience</h5>
            <div>
                {
                    data.map(experience => (
                        <ol key={experience.id} className="experienceList py-5"
                        >
                            <li className="font-semibold text-lg" style={{ color: COLOR_PALETTE.blue700 }}>
                                {experience.position}
                            </li>
                            <li className="font-semibold text-md" style={{ color: COLOR_PALETTE.blue600 }}>{experience.company}</li>
                            <li className="text-sm" style={{ color: COLOR_PALETTE.dark }}>{experience.description}</li>
                        </ol>
                    ))
                }
            </div>
        </div >
    )
}