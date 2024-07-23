import Link from "next/link";
import COLOR_PALETTE from "../../lib/constants/colorPalette";
import { IoMail } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { infoPersonal } from "../../lib/constants/InfoPersonal";


export default function Footer() {
    return (
        <div className="h-20 flex justify-center items-center gap-10" style={{ backgroundColor: COLOR_PALETTE.blue900, color: COLOR_PALETTE.light }}>
            <Link href={infoPersonal.mailAdress} title="mustafazirhli98@gmail.com">
                <IoMail style={{ width: 30, height: 30, color: COLOR_PALETTE.white }} />
            </Link>
            <Link href={infoPersonal.linkednAdress} title="Go to Linkedn">
                <FaLinkedin style={{ width: 30, height: 30, color: COLOR_PALETTE.white }} />
            </Link>
            <Link href={infoPersonal.githubAdress} title="Go to Github">
                <FaGithub style={{ width: 30, height: 30, color: COLOR_PALETTE.white }} />
            </Link>
        </div>
    )
}