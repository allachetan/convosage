"use client"

export default function RequestButton() {

    return (
        <button
            className="bg-black text-white py-1.5 px-4 rounded-md justify-self-end sm:hover:scale-105"
            onClick={() => {
                const iframe = window.document.getElementById('contact-card') as HTMLIFrameElement | null;
                if (iframe && iframe.contentWindow) {
                    iframe.contentWindow.postMessage({ contactCardSetOpen: true }, "*");
                }
            }}
        >
            <p className="text-md text-nowrap whitespace-nowrap">Request Yours</p>
        </button>
    )
}