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
    <div className="root-container" style={{ backgroundColor: COLOR_PALETTE.light }}>
      <ContentOverview type={"About me"} link={"/aboutPage"} boxColor={COLOR_PALETTE.blue} />
      <ContentOverview type={"Projects"} link={"/projectsPage"} boxColor={COLOR_PALETTE.turqoise} />
      <MdKeyboardArrowRight className="tracker-arrow"
        style={{ transform: `rotate(${angle}deg)` }}
      />
    </div>
  );
}


// projects sayfasını animasyonla başlat.