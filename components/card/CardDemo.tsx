"use client"

import siteConfig from "@/siteConfig";
import CardButton from "./CardButton";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import { useEffect, useRef, useState } from "react";

export default function CardDemo() {

    const demos = [
        {
            className: "",
            bg: "bg-orange-100",
            name: "Jessica Davis",
            location: siteConfig.cardDefaults.location,
            bio: "Top 5% RE/MAX agent in Fairfax",
            socials: true,
            color: "bg-black",
            fg: "text-white",
            fill: "fill-black",
            buttonText: "X",
            children: (
                <div className='w-32 h-32 rounded-full bg-gray-400 overflow-hidden'>
                    <img
                        src={siteConfig.cardDefaults.pfp}
                        width={256}
                        height={256}
                        className='object-cover h-full w-full'
                        alt="Picture of the contact"
                    />
                </div>
            )
        },
        {
            className: "",
            bg: "bg-gray-200",
            name: "",
            location: siteConfig.cardDefaults.location,
            bio: "Quick, quality fixes for every drip, leak, and clog.",
            socials: true,
            color: "bg-[#042c7c]",
            fg: "text-white",
            fill: "fill-[#042c7c]",
            buttonText: "Done",
            children: (
                <div className='w-64 h-32 rounded-md overflow-hidden'>
                    <img
                        src="/exlogo.png"
                        width={256}
                        height={256}
                        className='object-cover h-full w-full scale-125'
                        alt="Logo of the contact"
                    />
                </div>
            )
        }
    ]
    const [index, setIndex] = useState(2);
    let indexRef = useRef(0);

    useEffect(() => {
        setInterval(() => {
            indexRef.current += 1;
            setIndex(indexRef.current);
        }, 3000);

    }, []);


    return (
        <div className={`w-full min-h-[534px] max-w-xs flex flex-col justify-center gap-2`}>
            <div className='w-full flex flex-col rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.1)]'>
                <CardHeader {...demos[index % demos.length]} />
                <CardFooter />
            </div>

            <CardButton text={demos[index % demos.length].buttonText} bg={demos[index % demos.length].color} fg={demos[index % demos.length].fg} />
        </div>
    )
}