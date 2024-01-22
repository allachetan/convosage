"use client"

import { useEffect, useRef, useState } from "react";
import { Transition } from '@headlessui/react';
import CardHeader from '@/components/card/CardHeader';
import CardFooter from '@/components/card/CardFooter';
import CardButton from '@/components/card/CardButton';

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
    const [parentWidth, setParentWidth] = useState(0);
    const cardRef = useRef(null);
    const buttonRef = useRef(null);

    // Send the scroll height to the parent window
    const sendScrollHeight = () => {
        const height = cardRef.current?.scrollHeight;
        const width = cardRef.current?.offsetWidth;
        window.top.postMessage({height: height, width: width}, '*');
    };

    const sendOpenedStatus = (newOpened) => {
        window.top.postMessage({opened: newOpened}, "*");
    }

    const handleMessage = (event) => {
        if (event.data) {
            if ("contactCardSetOpen" in event.data) {
                setOpened(event.data.contactCardSetOpen);
                sendOpenedStatus(event.data.contactCardSetOpen);
            }
        }
    };

    const updateParentWidth = () => {
        setParentWidth(parent.window.visualViewport.width);
    };

    useEffect(() => {
        sendScrollHeight(); // Send initial height

        // Observe size changes
        const resizeObserver = new ResizeObserver(() => {
            sendScrollHeight();
        });

        if (cardRef.current) {
            resizeObserver.observe(cardRef.current);
        }

        window.addEventListener('message', handleMessage);

        updateParentWidth();
        parent.window.addEventListener('resize', updateParentWidth);

        return () => {
            if (cardRef.current) {
                resizeObserver.unobserve(cardRef.current);
            }
            window.removeEventListener('message', handleMessage);
            parent.window.removeEventListener('resize', updateParentWidth);
        };
    }, []);

    return (
        <div ref={cardRef} className={`fixed bottom-0 right-0 gap-3 z-50 sm:gap-2 flex flex-col justify-end items-end p-1 w-full`} >

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

            <CardButton ref={buttonRef} text={opened ? "Done" : "Request Yours"} className={opened ? "w-full" : (parentWidth <= 640 ? "w-full ring ring-stone-600" : "w-fit ring ring-stone-600")} oc={() => {
                setOpened(!opened);
                sendOpenedStatus(!opened);
            }}
                hover={!opened && parentWidth > 640}
            >
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
    )
}