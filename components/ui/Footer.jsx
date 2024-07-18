import COLOR_PALETTE from "../../lib/constants/colorPalette";
import ContactInfo from "../ContactInfo";

export default function Footer({ visibility }) {
    return (
        <div
            className={`flex flex-col p-1 ${visibility}`}
            style={{ backgroundColor: COLOR_PALETTE.blue, color: COLOR_PALETTE.light }}
        >
            <h1 className="text-center border-b border-b-[#95a5a6] p-2">CONTACT</h1>
            <ContactInfo />
        </div>
    )
}