import styles from "./project.module.css"

const ProjectFilter = ({ setFilterTo, pickedFilter }) => {
    const filterHandler = (value) => {
        setFilterTo(value)
    }
    return (
        <ul className={styles.filterContainer}>
            <li onClick={() => filterHandler("web")}
                className={`${styles.filterItem} ${pickedFilter === "web" && styles.pickedItem}`}>
                Web
            </li>
            <li
                onClick={() => filterHandler("mobile")}
                className={`${styles.filterItem} ${pickedFilter === "mobile" && styles.pickedItem}`}>
                Mobile
            </li>
        </ul>
    )
}


export default ProjectFilter