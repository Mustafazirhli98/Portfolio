import COLOR_PALETTE from "../../lib/constants/colorPalette"

const ProjectFilter = ({ setFilterTo, pickedFilter }) => {
    const filterHandler = (value) => {
        setFilterTo(value)
    }
    return (
        <ul className="flex justify-center items-center gap-10 lg:gap-20 mt-8 border-b p-5">
            <li
                onClick={() => filterHandler("mobile")}
                style={{ backgroundColor: pickedFilter === "mobile" ? COLOR_PALETTE.blue200 : COLOR_PALETTE.blue50 }}
                className="p-3 w-24 text-center lg:p-4 rounded-md font-semibold text-xs lg:text-sm cursor-pointer">Mobile</li>
            <li onClick={() => filterHandler("web")}
                style={{ backgroundColor: pickedFilter === "web" ? COLOR_PALETTE.blue200 : COLOR_PALETTE.blue50 }}
                className="p-3 w-24 text-center lg:p-4 rounded-md font-semibold text-xs lg:text-sm cursor-pointer">Web</li>
        </ul>
    )
}


export default ProjectFilter