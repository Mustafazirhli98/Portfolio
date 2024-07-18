import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Link from "next/link";

import { infoPersonal } from "./../../lib/constants/InfoPersonal";
import COLOR_PALETTE from "../../lib/constants/colorPalette";
import { CV_LIST_DATA } from "./../../lib/data/cvListData";
import Breadcrumps from "../../components/ui/BreadCrumps";
import ListOverlay from "../../components/cvList/ListOverlay";
import Footer from "./../../components/ui/Footer"
import styles from "./page.module.css";

export default function AboutMe() {
    return (
        <>
            <div className={styles.outerContainer} style={{ backgroundColor: COLOR_PALETTE.light }}>
                <Breadcrumps />
                <div className={styles.innerContainer}>
                    <h1 className="text-center font-bold" style={{ color: COLOR_PALETTE.blue }}>{infoPersonal.name}</h1>
                    <h5 className="text-center" style={{ color: COLOR_PALETTE.turqoise }}>{infoPersonal.position}</h5>
                    <div className={styles.contentContainer}>
                        <div className={styles.personalInfo}>
                            <div className={styles.summaryContainer}>
                                <h5 className="font-semibold" style={{ color: COLOR_PALETTE.blue }}>Summary</h5>
                                <ul className={styles.contactList}>
                                    <li>
                                        <FaGithub className="w-5 h-5 mr-2" />
                                        <Link className="" href={"https://github.com/Mustafazirhli98"}>{infoPersonal.githubAdress}</Link>
                                    </li>
                                    <li>
                                        <FaLinkedin className="w-5 h-5 mr-2" />
                                        <Link href={"https://www.linkedin.com/in/mustafazirhli/"}>{infoPersonal.linkednAdress}</Link>
                                    </li>
                                    <li>
                                        <IoMail className="w-5 h-5 mr-2" />
                                        <Link href="mailto:mustafazirhli98@gmail.com">{infoPersonal.mailAdress}</Link>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-sm lg:text-base mt-5" style={{ color: COLOR_PALETTE.dark }}>{infoPersonal.summaryText}</p>
                        </div>
                        <div className="flex flex-col lg:flex-row">
                            <ListOverlay dataType={"skills"} data={CV_LIST_DATA.skills} />
                            <ListOverlay dataType={"experience"} data={CV_LIST_DATA.experience} />
                        </div>
                        <ListOverlay dataType={"education"} data={CV_LIST_DATA.education} />
                    </div>
                </div>
            </div >
            <Footer visibility={"lg:hidden"} />
        </>
    )
}