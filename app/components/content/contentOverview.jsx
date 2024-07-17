import Link from "next/link";
import styles from "./content.module.css"
import COLOR_PALETTE from "./../../lib/constants/colorPalette"

export default function ContentOverview({ type, link, img }) {
    return (
        <div className={styles.container} style={{backgroundColor: COLOR_PALETTE.light}}>
            <Link className={`${img} ${styles.contentLink}`} href={link}>
                {type}
            </Link>
        </div >
    )

}
