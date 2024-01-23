"use client"

export default function CardButton ({
    text = "",
    ring = false,
    children = <></>,
    oc = () => {},
    buttonStyle = {
        backgroundColor: "#000",
        color: "#FFFFFF",
        "--tw-ring-color": "#57534e"
    },
    textStyle = {}
}) {
    return (
        <button 
            className={`flex gap-2 items-center justify-center p-3 px-6 pr-7 rounded-full active:scale-95 shadow-md ${ring ? "ring" : ""}`} 
            onClick={oc}
            style={buttonStyle}
        >
            {children}
            <p 
                className="text-nowrap whitespace-nowrap"
                style={textStyle}
            >{text}</p>
        </button>
    );
};