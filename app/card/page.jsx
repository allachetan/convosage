"use client"

import { useEffect, useRef, useState } from "react";
import { Transition } from '@headlessui/react';
import CardHeader from '@/components/card/CardHeader';
import CardFooter from '@/components/card/CardFooter';
import CardButton from '@/components/card/CardButton';
import { Zap } from "lucide-react";

const cardInfo = {
    // card header config
    headerStyle: {
        backgroundColor: "#f1f5f9"
    },
    name: "Chetan Alla",
    location: "Centreville, VA",
    bio: "Amazon Dev, Founder & CEO of Convosage",
    header: (
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
}

export default function Card() {

    const [opened, setOpened] = useState(false);
    const [parentWidth, setParentWidth] = useState(0);
    const cardRef = useRef(null);

    // Send the scroll height to the parent window
    const sendScrollHeight = () => {
        const height = cardRef.current?.scrollHeight;
        const width = cardRef.current?.offsetWidth;
        window.top.postMessage({ height: height, width: width }, '*');
    };

    const sendOpenedStatus = (newOpened) => {
        window.top.postMessage({ opened: newOpened }, "*");
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

            <CardButton
                id="cardButton"
                text={opened ? "Done" : "Request Yours"}
                buttonStyle={{
                    backgroundColor: "#000",
                    color: "#FFFFFF",
                    "--tw-ring-color": "#57534e",
                    width: opened ? "100%" : (parentWidth <= 640 ? "100%" : "fit-content")
                }}
                oc={() => {
                    setOpened(!opened);
                    sendOpenedStatus(!opened);
                }}
                ring={!opened}
            >
                <Transition
                    show={!opened}
                    enter="transition"
                    enterFrom="opacity-0"
                    enterTo=""
                >
                    <Zap width="18" height="18" />
                </Transition>
            </CardButton >

        </div >
    )
}