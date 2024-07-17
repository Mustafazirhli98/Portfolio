'use client'

import { useEffect, useState } from "react";
import ContentOverview from "./components/content/ContentOverview";
import styles from "./components/content/content.module.css"
import { MdKeyboardArrowRight } from "react-icons/md";
import COLOR_PALETTE from "./lib/constants/colorPalette";

export default function Home() {

  const [angle, setAngle] = useState(0)
  useEffect(() => {
    const onRotate = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const rad = Math.atan2(deltaY, deltaX);
      const deg = rad * (180 / Math.PI);
      setAngle(deg);
    }
    window.addEventListener("mousemove", onRotate)
    return () => window.removeEventListener("mousemove", onRotate)
  }, [])

  return (
    <div className="h-screen flex flex-col justify-center lg:flex-row" style={{ backgroundColor: COLOR_PALETTE.light }}>
      <ContentOverview type={"About me"} link={"/aboutPage"} img={styles.aboutMeIMG} />
      <ContentOverview type={"Projects"} link={"/projectsPage"} img={styles.projectIMG} />
      <MdKeyboardArrowRight className="invisible lg:visible absolute top-[50%] translate-x-[-50%] translate-y-[-50%] w-14 h-14"
        style={{ transform: `rotate(${angle}deg)` }}
      />

    </div>
  );
}


//about page'i clean'e çek. Module dosyası oluştur. Listeleri teke düşür.
// projects sayfasını animasyonla başlat.