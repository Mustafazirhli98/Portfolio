import { FaCircleArrowUp } from "react-icons/fa6";
import styles from "./ui.module.css"
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin"
import { ScrollTrigger } from "gsap/all";
import { useEffect, useLayoutEffect } from "react";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

const ScrollTop = () => {
    useLayoutEffect(() => {
        ScrollTrigger.create({
            trigger: "#container",
            start: "top top",
            end: "bottom bottom",
            onUpdate: self => {
                // Görünürlük ayarı
                if (self.progress > 0.1) {
                    gsap.to("#up", { opacity: 0.5, duration: 0.5 }); // autoAlpha kullanarak görünürlük ve opacity
                } else {
                    gsap.to("#up", { opacity: 0, duration: 0.5 });
                }
                // Sayfanın en altına yaklaşıldığında y konumunu değiştirme
                if (self.progress > 0.9) {
                    gsap.to("#up", { y: -88, duration: 0.5 });
                } else {
                    gsap.to("#up", { y: 0, duration: 0.5 });
                }
            },
        });
    }, []);


    const scrollToTop = () => {
        gsap.to(window, { scrollTo: 0, duration: 1, ease: "power2.in" })
    }

    return (
        <FaCircleArrowUp
            id="up"
            className={styles.scroller}
            size={35} onClick={scrollToTop} />
    )
}

export default ScrollTop