import ContentOverview from "./components/content/ContentOverview";
import styles from "./components/content/content.module.css"

export default function Home() {
  return (
    <div className="flex h-screen flex-col lg:flex-row">
      <ContentOverview type={"About me"} link={"/aboutPage"} img={styles.aboutMeIMG} />
      <ContentOverview type={"Projects"} link={"/projectsPage"} img={styles.projectIMG} />
    </div>
  );
}
