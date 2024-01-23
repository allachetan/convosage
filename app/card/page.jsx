"use client"

import { useEffect, useRef, useState } from "react";
import { Transition } from '@headlessui/react';
import CardHeader from '@/components/card/CardHeader';
import CardFooter from '@/components/card/CardFooter';
import CardButton from '@/components/card/CardButton';
import { Wrench, Zap } from "lucide-react";
import siteConfig from "@/siteConfig";
import { useSearchParams } from "next/navigation";

const cards = {
    "convosage": {
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
        ),
        tel: siteConfig.cardDefaults.number,
        sms: siteConfig.cardDefaults.number,
        email: siteConfig.cardDefaults.email,
        vcf: "chetanalla.vcf",
        social: {
            tiktok: "https://www.tiktok.com",
            twitter: "https://www.twitter.com",
            instagram: "https://www.instagram.com",
            facebook: "https://www.facebook.com",
            maps: "https://www.google.com/maps"
        },
        buttonStyle: {
            backgroundColor: "#000",
            color: "#FFFFFF",
            "--tw-ring-color": "#57534e",
        },
        buttonTextOpened: "Done",
        buttonTextClosed: "Request Yours",
        buttonRing: true,
        buttonIcon: (
            <Zap width="18" height="18" />
        )

    },
    "superPlumbers": {
        headerStyle: {
            backgroundColor: "#e5e7eb",
        },
        name: "",
        location: siteConfig.cardDefaults.location,
        bio: "Quick, quality fixes for every drip, leak, and clog.",
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
        tel: siteConfig.cardDefaults.number,
        sms: siteConfig.cardDefaults.number,
        email: siteConfig.cardDefaults.email,
        vcf: "chetanalla.vcf",
        social: {
            tiktok: "https://www.tiktok.com",
            twitter: "https://www.twitter.com",
            instagram: "https://www.instagram.com",
            facebook: "https://www.facebook.com",
            maps: "https://www.google.com/maps"
        },
        buttonStyle: {
            backgroundColor: "#042c7c",
            color: "#FFFFFF",
            "--tw-ring-color": "#a5b4fc",
        },
        buttonTextOpened: "Close",
        buttonTextClosed: "Work With Us",
        buttonRing: true,
        buttonIcon: (
            <Wrench width="18" height="18" />
        ),
    }
}

export default function Card() {

    const [opened, setOpened] = useState(false);
    const [parentWidth, setParentWidth] = useState(0);
    const cardRef = useRef(null);

    const searchParams = useSearchParams();
    const cardId = searchParams.get('cardid') || "convosage";
    const cardInfo = cardId in cards ? cards[cardId] : cards["convosage"];

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
                show={!opened}
                enter="transition delay-150"
                enterFrom="opacity-0"
                enterTo=""
            >
                <img src="/tryicon.png" className="h-16 animate-bounce mt-3 opacity-95 -mb-2" />
            </Transition>

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
                    <CardFooter {...cardInfo} />
                </div>
            </Transition>

            <CardButton
                id="cardButton"
                text={opened ? cardInfo.buttonTextOpened : cardInfo.buttonTextClosed}
                buttonStyle={{
                    width: opened ? "100%" : (parentWidth <= 640 ? "100%" : "fit-content"),
                    ...cardInfo.buttonStyle
                }}
                oc={() => {
                    setOpened(!opened);
                    sendOpenedStatus(!opened);
                }}
                ring={!opened && cardInfo.buttonRing}
            >
                <Transition
                    show={!opened}
                    enter="transition"
                    enterFrom="opacity-0"
                    enterTo=""
                >
                    {cardInfo.buttonIcon}
                </Transition>

            </CardButton >

        </div >
    )
}