import ContentOverview from "./components/content/contentOverview";
import styles from "./components/content/content.module.css"

export default function Home() {
  return (
    <div className="flex h-screen">
      <ContentOverview type={"About me"} link={"/aboutPage"} img={styles.aboutMeIMG} />
      <ContentOverview type={"Projects"} link={"/projectsPage"} img={styles.projectIMG} />
    </div>
  );
}
