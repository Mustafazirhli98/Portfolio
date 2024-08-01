import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import COLOR_PALETTE from "../../lib/constants/colorPalette";

export default function Links({ projectData, visibleDevice }) {
    return (
        <div className={` justify-center gap-20 ${visibleDevice === "lg" ? "hidden lg:flex" : "flex lg:hidden"}`}>
            <Link href={projectData._githubLink} className="border px-10 py-2 rounded-xl" title="Go to Github" target="_blank">
                <FaGithub size={visibleDevice === "sm" ? 15 : 25} style={{ color: COLOR_PALETTE.blue200 }} />
            </Link>
            {projectData._appLink && (
                <Link href={projectData._appLink} className="border px-10 py-2 rounded-xl" title="Go to Demo" target="_blank">
                    <FaExternalLinkAlt size={visibleDevice === "sm" ? 15 : 25} style={{ color: COLOR_PALETTE.blue200 }} />
                </Link>
            )}
        </div>
    )
}