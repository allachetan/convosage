"use client"

import { useState } from "react";
import CardButton from "./card/CardButton";
import CardFooter from "./card/CardFooter";
import CardHeader from "./card/CardHeader";

const cardInfo = {
    className: "",
    bg: "bg-orange-100",
    name: "Chetan Alla",
    location: "Centreville, VA",
    bio: "Amazon Dev, Founder & CEO of Convosage",
    socials: false,
    color: "bg-black",
    fg: "text-white",
    buttonText: "Done",
    children: (
        <div className='w-32 h-32 rounded-full shadow-sm overflow-hidden'>
            <img
                src="/pfp.jpg"
                width={256}
                height={256}
                className='object-cover h-full w-full'
                alt="Picture of the ceo"
            />
        </div>
    )
};

export default function Card() {

    const [opened, setOpened] = useState(false);

    return (
        <div className={`fixed rounded-lg bottom-5 right-3 flex flex-col justify-end gap-2 p-1 z-50 max-w-[350px] ${opened ? "w-full  backdrop-blur-sm" : ""}`}>
            {
                opened ?? (
                    <div className='w-full flex flex-col rounded-md shadow-lg'>
                        <CardHeader {...cardInfo} />
                        <CardFooter />
                    </div>
                )
            }

            {
                opened ? (
                    <>
                        <div className='w-full flex flex-col rounded-md shadow-md'>
                            <CardHeader {...cardInfo} />
                            <CardFooter />
                        </div>

                        <CardButton text="Done" oc={() => {
                            setOpened(false)
                        }} />
                    </>
                ) : (
                    <CardButton text="Request Yours" oc={() => {
                        setOpened(true);
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                    </CardButton >
                )
            }

        </div >
    )
}