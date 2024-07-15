import Link from "next/link";
import styles from "./content.module.css"

export default function ContentOverview({ type, link, img }) {
    return (
        <div className="w-[50%] h-full flex justify-center items-center">
            <Link className={`flex justify-center items-center ${img} text-gray-300 hover:text-black text-4xl h-[350px] hover:h-[400px] w-[550px] hover:w-[600px]`} href={link}>
                {type}
            </Link>
        </div>
    )

}
