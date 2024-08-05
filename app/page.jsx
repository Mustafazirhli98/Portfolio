'use client'

import { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ContentOverview from "./../components/content/ContentOverview"
import COLOR_PALETTE from "../lib/constants/colorPalette";

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
    <div className="container">
      <ContentOverview type={"About me"} link={"/aboutPage"} title={"AboutMe"} textColor={COLOR_PALETTE.white}/>
      <ContentOverview type={"Projects"} link={"/projectsPage"} title={"Projects"} textColor={COLOR_PALETTE.white} />
      <MdKeyboardArrowRight className="tracker-arrow"
        style={{ transform: `rotate(${angle}deg)`, color: COLOR_PALETTE.blue800 }}
      />
    </div>
  );
}


//LAST TASK
// about page ve projects page'e animasyon ekle.