"use client"

import { useEffect, useRef, useState } from "react";
import { Transition } from '@headlessui/react';
import CardButton from '@/components/card/CardButton';
import { CheckCircle, Zap } from "lucide-react";

export default function Card() {

    const [opened, setOpened] = useState(false);
    const [parentWidth, setParentWidth] = useState(0);
    const cardRef = useRef(null);

    const [submitted, setSubmitted] = useState(false);

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Get the form data
        const formData = new FormData(event.target);

        // Convert the form data to an object
        const formProps = Object.fromEntries(formData);

        // Use fetch API to send the form data as JSON
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formProps)
            });

            // Handle response
            const result = await response.json();
            console.log(result);
            // Here you can change the view or state based on the result
            setSubmitted(true);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

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
                {
                    submitted ? (
                        <div className="w-full h-[558px] flex flex-col justify-center items-center bg-white shadow-md rounded-md shadow-slate-400 gap-4 p-16">
                            <CheckCircle className="w-32 h-32 text-green-400" />
                            <p className="font-semibold text-3xl text-center text-gray-600">We will get back to you shortly.</p>
                        </div>
                    ) : (
                        <form
                            className='w-full flex flex-col gap-2 rounded-md shadow-md shadow-slate-400 bg-white p-6 py-8'
                            onSubmit={handleSubmit}
                        >
                            <input type="hidden" name="access_key" value="4c5d1e36-b99b-4757-a564-a008239c6a5b"></input>
                            <input type="hidden" name="redirect" value="/card"></input>

                            <h1 className="text-4xl font-semibold mb-4 text-center">Let's boost your online ratings.</h1>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@company.com" required />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Website</label>
                                <input type="text" id="subject" name="website" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 " placeholder="https://www.google.com" required />
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Tell us about your business</label>
                                <textarea id="message" rows="6" name="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder=""></textarea>
                            </div>

                            <button type="submit" className="mt-2 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-gray-800 sm:w-fit hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-black">Submit</button>
                        </form>
                    )
                }
            </Transition>

            <CardButton
                id="cardButton"
                text={opened ? "Close" : "Work with us"}
                buttonStyle={{
                    width: opened ? "100%" : (parentWidth <= 640 ? "100%" : "fit-content"),
                    backgroundColor: "#000",
                    color: "#FFFFFF",
                    "--tw-ring-color": "#57534e",
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