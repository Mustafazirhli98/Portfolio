import Link from "next/link";
import { IoMail } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { infoPersonal } from "../../lib/constants/infoPersonal";
import styles from "./ui.module.css"

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <Link className={styles.footerLink} href={infoPersonal.mailAdress} title="mustafazirhli98@gmail.com">
                <IoMail style={{ width: 30, height: 30 }} />
            </Link>
            <Link className={styles.footerLink} target="_blank" href={infoPersonal.linkednAdress} title="Go to Linkedn">
                <FaLinkedin style={{ width: 30, height: 30 }} />
            </Link>
            <Link className={styles.footerLink} target="_blank" href={infoPersonal.githubAdress} title="Go to Github">
                <FaGithub style={{ width: 30, height: 30 }} />
            </Link>
        </div>
    )
}

export default Footer