import Breadcrumps from "../components/ui/BreadCrumps"
import OrderedList from "./../components/cvList/OrderedList"
import { CV_LIST_DATA } from "./../lib/data/cvListData"
import COLOR_PALETTE from "../lib/constants/colorPalette"

export default function AboutMe() {
    return (
        <div className="h-full p-3 lg:p-10" style={{ backgroundColor: COLOR_PALETTE.light }}>
            <Breadcrumps />
            <div className="mt-5">
                <h1 className="text-2xl lg:text-4xl text-center font-bold" style={{ color: COLOR_PALETTE.blue }}>Mustafa Zırhlı</h1>
                <h5 className="text-l lg:text-xl text-center " style={{ color: COLOR_PALETTE.turqoise }}>Frontend Web/Mobile Developer</h5>
                <div className="content-container p-5">
                    <div className="">
                        <h4 className="text-lg lg:text-xl font-semibold border-b border-b-[#95a5a6] pl-0 p-2 " style={{ color: COLOR_PALETTE.blue }}>Summary</h4>
                        <div>
                            {/* image */}
                            <p className="text-sm lg:text-base mt-5" style={{ color: COLOR_PALETTE.dark }}>I am a software developer with front-end development skills. Every day, I improve myself with patience and determination, working on projects both individually and within a team. I progress by being open to new technologies according to my needs. I am eager to gain experience aligned with my goals and prepare myself accordingly.</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <OrderedList dataType={"skills"} data={CV_LIST_DATA.skills} />
                        <OrderedList dataType={"experience"} data={CV_LIST_DATA.experience} />
                    </div>
                    <OrderedList dataType={"education"} data={CV_LIST_DATA.education} />
                </div>
            </div>
        </div>
    )
}