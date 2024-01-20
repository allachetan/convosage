"use client"

import { useEffect, useRef, useState } from "react";
import CardButton from "./card/CardButton";
import CardFooter from "./card/CardFooter";
import CardHeader from "./card/CardHeader";
import { Transition } from '@headlessui/react';

const cardInfo = {
    className: "w-full",
    bg: "bg-slate-100",
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

    const newRef = useRef(null);

    const handleOutsideClick = (e) => {
        if (newRef.current && !newRef.current.contains(e.target)) {
            setOpened(false);
        }
    };
    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    });

    return (
        <>

            {
                opened && (
                    <div className="fixed top-0 left-0 w-screen h-screen backdrop-blur-sm z-40 sm:hidden"/>
                )
            }

            <div ref={newRef} className={`fixed rounded-lg bottom-4 sm:bottom-5 sm:right-3 gap-3 sm:gap-2 py-1 px-6 sm:p-1 z-50 flex flex-col justify-end items-end w-full sm:w-fit sm:max-w-xs ${opened ? "" : ""}`} >

                <Transition
                    show={opened}
                    enter="transition duration-200"
                    enterFrom="scale-y-50 translate-y-32 opacity-0"
                    enterTo=""
                    leave="transition duration-100"
                    leaveFrom="opacity-50"
                    leaveTo="scale-y-50 translate-y-32 opacity-0"
                    className="w-full"
                >
                    <div className='w-full flex flex-col rounded-md shadow-md shadow-slate-400'>
                        <CardHeader {...cardInfo} />
                        <CardFooter />
                    </div>
                </Transition>

                <CardButton text={opened ? "Done" : "Request Yours"} className={opened ? "" : "w-fit"} oc={() => {
                    setOpened(!opened);
                }}>
                    <Transition
                        show={!opened}
                        enter="transition"
                        enterFrom="opacity-0"
                        enterTo=""
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-zap"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
                    </Transition>
                </CardButton >

            </div >
        </>
    )
}