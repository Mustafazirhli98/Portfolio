const BorderedBox = ({ children }) => {
    return (
        <div
            className={"flex flex-col justify-center items-center gap-1 min-w-[100px] max-w-[100px] p-2 rounded text-xs cursor-pointer hover:shadow-lg"}
        >
            {children}
        </div>
    )
}

export default BorderedBox