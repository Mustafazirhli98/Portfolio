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
      <ContentOverview type={"About me"} link={"/aboutPage"} boxColor={COLOR_PALETTE.blue100} textColor={COLOR_PALETTE.blue800}/>
      <ContentOverview type={"Projects"} link={"/projectsPage"} boxColor={COLOR_PALETTE.blue400} textColor={COLOR_PALETTE.white} />
      <MdKeyboardArrowRight className="tracker-arrow"
        style={{ transform: `rotate(${angle}deg)`, color: COLOR_PALETTE.blue800 }}
      />
    </div>
  );
}


//ABOUT
//color pallette'i css'e taşı, tüm stil özelliklerini classname, tailwind ve css dosyalarından ver, ortak css kurallarını global css'e işle.
//style proplarından kurtul

//PROJECTS
// Projelerin görsellerini küçült ve hazırla
// Her bir projenin (eğe varsa) birden fazla fotoğrafını yükle ve seçtiğinde dinamik olarak resmi değiştir. (alternatif resimler ana resmin altında küçük kutucuk şeklinde olacak.)
// Projelerin her birinde kullanılan teknolojileri icon olarak veya yazı olarak alanlarında belirt.
// Responsive design'ı hazırla.
// Sayfa açılış ve kaydırışta animasyon ekle.
// Animasyon işini About me ve homePage'e de uyarla.