import Breadcrumps from "../components/ui/BreadCrumps"
import OrderedList from "./../components/cvList/OrderedList"
import { CV_LIST_DATA } from "./../lib/data/cvListData"

export default function AboutMe() {
    return (
        <div className="h-full bg-[#2c3e50] p-10">
            <Breadcrumps />
            <h1 className="text-4xl text-center text-[#b39732]">Mustafa Zırhlı</h1>
            <h5 className="text-xl text-center text-[#ecf0f1]">Frontend Web/Mobile Developer</h5>
            <div className="content-container p-5">
                <div className="">
                    <h4 className="text-xl text-[#b39732]">Summary</h4>
                    <div>
                        {/* image */}
                        <p className="text-[#bdc3c7]">I am a software developer with front-end development skills. Every day, I improve myself with patience and determination, working on projects both individually and within a team. I progress by being open to new technologies according to my needs. I am eager to gain experience aligned with my goals and prepare myself accordingly.</p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row">
                    <OrderedList dataType={"skills"} data={CV_LIST_DATA.skills} />
                    <OrderedList dataType={"experience"} data={CV_LIST_DATA.experience} />
                </div>
                <OrderedList dataType={"education"} data={CV_LIST_DATA.education} />
            </div>
        </div>
    )
}