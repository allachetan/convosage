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
                <form 
                    className='w-full flex flex-col gap-2 rounded-md shadow-md shadow-slate-400 bg-white p-6 py-8'
                    action="https://api.web3forms.com/submit" method="POST"
                >
                    <input type="hidden" name="access_key" value="4c5d1e36-b99b-4757-a564-a008239c6a5b"></input>
                    <input type="hidden" name="redirect" value="/card"></input>
                    
                    <h1 className="text-4xl font-semibold mb-4 text-center">Let's boost your online ratings.</h1>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                        <input type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@company.com" required />
                    </div>

                    <div>
                        <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Website</label>
                        <input type="text" id="subject" name="website" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="https://www.google.com" required />
                    </div>

                    <div>
                        <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Tell us about your business</label>
                        <textarea id="message" rows="6" name="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder=""></textarea>
                    </div>

                    <button type="submit" className="mt-2 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-black">Submit</button>
                </form>
            </Transition>

            <CardButton
                id="cardButton"
                text={opened ? "Close" : "Work with us"}
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