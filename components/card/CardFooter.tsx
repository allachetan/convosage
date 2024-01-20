import siteConfig from "@/siteConfig";

export default function CardFooter({className = "", roundedTop = false}) {
    return (
        <div className={'bg-white flex flex-col divide-y divide-stone-100 rounded-b-md ' + className}>
            <button className={`w-full min-h-[40px] flex gap-2 px-3 items-center justify-center relative text-sm hover:bg-stone-50 ${roundedTop ? "rounded-t-md" : ""}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                <span>Call</span>
                <span className="ml-auto text-xs text-stone-500">{siteConfig.cardDefaults.number}</span>
            </button>

            <button className='w-full min-h-[40px] flex gap-2 px-3 items-center justify-center relative text-sm hover:bg-stone-50'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle-more"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /><path d="M8 12h.01" /><path d="M12 12h.01" /><path d="M16 12h.01" /></svg>
                <span>Text</span>
                <span className="ml-auto text-xs text-stone-500">{siteConfig.cardDefaults.number}</span>
            </button>

            <button className='w-full min-h-[40px] flex gap-2 px-3 items-center justify-center relative text-sm hover:bg-stone-50'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                <span>Email</span>
                <span className="ml-auto text-xs text-stone-500">{siteConfig.cardDefaults.email}</span>
            </button>

            <button className='w-full min-h-[40px] flex gap-2 px-3 items-center justify-center relative text-sm hover:bg-stone-50 rounded-b-md'>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-plus"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="19" x2="19" y1="8" y2="14" /><line x1="22" x2="16" y1="11" y2="11" /></svg>
                <span>Add to Contacts</span>
            </button>
        </div>
    )
}