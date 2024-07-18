import COLOR_PALETTE from "../../lib/constants/colorPalette";

export default function EducationList({data}) {
    return (
        <div className="lg:m-5">
            < h4
                className="text-start lg:text-center  pl-0 lg:p-2 text-xl lg:text-xl font-semibold mt-3 border-b border-b-[#95a5a6]"
                style={{ color: COLOR_PALETTE.blue }}                        >
                Education
            </h4 >
            <div className="flex flex-wrap text-[#bdc3c7] group">
                {
                    data.map((education, index) => (
                        <ol key={education.id}
                            className={`mt-3 lg:mt-5 mb-2 lg:mb-0 w-full lg:w-[50%] lg:pr-5 text-sm lg:text-base ${index % 2 == 1 && "lg:pl-5"}`}
                            style={{ color: COLOR_PALETTE.dark }}>
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