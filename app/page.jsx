'use client'

import gsap from "gsap"
import { useCallback, useEffect, useLayoutEffect, useState } from "react"
import ContentOverview from "./../components/content/ContentOverview"
import { MdKeyboardArrowRight } from "react-icons/md";



export default function Home() {
  const [angle, setAngle] = useState(0)

  useLayoutEffect(() => {
    gsap.fromTo(".homeContainer", { opacity: 0 }, { opacity: 1, duration: 1.2 })
  }, [])

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
      <div className="homeContainer">
        <ContentOverview type={"About me"} link={"/aboutPage"} title={"AboutMe"} />
        <ContentOverview type={"Projects"} link={"/projectsPage"} title={"Projects"} />
        <MdKeyboardArrowRight className="tracker-arrow"
          style={{ transform: `rotate(${angle}deg)` }}
        />
      </div>
  );
}