'use client'

import gsap from "gsap"
import { useEffect, useLayoutEffect, useState } from "react"
import ContentOverview from "./../components/content/ContentOverview"
import { MdKeyboardArrowRight } from "react-icons/md";



export default function Home() {

  useLayoutEffect(() => {
    gsap.fromTo(".container", { opacity: 0 }, { opacity: 1, duration: 1.2 })
  }, [])

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
      <ContentOverview type={"About me"} link={"/aboutPage"} title={"AboutMe"} />
      <ContentOverview type={"Projects"} link={"/projectsPage"} title={"Projects"} />
      <MdKeyboardArrowRight className="tracker-arrow"
        style={{ transform: `rotate(${angle}deg)` }}
      />
    </div>
  );
}