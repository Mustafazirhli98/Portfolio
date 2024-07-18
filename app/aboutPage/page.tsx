import Breadcrumps from "../components/ui/BreadCrumps"
import OrderedList from "./../components/cvList/OrderedList"
import { CV_LIST_DATA } from "./../lib/data/cvListData"
import COLOR_PALETTE from "../lib/constants/colorPalette"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Link from "next/link";
import Footer from "./../components/Footer"

export default function AboutMe() {
    return (
        <>
            <div className="h-full p-3 lg:p-8" style={{ backgroundColor: COLOR_PALETTE.light }}>
                <Breadcrumps />
                <div className="mt-5">
                    <h1 className="text-2xl lg:text-4xl text-center font-bold" style={{ color: COLOR_PALETTE.blue }}>Mustafa Zırhlı</h1>
                    <h5 className="text-l lg:text-xl text-center " style={{ color: COLOR_PALETTE.turqoise }}>Frontend Web/Mobile Developer</h5>
                    <div className="content-container p-5 lg:pt-10">
                        <div className="lg:p-5">
                            <div className="flex items-center justify-between border-b border-b-[#95a5a6] pl-0 p-2 ">
                                <h4 className="text-lg lg:text-xl font-semibold " style={{ color: COLOR_PALETTE.blue }}>Summary</h4>
                                <ul className="flex invisible lg:visible">
                                    <li className="flex mr-5 text-xs justify-center items-center">
                                        <FaGithub className="w-5 h-5 mr-2" />
                                        <Link className="" href={"https://github.com/Mustafazirhli98"}>https://github.com/Mustafazirhli98</Link>
                                    </li>
                                    <li className="flex mr-5 text-xs justify-center items-center">
                                        <FaLinkedin className="w-5 h-5 mr-2" />
                                        <Link href={"https://www.linkedin.com/in/mustafazirhli/"}>linkedin.com/in/mustafazirhli/</Link>
                                    </li>
                                    <li className="flex text-xs justify-center items-center">
                                        <IoMail className="w-5 h-5 mr-2" />
                                        <Link href="mailto:mustafazirhli98@gmail.com">mustafazirhli98@gmail.com</Link>
                                    </li>
                                </ul>
                            </div>
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
            <Footer visibility={"lg:hidden"} />
        </>
    )
}