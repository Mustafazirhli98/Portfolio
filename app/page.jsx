import ContentOverview from "./components/content/contentOverview";
import styles from "./components/content/content.module.css"

export default function Home() {
  return (
    <div className="flex h-screen">
      <ContentOverview type={"projects"} link={"/projectsPage"} img={styles.aboutMeIMG} />
      <ContentOverview type={"aboutMe"} link={"/aboutPage"} img={styles.projectIMG} />
    </div>
  );
}
