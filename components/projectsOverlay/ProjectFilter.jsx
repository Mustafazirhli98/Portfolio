import COLOR_PALETTE from "../../lib/constants/colorPalette"

const ProjectFilter = ({ setFilterTo, pickedFilter }) => {
    const filterHandler = (value) => {
        setFilterTo(value)
    }
    return (
        <ul className="flex justify-center items-center gap-10 lg:gap-20 mt-8 p-8">
            <li onClick={() => filterHandler("web")}
                style={{ backgroundColor: pickedFilter === "web" && COLOR_PALETTE.blue50 }}
                className="border-b shadow-lg hover:bg-gray-100 px-5 py-3 w-32 text-center lg:px-6 lg:py-3 font-semibold text-xs lg:text-sm cursor-pointer">
                Web
            </li>
            <li
                style={{ backgroundColor: pickedFilter === "mobile" && COLOR_PALETTE.blue50 }}
                onClick={() => filterHandler("mobile")}
                className="border-b shadow-lg hover:bg-gray-100 px-5 py-3 w-32 text-center lg:px-6 lg:py-3 font-semibold text-xs lg:text-sm cursor-pointer">Mobile</li>
        </ul>
    )
}


export default ProjectFilter