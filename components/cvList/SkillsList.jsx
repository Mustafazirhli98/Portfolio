import COLOR_PALETTE from "../../lib/constants/colorPalette";
import styles from "./list.module.css"

export default function SkillsList({ data }) {
    return (
        <div className={styles.outerContainer}>
            <h4
                className={`${styles.header}`} style={{ color: COLOR_PALETTE.blue }}>Skills</h4>
            <ol className={styles.orderedListSkills}>
                {
                    data.map(skills => (
                        <li key={skills} className="list-disc mb-1 lg:mb-2" style={{ color: COLOR_PALETTE.dark }}>{skills}</li>
                    ))
                }
            </ol>
        </div>
    )
}