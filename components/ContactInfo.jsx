import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

import { infoPersonal } from "../lib/constants/InfoPersonal"; 1
import styles from "./../app/aboutPage/page.module.css"

export default function ContactInfo({ visibility }) {
    return (
        <ul className={`${styles.contactList}  ${visibility}`}>
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
    )
}