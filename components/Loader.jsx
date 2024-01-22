"use client"

import { useEffect, useRef, useState } from "react";

export default function Loader() {

    const [height, setHeight] = useState('0px');
    const [width, setWidth] = useState('0px');
    const [windowWidth, setWindowWidth] = useState(0);
    const iframeRef = useRef(null);

    const handleOutsideClick = (e) => {
        if (iframeRef.current && parseInt(iframeRef.current.style.height) > 100 && !iframeRef.current.contains(e.target)) {
            iframeRef.current.contentWindow.postMessage({ contactCardChangeOpen: "false" }, "*");
        }
    };

    useEffect(() => {
        // Function to handle incoming messages
        const handleResizeMessage = (event) => {
            if (iframeRef.current && event.source === iframeRef.current.contentWindow) {
                if (event.data.height) {
                    const newHeight = event.data.height;
                    if (newHeight && !isNaN(newHeight)) {
                        setHeight(`${newHeight}px`); // Update the state to adjust the iframe height
                    }
                }

                if (event.data.width) {
                    const newWidth = event.data.width;
                    if (newWidth && !isNaN(newWidth)) {
                        setWidth(`${newWidth}px`); // Update the state to adjust the iframe width
                    }
                }
            }
        };

        // Add the event listener for message events
        window.addEventListener('message', handleResizeMessage);

        document.addEventListener("mousedown", handleOutsideClick);

        setWindowWidth(window.visualViewport.width);

        // Cleanup function to remove the event listener
        return () => {
            window.removeEventListener('message', handleResizeMessage);
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <>
            <div className={`fixed top-0 left-0 w-screen h-screen backdrop-blur-sm z-[999]`} style={{display: windowWidth <= 640 && parseInt(height) > 100 ? "block" : "none"}}/>
            <iframe
                id="contact-card-iframe"
                ref={iframeRef}
                src="/card"
                style={{ 
                    height: height
                }}
                className={`fixed rounded-lg bottom-4 sm:bottom-5 sm:right-3 w-full sm:max-w-xs z-[1000] px-5 sm:p-0`}
            />
        </>
    )
}