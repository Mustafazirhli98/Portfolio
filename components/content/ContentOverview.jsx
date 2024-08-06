import Link from "next/link";
import styles from "./content.module.css"

const ContentOverview = ({ type, link, title }) => {

    return (
        <div className={styles.container} >
            <Link className={`${styles.contentLink} ${title === "AboutMe" ? styles.aboutContent : styles.projectContent}`} href={link}>
                {type}
            </Link>
        </div >
    )

}

export default ContentOverview
