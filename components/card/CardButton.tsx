export default function CardButton({
    text,
    bg = "bg-black",
    fg = "text-white",
    children,
    oc
} : {
    text: String,
    bg?: String,
    fg?: String,
    children?: React.ReactNode,
    oc?: ()=>void
}) {
    return (
        <button className={`w-full ${bg} flex gap-2 items-center justify-center ${fg} p-2 px-6 pr-7 rounded-full hover:scale-105 shadow-md`} onClick={oc}>
            {children}
            <p>{text}</p>
        </button>
    )
}