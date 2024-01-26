(function () {
    const css = `
        #contact-card {
        position: fixed;
        bottom: 1.25rem;
        right: 0.75rem;
        width: 100%;
        max-width: 384px; /* Adjust based on your design */
        border: none; /* Add more styling as needed */
        z-index: 1000;
        padding: 0rem;
        }

        #contact-card-backdrop {
            position: fixed;
            top: 0px;
            left: 0px;
            height: 100vh;
            width: 100vw;
            -webkit-backdrop-filter: blur(4px);
            backdrop-filter: blur(4px);
            z-index: 999;
        }

        @media (max-width: 640px) {
            #contact-card {
                bottom: 1rem;
                right: 0rem;
                max-width: none;
                padding: 0rem 1.25rem;
            }
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.rel = 'stylesheet'
    styleSheet.innerText = css;
    document.head.appendChild(styleSheet);

    // Function to dynamically create and insert the iframe
    function injectCard() {
        const script = document.getElementById("csinjector");
        const zinval = script.getAttribute('data-zindex');
        const zIndex = isNaN(zinval) ? 999 : parseInt(zinval);

        const iframe = document.createElement('iframe');
        iframe.id = 'contact-card';
        iframe.src = '/card';
        iframe.style.height = '0px';
        iframe.style.zIndex = `${zIndex + 1}`;
        document.body.appendChild(iframe);

        const bgblur = document.createElement('div');
        bgblur.id = 'contact-card-backdrop';
        bgblur.style.display = 'none';
        bgblur.style.zIndex = `${zIndex}`;
        document.body.appendChild(bgblur);

        let opened = false;

        // Listen for messages from the iframe
        window.addEventListener('message', function (event) {
            // Ensure the message is from the iframe's contentWindow
            if (event.source === iframe.contentWindow) {
                const data = event.data;
                // Handle height and width adjustments
                if (data.height) {
                    iframe.style.height = `${data.height}px`;

                }

                if ("opened" in data) {
                    opened = data.opened;

                    if (this.window.visualViewport.width <= 640 && opened) {
                        bgblur.style.display = "block";
                    } else {
                        bgblur.style.display = "none";
                    }
                }
            }
        });

        const handleOutsideClick = (e) => {
            if (opened && !iframe.contains(e.target)) {
                iframe.contentWindow.postMessage({ contactCardSetOpen: false }, "*");
            }
        }

        document.addEventListener("mousedown", handleOutsideClick);
    }

    // Inject the card once the DOM is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', injectCard);
    } else {
        injectCard();
    }
})();
