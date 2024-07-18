import COLOR_PALETTE from "../../lib/constants/colorPalette";

export default function SkillsList({data}) {
    return (
        <div className="lg:m-5">
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
    )
}