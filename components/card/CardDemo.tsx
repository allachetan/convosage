"use client"

import siteConfig from "@/siteConfig";
import CardButton from "./CardButton";
import CardFooter from "./CardFooter";
import CardHeader from "./CardHeader";
import { useEffect, useRef, useState } from "react";

export default function CardDemo() {

    const demos = [
        {
            headerStyle: {
                backgroundColor: "#ffedd5"
            },
            name: "Jessica Davis",
            location: siteConfig.cardDefaults.location,
            bio: "Top 5% RE/MAX agent in Fairfax",
            socials: true,
            socialsIconStyle: {
                fill: "#000"
            },
            header: (
                <div className='w-32 h-32 rounded-full bg-gray-400 overflow-hidden'>
                    <img
                        src={siteConfig.cardDefaults.pfp}
                        width={256}
                        height={256}
                        className='object-cover h-full w-full'
                        alt="Picture of the contact"
                    />
                </div>
            ),
            buttonStyle: {
                backgroundColor: "#000",
                color: "#FFFFFF"
            },
            buttonText: "Done",
        },
        {
            headerStyle: {
                backgroundColor: "#e5e7eb",
            },
            name: "",
            location: siteConfig.cardDefaults.location,
            bio: "Quick, quality fixes for every drip, leak, and clog.",
            socials: true,
            socialsIconStyle: {
                fill: "#042c7c",
                color: "#042c7c"
            },
            header: (
                <div className='w-64 h-32 rounded-md overflow-hidden'>
                    <img
                        src="/exlogo.png"
                        width={256}
                        height={256}
                        className='object-cover h-full w-full scale-125'
                        alt="Logo of the contact"
                    />
                </div>
            ),
            buttonStyle: {
                backgroundColor: "#042c7c",
                color: "#FFFFFF"
            },
            buttonText: "Done"
        }
    ]

    const [index, setIndex] = useState(1);
    let indexRef = useRef(0);

    useEffect(() => {
        const rotating = setInterval(() => {
            indexRef.current += 1;
            setIndex(indexRef.current);
        }, 3000);

        return () => {
            clearInterval(rotating);
        };
    }, []);


    return (
        <div className={`w-full min-h-[560px] max-w-xs flex flex-col justify-center gap-2`}>
            <div className='w-full flex flex-col rounded-md shadow-[0px_0px_10px_rgba(0,0,0,0.1)]'>
                <CardHeader {...demos[index % demos.length]} />
                <CardFooter />
            </div>

            <CardButton 
                text={demos[index % demos.length].buttonText} 
                buttonStyle={demos[index % demos.length].buttonStyle as any}
            />
        </div>
    )
}