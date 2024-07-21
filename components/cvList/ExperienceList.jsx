import COLOR_PALETTE from "../../lib/constants/colorPalette";
import styles from "./list.module.css"

export default function ExperienceList({ data }) {
    return (
        <div className={styles.outerContainer}>
            <h4 className={styles.header} style={{ color: COLOR_PALETTE.blue }}>Experience</h4>
            {
                data.map(experience => (
                    <ol key={experience.id} className={styles.orderedListExperience}
                        style={{ color: COLOR_PALETTE.dark }}
                    >
                        <li style={{ color: COLOR_PALETTE.blue }} className={styles.headerLi1}>
                            {experience.position}
                        </li>
                        <li className={styles.headerLi2} >{experience.company}</li>
                        <li >{experience.description}</li>
                    </ol>
                ))
            }
        </div >
    )
}