import COLOR_PALETTE from "../../lib/constants/colorPalette";
import styles from "./list.module.css"

export default function EducationList({ data }) {
    return (
        <div className={styles.outerContainer}>
            <h4 className={styles.header} style={{ color: COLOR_PALETTE.blue }}>Education</h4>
            <div className={styles.innerContainer}>
                {
                    data.map((education, index) => (
                        <ol key={education.id}
                            className={`${styles.orderedListEducation} ${index % 2 == 1 && "lg:pl-5"}`}
                            style={{ color: COLOR_PALETTE.dark }}>
                            <li className={styles.headerLi1} style={{ color: COLOR_PALETTE.blue }}>{education.college}</li>
                            <li className={styles.headerLi2}>
                                <span className="font-semibold">{education.departmant}</span>
                                <span className="font-normal text-xs flex items-center lg:text-base">{education.year}</span>
                            </li>
                            {
                                education.description && <li>{education.description}</li>
                            }
                        </ol>
                    ))
                }
            </div>
        </div>
    )
}