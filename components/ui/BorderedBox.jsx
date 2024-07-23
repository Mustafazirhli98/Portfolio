import COLOR_PALETTE from "../../lib/constants/colorPalette"

const BorderedBox = ({ children }) => {
    return (
        <div className="min-w-[100px] cursor-pointer max-w-[100px] hover:shadow-lg p-2 rounded flex flex-col justify-center items-center gap-1 text-xs"
            style={{ borderColor: COLOR_PALETTE.turqoise }}>
            {children}
        </div>
    )
}

export default BorderedBox