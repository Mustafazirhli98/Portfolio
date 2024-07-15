import Link from "next/link";
import styles from "./content.module.css"

export default function ContentOverview({ type, link, img }) {
    return (
        <div className="w-[50%] h-full flex justify-center items-center">
            <Link className={`${img} ${styles.contentLink}`} href={link}>
                {type}
            </Link>
        </div>
    )

}
