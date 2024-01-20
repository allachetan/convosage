export default function CardButton({
    text,
    bg = "bg-black",
    fg = "text-white",
    className = "",
    children,
    oc
} : {
    text: String,
    bg?: String,
    fg?: String,
    className?: String,
    children?: React.ReactNode,
    oc?: ()=>void
}) {
    return (
        <button className={`w-full ${bg} flex gap-2 items-center justify-center ${fg} p-3 px-6 pr-7 rounded-full md:hover:scale-95 shadow-md ` + className} onClick={oc}>
            {children}
            <p>{text}</p>
        </button>
    )
}